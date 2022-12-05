const GoshoFeedback = require('../models/goshoFeedbackModel');

const getAllGoshoFeedback = () => GoshoFeedback.find();
const createGoshoFeedback = (data) => GoshoFeedback.create(data);

module.exports = {
    getAllGoshoFeedback,
    createGoshoFeedback,
    
    
}