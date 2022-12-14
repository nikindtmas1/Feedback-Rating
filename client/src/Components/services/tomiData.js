import * as services from './feedbackService';

const host = 'http://localhost:5000';

services.settings.host = host;

export async function getAll() {
    let tomiFeedbacks = await services.get(host + '/tomifeedbacks');
    let result = Object.values(tomiFeedbacks);

    return result;
};

export async function createTomiFeedback(data) {
    return await services.post(host + '/tomifeedbacks', data);
};

export async function deleteTomiFeedback(id) {
    return await services.del(host + `/tomifeedbacks/${id}`);
};