import * as services from './feedbackService';

const host = 'http://localhost:5000';

services.settings.host = host;

export async function getAll() {
 const employees = await services.get(host + '/employees');
 const result = Object.values(employees);
 return result; 
};