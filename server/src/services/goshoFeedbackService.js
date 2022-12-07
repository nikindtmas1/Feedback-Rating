const GoshoFeedback = require('../models/goshoFeedbackModel');

const getAllGoshoFeedback = () => GoshoFeedback.find();
const createGoshoFeedback = (data) => GoshoFeedback.create(data);
const deleteGoshoFeedback = (id) => GoshoFeedback.findByIdAndRemove(id);

module.exports = {
    getAllGoshoFeedback,
    createGoshoFeedback,
    deleteGoshoFeedback,
    
}