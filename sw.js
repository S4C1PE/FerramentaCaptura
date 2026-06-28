const CACHE_NAME = 'ideias-v4';
// Local assets must be cached for offline to work — install fails if any are missing.
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];
// Best-effort: a CDN failure here must NOT break the Service Worker install.
const OPTIONAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c =>
      c.addAll(CORE_ASSETS).then(() =>
        // allSettled so an unreachable font CDN doesn't reject the whole install
        Promise.allSettled(OPTIONAL_ASSETS.map(a => c.add(a)))
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Don't cache API calls
  if (url.hostname === 'api.anthropic.com') return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok && e.request.method === 'GET') {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
