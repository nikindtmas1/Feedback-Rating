const express = require('express');
const router = express.Router();

const service = require('../services/therTenService');

router.get('/', async (req, res) => {
    const respons = await service.getAllTherTenFeedbacks();
    res.json(respons);
});

router.post('/', async (req, res) => {
    await service.createTherTenFeedback({...req.body});
    res.json({ ok: true });
});