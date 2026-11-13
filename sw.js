const CACHE = "mi-tutor-v9";
const ARCHIVOS = ["./", "./index.html", "./manifest.json", "./icon.svg",
  "./img/fondo-llamada.jpg", "./img/cabecera-ruta.jpg", "./img/fondo-hoy.jpg",
  "./img/fondo-repasar.jpg", "./img/fondo-mapa.jpg", "./img/celebracion.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
