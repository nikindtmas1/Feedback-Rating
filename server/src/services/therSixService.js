const TherSixFeedback = require('../models/therSixModel');

const getAllTherSixFeedback = () => TherSixFeedback.find();
const createTherSixFeedback = (data) => TherSixFeedback.create(data);



module.exports = {
    getAllTherSixFeedback,
    createTherSixFeedback,
};