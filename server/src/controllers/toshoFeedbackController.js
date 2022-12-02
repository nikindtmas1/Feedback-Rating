const express = require('express');
const roter = express.Router();

const services = require('../services/toshoFeedbackService');
const router = require('./goshoFeedbackController');

router.get('/', async (req, res) => {
    const toshoFeedbacks = await services.getAllToshoFeedback();

    res.json(toshoFeedbacks);
});

module.exports = router;