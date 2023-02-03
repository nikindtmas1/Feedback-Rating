const express = require('express');
const router = express.Router();

const services = require('../services/therSixService');

router.get('/', async (req, res) => {
   const respons = await services.getAllTherSixFeedback();

   res.json(respons);
});

module.exports = router;