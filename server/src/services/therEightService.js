const TherEightFeedback = require('../models/therEightModel');

const getAllTherEightFeedbacks = () => TherEightFeedback.find();
const createTherEightFeedback = (data) => TherEightFeedback.create(data);
const updateTherEightFeedback = (id, data) => TherEightFeedback.findByIdAndUpdate(id, data);

module.exports = {
    getAllTherEightFeedbacks,
    createTherEightFeedback,
    updateTherEightFeedback,
};