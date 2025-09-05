const express = require("express");


const app = express();            // this app variable is basically a handler function
app.get("/", (req, res)=>{
    return res.send("Hello from the Homepage");       // this handler function inside it will only work for the url given like here is home page given
})

app.get("/about", (req, res)=>{
    return res.send(`Hello ${req.query.name}`);
})

app.post("/signup", (req, res)=>{
    return res.send("Hello this is a sign up form");          // this will only run when will submit or give something to the user otherwise we are just getting from the server so it wont allow, cuz we had written app.post not app.get so it will show an error for now
})

app.listen(8000, ()=>{console.log("Server started!!")});

// Now express don't eben need this

// const myServer = http.createServer(app);      // And now we just have to write the app name inside this instead of writing all the code and taking help of different modules

// myServer.listen(8000, ()=>{console.log("Server started!!")});


// Express.js helps us in writing this large piece of handler code
// Express is built on top of node.js to help server in http request and api handling etc.
// Just like react.js is for javascript same as express.js is for node.js
// Express is just a framework and internally https server is going on, express just helps to make code easier
