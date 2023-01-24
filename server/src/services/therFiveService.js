const TherFiveFeedback = require('../models/therFiveModel');

const getAllTherFiveFeedbacks = () => TherFiveFeedback.find();
const createTherFiveFeedback = (data) => TherFiveFeedback.create(data);
const deleteTherFiveFeedback = (id) => TherFiveFeedback.findByIdAndRemove(id);

module.exports = {
    getAllTherFiveFeedbacks,
    createTherFiveFeedback,
    deleteTherFiveFeedback,
}