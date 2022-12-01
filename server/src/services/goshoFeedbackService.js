const GoshoFeedback = require('../models/goshoFeedbackModel');

const getAllGoshoFeedback = () => GoshoFeedback.find();

module.exports = {
    getAllGoshoFeedback,
    
}