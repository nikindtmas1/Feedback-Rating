import * as services from './feedbackService';

const host = 'http://localhost:5000';

services.settings.host = host;

export async function getAll() {
    const therSix = await services.get(host + '/thersixfeedbacks');
    const result = Object.values(therSix);
    return result;
};

export async function createTherSixFeedback(data) {
 return await services.post(host + '/thersixfeedbacks', data);  
};

export async function editTherSixFeedback(id, data) {
    return await services.put(host + `/thersixfeedbacks/${id}`, data);
};

export async function deleteTherSixFeedback(id) {
    return await services.del(host + `/thersixfeedbacks/${id}`);
};