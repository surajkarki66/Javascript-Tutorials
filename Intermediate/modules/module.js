var state = "Hello";

var sum = function(a,b) {
  
    return a+b;

};

var sub = function(a,b) {
    return a-b;
};

var mul = function(a,b) {
    return a*b;
}

var div = function(a,b) {
    return a/b;
}


module.exports.sum = sum;  // sum function is stored inside the sum object
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.state = state;