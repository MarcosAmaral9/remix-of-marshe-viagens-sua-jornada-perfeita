const CACHE_NAME = 'marshe-viagens-v2';
const STATIC_ASSETS = [
  '/',
  '/favicon.ico?v=2',
  '/favicon-32.png?v=2',
  '/favicon-192.png?v=2',
  '/apple-touch-icon.png?v=2',
  '/placeholder.svg',
];

// Install: cache shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        STATIC_ASSETS.map((asset) =>
          cache.add(asset).catch(() => {})
        )
      )
    )
  );
  self.skipWaiting();
});

// Activate: clean old caches (incluindo v1 com favicon antigo)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: stale-while-revalidate para páginas, cache-first para assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Apenas GET e mesma origem
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Nunca cachear o favicon antigo
  if (url.pathname === '/favicon.ico' && !url.search) {
    event.respondWith(fetch(request).catch(() => caches.match('/favicon.ico?v=2')));
    return;
  }

  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match('/')))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, copy));
        }
        return res;
      });
    })
  );
});
