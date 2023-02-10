import * as services from '../services/feedbackService';

const host = 'http://localhost:5000';


services.settings.host = host;


export async function getAll() {
    const therNineFeedbacks = await services.get(host + '/therninefeedbacks');
    const result = Object.values(therNineFeedbacks);
    return result;
};

export async function createTherNineFeedback(data) {
    await services.post(host + '/therninefeedbacks', data);
};