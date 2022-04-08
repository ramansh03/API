const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userProfileData")
    .then(() => {
        console.log("Connection Establish")
    })
    .catch((err) => {
        console.log("No connection")
    })