const express = require('express');
const router = express.Router();

const services = require('../services/therEightService');

router.get('/', async (req, res) => {
   const response = await services.getAllTherEightFeedbacks();
   res.json(response);
});

router.post('/', async (req, res) => {
    await services.createTherEightFeedback({...req.body});
    res.json({ ok: true });
});