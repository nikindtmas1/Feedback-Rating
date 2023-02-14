const express = require('express');
const router = express.Router();

const service = require('../services/therTenService');

router.get('/', async (req, res) => {
    const respons = await service.getAllTherTenFeedbacks();
    res.json(respons);
});