/* Service Worker for ShopnoKolom - Updated 2024 */
const CACHE_NAME = 'shopnokolom-v2';
const assets = [
  './dharabahik/admin/index.php',
  './dharabahik/admin/Meni.json',
  './logo.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // সার্ভিস ওয়ার্কার সাথে সাথে একটিভ করবে
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // ব্রাউজারের কন্ট্রোল নেবে
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
