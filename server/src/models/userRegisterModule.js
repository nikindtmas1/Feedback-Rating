const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    username: {
        type: String
    },

    password: {
        type: String
    },
});

module.exports = mongoose.model("UserReg", userRegisterSchema);