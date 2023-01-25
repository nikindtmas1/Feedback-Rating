const express = require('express');
const router = express.Router();

const service = require('../services/employeeService');

router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees();
    res.json(employees);
});

module.exports = router;