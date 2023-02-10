const TherNineFeedback = require('../models/therNineModel');

const getAllTherNienFeedbacks = () => TherNineFeedback.find();


module.exports = {
    getAllTherNienFeedbacks,
};