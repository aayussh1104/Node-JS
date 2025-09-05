const express = require("express");
const userRouter = require("./routes/user");
const {connectMongoDB} = require("./connection");
const {logReqRes} = require("./middlewares/middle");


const app = express();
const port = 8000;

// Connection of mongoose to your project
// mongoose
//     .connect("mongodb://127.0.0.1:27017/aayush-1")
//     .then(() => {console.log("Mongo DB connected!!")})
//     .catch((err) => {console.log("Mongo DB error!!", err)})


// Connection
connectMongoDB("mongodb://127.0.0.1:27017/aayush-1").then(()=>console.log("MonogDb connected!!"))

// Middleware => It can be created using app.use()
app.use(express.urlencoded({ extended : false }))

app.use((req, res, next) =>{
    console.log("Hello ji")
    req.myName = "Aayush";
    next();
})

app.use((req, res, next) =>{
    console.log("Hello ji kya haal", req.myName)
    next();
})

// We can create multiple middlewares in our project


// WE CAN USE THIS patch, delete , get together too -> we use this because if we have to change the name of this feature we can do it all easily
// app.
//     route("/api/users/:id")
//     .get((req, res)=>{
//         const id = Number(req.params.id);
//         const user = users.find((user)=> user.id === id);
//         return res.json(user);
//     })
//     .patch((req, res)=>{
//         return res.json({status: "pending"});
//     })
//     .delete((req, res)=>{
//         return res.json({status: "pending"});
//     })


// Routes
app.use("/api/users", userRouter);


// Middlewares
app.use(logReqRes("log.txt"));



app.listen(port, ()=>{
    console.log("Server started at Port ", port);
})
