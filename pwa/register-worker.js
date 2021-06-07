/**
 * Register the service worker
 */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	// .register('../sw.js') // load from pwa
	.register('sw.js')
		.then(function () { console.log('Service Worker Registered'); });
}
