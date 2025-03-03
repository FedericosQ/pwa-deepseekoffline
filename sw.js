const CACHE_NAME = 'preview-pwa-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/visor.html',
  '/styles.css',
  '/app.js',
  '/lib/lz-string.min.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Evento Install (Corregido)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))  // <-- Punto añadido aquí
  );  // <-- Paréntesis de cierre añadido
});

// Evento Fetch (Corregido)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))  // <-- Punto añadido aquí
  );
});