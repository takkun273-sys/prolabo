const CACHE_NAME = 'prolabo-monster-v1';
const ASSETS = [
  './',
  './index.html',
  './icon-192.png',
  './icon-512.png',
];

// インストール時：アセットをキャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.log('cache addAll partial error:', err);
      });
    })
  );
  self.skipWaiting();
});

// アクティベート時：古いキャッシュを削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// フェッチ時：キャッシュ優先、なければネットワーク
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => {
        // オフライン時はキャッシュ済みのindex.htmlを返す
        return caches.match('./index.html');
      });
    })
  );
});
