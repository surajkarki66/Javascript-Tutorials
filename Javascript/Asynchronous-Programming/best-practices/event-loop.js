// L1
console.log('🥪 Synchronous 1');

// L2
// This is a macro task
setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// L3
// This is a micro task
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
console.log('🥪 Synchronous 4');

// Note: micro task are executed before starting of the next event loop
// for eg: Promise

// Note: macro task are executed after starting of the next event loop
// for eg: setTimeout(), setInterval()
