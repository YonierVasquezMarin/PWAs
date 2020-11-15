//Registrar el ServiceWorker.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('ServiceWorker.js')
    .then(reg => console.log('Se ha registrado con exito.', reg))
    .catch(err => console.log('No ha registrado el sw', err));
}