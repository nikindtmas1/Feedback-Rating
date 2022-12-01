const express = require('express');
const router = express.Router();

const services = require('../services/feedbackService');

router.get('/', async (req, res) => {
    let goshoFeedbacks = await services.getAllFeedback();

    res.json(goshoFeedbacks);
});


module.exports = router;