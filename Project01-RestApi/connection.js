const mongoose = require("mongoose");


// Connection of mongoose to your project

async function connectMongoDB(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectMongoDB
}