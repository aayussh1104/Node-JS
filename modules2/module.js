const math = require("./math")  // just like we use import in react and javascript to import files in another file, node.js has built in require function and we use it like this

console.log(math.addFn(4, 5));
console.log(math.subFn(10, 1));

console.log(math.divideFn(10, 5));
console.log(math.multiplyFn(2, 1));