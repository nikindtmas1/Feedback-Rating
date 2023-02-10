const TherNineFeedback = require('../models/therNineModel');

const getAllTherNienFeedbacks = () => TherNineFeedback.find();
const createTherNineFeedback = (data) => TherNineFeedback.create(data);


module.exports = {
    getAllTherNienFeedbacks,
    createTherNineFeedback,
};