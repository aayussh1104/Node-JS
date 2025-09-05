const fs = require('fs');


// WRITE FILE
// This is synchronous way
fs.writeFileSync("./test.txt", "Hey there, I am the new file");

//This is asynchronous way
// fs.writeFile("./test.txt", "Hey there, I am the new file Async", (err) => {});      // the only difference between sync and async is that that async comes with a call back functions for an error

// const result = fs.readFileSync("./contact.txt", "utf-8");    // utf-8 is an encoding status
// console.log(result);




// READ FILE
// fs.readFileSync gives you result in a variable and you can directly print it where as fs.readFile is an async version of that and it comes with a callback function and result in it and it gives the result from the file like this
fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error occured", err);
    }
    else{
        console.log(result);
    }
});




// APPEND FILE
fs.appendFileSync("./test.txt" , `\nAayush daddy`);


// COPY FILE
fs.cpSync("./test.txt" , "./copy.txt");


// UNLINK FILE
fs.unlinkSync("./copy.txt");


// STATS OF THE FILE
console.log(fs.statSync("./test.txt"));


// CREATING A NEW DIRECTORY
fs.mkdirSync("my-docs/a/b" , {recursive : true});