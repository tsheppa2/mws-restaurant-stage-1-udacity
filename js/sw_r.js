if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .catch(function (err) {
            console.error(err);
        });
}
console.log('Service Worker:Registered');