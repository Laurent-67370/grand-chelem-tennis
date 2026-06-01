// ═══════════════════════════════════════════════════════
// SERVICE WORKER — Grand Chelem 2026
// Cache-first pour offline, network-first pour updates
// ═══════════════════════════════════════════════════════

const CACHE_NAME = 'grand-chelem-v1';
const BASE = '/grand-chelem-tennis/';

const STATIC_ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap'
];

// ── Installation : mise en cache des ressources statiques ──
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS.filter(function(url) {
        return !url.startsWith('https://fonts');
      }));
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── Activation : nettoyage des anciens caches ──
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── Fetch : stale-while-revalidate pour index.html, cache-first pour le reste ──
self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Ignorer les requêtes non-GET et les APIs externes
  if (e.request.method !== 'GET') return;
  if (url.includes('fonts.gstatic.com') || url.includes('fonts.googleapis.com')) {
    e.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(e.request).then(function(cached) {
          var fetchPromise = fetch(e.request).then(function(response) {
            cache.put(e.request, response.clone());
            return response;
          }).catch(function() { return cached; });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // index.html : network-first (pour toujours avoir la dernière version)
  if (url.endsWith('/') || url.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, clone);
        });
        return response;
      }).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // Autres ressources : cache-first
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(response) {
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, response.clone());
        });
        return response;
      });
    })
  );
});

// ── Message : forcer la mise à jour du cache ──
self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
