const express = require('express');
const router = express.Router();

const services = require('../services/toshoFeedbackService');

router.get('/', async (req, res) => {
    const toshoFeedbacks = await services.getAllToshoFeedback();

    res.json(toshoFeedbacks);
});

module.exports = router;