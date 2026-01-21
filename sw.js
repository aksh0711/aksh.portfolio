const CACHE = 'aksh-portfolio-v1'
const toCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon-192.png',
  '/favicon-512.png'
]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(toCache)))
})

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)))
})
