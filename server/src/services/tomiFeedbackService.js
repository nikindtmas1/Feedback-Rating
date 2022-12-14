const TomiFeedback = require('../models/tomiFeedbackModel');

const getAllTomiFeedback = () => TomiFeedback.find();
const createTomiFeedback = (data) => TomiFeedback.create(data);
const deleteTomiFeedback = (id) => TomiFeedback.findByIdAndRemove(id);

module.exports = {
    getAllTomiFeedback,
    createTomiFeedback,
    deleteTomiFeedback,
};