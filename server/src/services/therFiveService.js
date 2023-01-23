const TherFiveFeedback = require('../models/therFiveModel');

const getAllTherFiveFeedbacks = () => TherFiveFeedback.find();
const createTherFiveFeedback = (data) => TherFiveFeedback.create(data);

module.exports = {
    getAllTherFiveFeedbacks,
    createTherFiveFeedback,
}