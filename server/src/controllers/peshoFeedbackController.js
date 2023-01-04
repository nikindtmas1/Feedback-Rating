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

router.put('/:id', async (req, res) => {
    await services.updatePeshoFeedback(req.params.id, req.body);
    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await services.deletePeshoFeedback(req.params.id);

    res.json({ ok: true });
});

module.exports = router;