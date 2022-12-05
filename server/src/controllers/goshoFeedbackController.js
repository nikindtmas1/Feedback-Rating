const express = require('express');
const router = express.Router();

const services = require('../services/goshoFeedbackService');

router.get('/', async (req, res) => {
    const goshoFeedbacks = await services.getAllGoshoFeedback();

    res.json(goshoFeedbacks);
});

router.post('/', async (req, res) => {
    await services.createGoshoFeedback({...req.body});

    res.json({ ok: true })
});

module.exports = router;