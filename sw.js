// ============ Service Worker - 离线缓存 ============
const CACHE_NAME = 'jingcheng-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/data.js',
  '/js/pages/home.js',
  '/js/pages/hotels.js',
  '/js/pages/hotel-detail.js',
  '/js/pages/booking.js',
  '/js/pages/orders.js',
  '/js/pages/ai-assistant.js',
  '/js/pages/profile.js',
  '/manifest.json'
];

// 安装 - 缓存资源
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('缓存已打开');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 激活 - 清理旧缓存
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// 拦截请求 - 网络优先，失败回退到缓存
self.addEventListener('fetch', e => {
  // API 请求直接走网络
  if (e.request.url.includes('/api/')) return;
  
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
