const express = require('express');
const router = express.Router();

const services = require('../services/therSevenService');

router.get('/', async (req, res) => {
    const respons = await services.getAllTherSevenFeedback();
    res.json(respons);
});