const express = require('express');
const router = express.Router();

const services = require('../services/peshoFeedbackService');

router.get('/', async (req, res) => {
    const peshoFeedbacks = await services.getAllPeshoFeedback();
    
    res.json(peshoFeedbacks);
});

router.post('/', async (req, res) => {
    await services.createPeshoFeedback({...req.body});

    res.json({ ok: true });
});

module.exports = router;