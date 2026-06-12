self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());

self.addEventListener('push', function(e) {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'AKASHA', {
      body: data.body || 'Message AKASHA',
      icon: '/akasha/icon-192.png',
      badge: '/akasha/icon-192.png'
    })
  );
});
