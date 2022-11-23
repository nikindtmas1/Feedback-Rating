const express = require('express');
const router = express.Router();

const feedbackService = require('../services/feedbackService');

router.get('/', async (req, res) => {
    let feedbacks = await feedbackService.getAllFeedback();

    res.json(feedbacks);
});

module.exports = router;