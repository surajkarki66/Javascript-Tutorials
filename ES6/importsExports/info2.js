// In js if we define a 
var sayHello = function() {

}

//window.sayHello();

// This function is added in global scope
//when we define this function in another file that new definition is going to overwrite previous definition

// Thats where modules comes in
// Every  file in node application is considered as module

console.log(module);

const logger = require('./logger');

console.log(logger);

//logger.log('Message');

//logger("Hello");
