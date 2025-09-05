const User = require("../models/user");

async function handleGetAllUsers(req, res){
    const allDBusers = await User.find({});

    res.setHeader("X-Myname", "Aayush Daddy");    // Creating headers
    // Always add X to custom headers, it is a good practice

    console.log(req.headers);
    return res.json(allDBusers);
}

async function getUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).json({error : "User not found!!!"})    
    }
    return res.json(user);
}

async function createUser(req, res){
    // TODO: Create new users
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg : "ALL FIELDS ARE REQUIRED!!!!"});    // Sending status code with request
    }

    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        jobTitle : body.job_title,
        gender : body.gender
    })

    console.log("Result : ", result);

    return res.status(201).json({message : "Success"});
}

async function editUser(req, res){
    // TODO: Edit the user with id
    try {
        const body = req.body;

        // Find and update user
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: body },     // update only provided fields
            { new: true }       // return the updated user instead of old one
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found!!!" });
        }

        return res.json({ status: "success", user: updatedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update user!" });
    }
}

async function deleteUser(req, res){
    // TODO: Delete the users with id
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found!!!" });
        }

        return res.json({ status: "success", deletedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete user!" });
    }
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}