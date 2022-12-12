const express = require('express');
const router = express.Router();
const services = require('../services/peshoFeedbackService');

router.get('/', async (req, res) => {
    const peshoFeedbacks = await services.getAllPeshoFeedback();
    
    res.json(peshoFeedbacks);
});