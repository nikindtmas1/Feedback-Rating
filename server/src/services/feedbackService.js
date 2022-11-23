const Feedback = require('../models/feedbackModel');

const getAllFeedback = () => Feedback.find();

module.exports = {

    getAllFeedback,
    
}