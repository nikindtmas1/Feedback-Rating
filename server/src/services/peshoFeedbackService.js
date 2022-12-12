const PeshoFeedback = require('../models/peshoFeedbackModel');

const getAllPeshoFeedback = () => PeshoFeedback.find();

module.exports = {
    getAllPeshoFeedback,
};