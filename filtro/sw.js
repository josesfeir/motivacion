const CACHE = 'filtro-v2';
const FILES = ['./', 'index.html', 'manifest.json', 'icon.svg', 'filtro-familiar.mobileconfig'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => {
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
