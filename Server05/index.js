const http = require("http");    // module built-in in node.js
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) =>{                   // with this callback function we can handle our server that what requests are coming into the server
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} : ${req.method} ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data)=>{
        switch(myUrl.pathname){

            case '/' :
                res.end("Homepage");
            break;

            case '/about' :
                const username = myUrl.query.myname
                res.end(`Hey, ${username}`);
            break;

            case '/search' :
                const search = myUrl.query.search_query;
                res.end("So here are your results for " + search);
            break;

            case '/signup':
                if(req.method === 'GET') res.end("This is a signup form");
                else if(req.method === 'POST'){
                    //DB Query
                    res.end("Success");
                }

            default : res.end("404 not found");
        }
    })
})

// this callback function in createServer method contains two arguments one is req for request and another is res for response
// WE WILL NEED A PORT NUMBER TO RUN OUR SERVER ON

myServer.listen(8000, ()=>{console.log("Server started!!")})     // A single server will listen and run on only one port number, the other servers will work on another server
// this callback function in it is optional