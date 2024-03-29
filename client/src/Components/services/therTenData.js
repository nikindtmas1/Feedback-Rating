import * as service from '../services/feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;


export async function getAll() {
    const therTenFeedbacks = await service.get(host + '/thertenfeedbacks');
    const result = Object.values(therTenFeedbacks);
    return result;
};

export async function createTherTenFeedback(data) {
   return await service.post(host + '/thertenfeedbacks', data);
};

export async function editTherTenFeedback(id, data) {
    return await service.put(host + `/thertenfeedbacks/${id}`, data);
};

export async function deleteTherTenFeedback(id) {
    return await service.del(host + `/thertenfeedbacks/${id}`);
};