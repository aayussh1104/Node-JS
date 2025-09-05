const fs = require("fs");


// Sync => This is a blocking request
fs.writeFileSync("./test.txt", "Hello world");


// Async => This is not a blocking request
fs.writeFile("./test.txt", "Hello world Async", (err)=>{});


// Blocking Task
console.log("1");
const result = fs.readFileSync("contact.txt", "utf-8");
console.log(result);

console.log("2");


// Converting this into non-blocking

console.log("1");
const result2 = fs.readFile("contact.txt", "utf-8", (err, result2)=>{
    console.log(result2);
});

console.log("2");



// If you will see in blocking code the 2 does not print until the file reads it content where as in non-blocking request the 1 and 2 get printed first and then file is read.

//  Non-blocking operations gives us results asynchronously where as blocking operations gives us results synchronously


// In blocking operations case we have thread pool which take the task and assign it to a worker
// by default the size of thread pool is 4 but we can increase it and it depends upon machine to machine or by increasing the CPU's


const os = require("os");     // This is the module which tells everything about operating systems
console.log(os.cpus().length);    // my cpus length is 12, so i can increase my maximum thread size to 12 