const ToshoFeedback = require('../models/toshoFeedbackModel');

const getAllToshoFeedback = () => ToshoFeedback.find();
const createToshoFeedback = (data) => ToshoFeedback.create(data);

module.exports = {
    getAllToshoFeedback,
    createToshoFeedback,

}