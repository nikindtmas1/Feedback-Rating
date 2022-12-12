const ToshoFeedback = require('../models/toshoFeedbackModel');

const getAllToshoFeedback = () => ToshoFeedback.find();
const createToshoFeedback = (data) => ToshoFeedback.create(data);
const deleteToshoFeedback = (id) => ToshoFeedback.findByIdAndRemove(id);

module.exports = {
    getAllToshoFeedback,
    createToshoFeedback,
    deleteToshoFeedback,
}