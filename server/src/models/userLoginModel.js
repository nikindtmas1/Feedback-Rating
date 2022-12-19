const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String
    },
    password: {
        type: String
    },
});

userSchema.static('findByUsername', function (username) {
   return this.findOne({username});
});

module.exports = mongoose.model("User", userSchema);