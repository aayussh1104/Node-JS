const mongoose = require("mongoose");

// FIRST = We create a Schema
// SECOND = We create a model using that Schema
// THIRD = We do CRUD operations using that model

// Schema for mongoDB

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        jobTitle: {
            type: String
        },
        gender: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('user', userSchema);

module.exports = User;