const express = require('express');
const router = express.Router();

const services = require('../services/tomiFeedbackService');

router.get('/', async (req, res) => {
  const tomiFeedbacks = await services.getAllTomiFeedback();

  res.json(tomiFeedbacks);
});

router.post('/', async (req, res) => {
    await services.createTomiFeedback({...req.bosy});

    res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
    await services.deleteTomiFeedback(req.params.id);

    res.json({ ok: true });
});

module.exports = router;