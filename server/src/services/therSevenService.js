const TherSevenFeedback = require('../models/therSevenModel');

const getAllTherSevenFeedback = () => TherSevenFeedback.find();

module.exports = {
    getAllTherSevenFeedback,
}