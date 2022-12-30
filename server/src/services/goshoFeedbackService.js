const GoshoFeedback = require('../models/goshoFeedbackModel');

const getAllGoshoFeedback = () => GoshoFeedback.find();
const createGoshoFeedback = (data) => GoshoFeedback.create(data);
const updateGoshoFeedback = (id, data) => GoshoFeedback.findByIdAndUpdate(id, data);
const deleteGoshoFeedback = (id) => GoshoFeedback.findByIdAndRemove(id);

module.exports = {
    getAllGoshoFeedback,
    createGoshoFeedback,
    updateGoshoFeedback,
    deleteGoshoFeedback,
    
}