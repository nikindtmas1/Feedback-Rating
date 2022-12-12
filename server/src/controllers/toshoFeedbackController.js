const express = require('express');
const router = express.Router();

const services = require('../services/toshoFeedbackService');

router.get('/', async (req, res) => {
    const toshoFeedbacks = await services.getAllToshoFeedback();

    res.json(toshoFeedbacks);
});

router.post('/', async (req, res) => {
   await services.createToshoFeedback({...req.body});

    res.json({ok: true});
});

module.exports = router;