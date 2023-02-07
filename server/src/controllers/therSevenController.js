const express = require('express');
const router = express.Router();

const services = require('../services/therSevenService');

router.get('/', async (req, res) => {
    const respons = await services.getAllTherSevenFeedback();
    res.json(respons);
});

router.post('/', async (req, res) => {
    await services.createTherSevenFeedback({...req.body});
    res.json({ ok: true });
});

module.exports = router;