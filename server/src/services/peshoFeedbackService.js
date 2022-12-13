const PeshoFeedback = require('../models/peshoFeedbackModel');

const getAllPeshoFeedback = () => PeshoFeedback.find();
const createPeshoFeedback = (data) => PeshoFeedback.create(data);

module.exports = {
    getAllPeshoFeedback,
    createPeshoFeedback,
};