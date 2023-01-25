const Employee = require('../models/employeesModel');

const getAllEmployees = () => Employee.find();

module.exports = {
    getAllEmployees,
}