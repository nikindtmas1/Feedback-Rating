const TherSevenFeedback = require('../models/therSevenModel');

const getAllTherSevenFeedback = () => TherSevenFeedback.find();
const createTherSevenFeedback = (data) => TherSevenFeedback.create(data);

module.exports = {
    getAllTherSevenFeedback,
    createTherSevenFeedback,
}