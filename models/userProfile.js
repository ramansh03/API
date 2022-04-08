const mongoose = require("mongoose")
const validator = require("validator");

const userProfileSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        validate(val) {
            if (validator.isEmpty(val)) {
                throw new Error("Name should not be empty")
            }
        }
    },
    Age: {
        type: Number,
        required: true,
        validate(val) {
            if (val < 18) {
                throw new Error("Age should be greater than 18");
            }
        }

    },
    Email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Invalid Mail")
            }
        }
    },
    Gender: {
        type: String,
        required: true,
    }
    ,
    MobileNumber: {
        type: Number,
        required: true,
        unique: true,
        min: 10,

    }
    ,
    Birthday: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isDate(val,
                {
                    format: "DD-MM-YYYY",
                    strictMode: true,
                    delimiters: ['-', '-']
                }
            )) {
                throw new Error("Invalid Date Format Please write date in this format DD-MM-YYYY")
            }
        }
    },

    State: {
        type: String,
        required: true,

    },
    Country: {
        type: String,
        required: true,
    },

    Address1: {
        type: String,
        required: true
    },
    Address2: {
        type: String,
        required: true
    }
})

const Data = new mongoose.model("userprofiledata", userProfileSchema)
module.exports = Data