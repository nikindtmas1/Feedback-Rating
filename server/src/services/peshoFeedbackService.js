const PeshoFeedback = require('../models/peshoFeedbackModel');

const getAllPeshoFeedback = () => PeshoFeedback.find();
const createPeshoFeedback = (data) => PeshoFeedback.create(data);
const deletePeshoFeedback = (id) => PeshoFeedback.findByIdAndRemove(id);

module.exports = {
    getAllPeshoFeedback,
    createPeshoFeedback,
    deletePeshoFeedback,
};