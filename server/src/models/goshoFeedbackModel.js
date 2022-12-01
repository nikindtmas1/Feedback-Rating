const mongoose = require('mongoose');

const goshoSchema = new mongoose.Schema({
    text: {
        type: String
    },
    rating: {
        type: Number
    },
});

module.exports = mongoose.model('GoshoFeedback', goshoSchema);