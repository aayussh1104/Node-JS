function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

// module.exports = add(5,2);   // just like we export files in js and react, in node.js we use this to export our file

// if we want to return multiple functions from a file we can use javascript object and will do this like i did below

module.exports = {
    addFn : add,
    subFn : sub
}

// WE CAN USE module.exports ONLY ONE TIME BECAUSE IT WILL OVERRIDE THE VALUES BUT YOU CAN USE exports.(function) ANY TIME YOU WANT


// WE CAN USE A DIRECT METHOD OR WE CAN CALL IT ARROW FUNCTION METHOD TOO

// exports.divide = (a,b)=> a+b;

// exports.multiply = (a,b)=> a*b;

// module.exports = {
//     divideFn : divide,
//     multiplyFn : multiply
// }