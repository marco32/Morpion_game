var cacheName="pwa";
self.addEventListener('install', function(e) {

	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll(filesToCache);
		})
	);
});

var filesToCache=[
'/Morpion_game/',
'/Morpion_game/index.html',
'/Morpion_game/js/app.js',
'/Morpion_game/css/style.css',
'/Morpion_game/css/bootstrap.min.css',
'/Morpion_game/js/jquery.min.js',
];
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});