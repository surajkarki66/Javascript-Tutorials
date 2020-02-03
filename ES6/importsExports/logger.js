var url = 'http:mylogger.io/log'

function log(message) {
    // Send an http request
    console.log(message);
}

//module.exports.log = log; // make publi for other modules
module.exports = log;