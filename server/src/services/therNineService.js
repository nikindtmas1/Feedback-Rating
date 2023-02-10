const TherNineFeedback = require('../models/therNineModel');

const getAllTherNienFeedbacks = () => TherNineFeedback.find();
const createTherNineFeedback = (data) => TherNineFeedback.create(data);
const updateTherNineFeedback = (id, data) => TherNineFeedback.findByIdAndUpdate(id, data);


module.exports = {
    getAllTherNienFeedbacks,
    createTherNineFeedback,
    updateTherNineFeedback,
};