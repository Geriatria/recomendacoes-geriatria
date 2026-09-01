const CACHE_NAME = "geriatria-v12";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.webmanifest",
  "./imagens/geriatria-sem-texto.png",
  "./imagens/logo-ulsra.jpg",
  "./imagens/icon-192.png",
  "./imagens/icon-512.png",
  "./imagens/icon-mobile-512.png"
];

// Instalação: guardar ficheiros essenciais
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_FILES);
    })
  );

});

// Ativação: eliminar caches antigas
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Pedidos: atualizar ficheiros da app quando houver rede
// e usar cache quando estiver offline
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") {
    return;
  }

  const request = event.request;
  const url = new URL(request.url);

  const ficheiroAtualizavel =
    url.pathname.endsWith("/") ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/style.css") ||
    url.pathname.endsWith("/script.js") ||
    url.pathname.endsWith("/manifest.webmanifest");

  if (ficheiroAtualizavel) {
    event.respondWith(
      fetch(request)
        .then(function (networkResponse) {
          const copia = networkResponse.clone();

          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, copia);
          });

          return networkResponse;
        })
        .catch(function () {
          return caches.match(request);
        })
    );

    return;
  }

  // Imagens e restantes ficheiros: cache primeiro
  event.respondWith(
    caches.match(request).then(function (cachedResponse) {
      return cachedResponse || fetch(request);
    })
  );
});

// ===============================
// ATUALIZAÇÃO CONTROLADA DA APP
// ===============================

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});