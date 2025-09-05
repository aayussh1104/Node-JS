const express = require("express");
const {handleGetAllUsers, getUserById, createUser, editUser, deleteUser} = require("../controllers/user");

const router = express.Router();



// Routes :- GET, POST, DELETE etc

// router.get("/users", async(req, res)=>{
//     const allDBusers = await User.find({});

//     const html = `
//     <ul>
//         ${allDBusers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })

// REST APIs
router.get("/", handleGetAllUsers);

router.get("/:id", getUserById);     // this :id is a feature in express and this means id can be anything, it is an variable 

router.post("/", createUser);

router.patch("/:id", editUser)

router.delete("/:id", deleteUser)


module.exports = router;