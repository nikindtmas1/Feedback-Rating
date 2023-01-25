const Employee = require('../models/employeesModel');

const getAllEmployees = () => Employee.find();
const createEmployee = (data) => Employee.create(data);

module.exports = {
    getAllEmployees,
    createEmployee,
};