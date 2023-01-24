import * as services from '../services/feedbackService';

const host = 'http://localhost:5000';

services.settings.host = host;

export async function getAll() {
  const therFive =  await services.get(host + '/therfivefeedbacks');
  const result = Object.values(therFive);
  return result;
};

export async function createTherFiveFeedback(data) {
   return await services.post(host + '/therfivefeedbacks', data);
};

export async function deleteTherFeveFeedback(id) {
 return await services.del(host + `/therfivefeedbacks/${id}`);
};