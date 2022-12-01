const express = require('express');
const router = express.Router();

const services = require('../services/goshoFeedbackService');

router.get('/', async (req, res) => {
    const goshoFeedbacks = await services.getAllGoshoFeedback();

    res.json(goshoFeedbacks);
});


module.exports = router;