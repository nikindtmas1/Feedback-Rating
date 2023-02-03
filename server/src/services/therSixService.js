const TherSixFeedback = require('../models/therSixModel');

const getAllTherSixFeedback = () => TherSixFeedback.find();


module.exports = {
    getAllTherSixFeedback,
};