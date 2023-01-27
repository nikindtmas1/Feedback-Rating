import * as services from './feedbackService';

const host = 'http://localhost:5000';

services.settings.host = host;

export async function getAll() {
 const employees = await services.get(host + '/employees');
 const result = Object.values(employees);
 return result; 
};

export async function createEmplyees(data) {
    return await services.post(host + `/employees`, data);
   
};

export async function editEmployee(id, data) {
    return await services.put(host + `/employees/${id}`, data);
};