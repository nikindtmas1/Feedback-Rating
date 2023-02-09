const TherEightFeedback = require('../models/therEightModel');

const getAllTherEightFeedbacks = () => TherEightFeedback.find();
const createTherEightFeedback = (data) => TherEightFeedback.create(data);


module.exports = {
    getAllTherEightFeedbacks,
    createTherEightFeedback,
};