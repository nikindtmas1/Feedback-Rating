const express = require('express');
const router = express.Router();

const therNineService = require('../services/therNineService');

router.get('/', async (req, res) => {
    const response = await therNineService.getAllTherNienFeedbacks();
    res.json(response);
});