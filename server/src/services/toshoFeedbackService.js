const ToshoFeedback = require('../models/toshoFeedbackModel');

const getAllToshoFeedback = () => ToshoFeedback.find();

module.exports = {
    getAllToshoFeedback,
}