import * as service from '../services/feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;


export async function getAll() {
    const therTenFeedbacks = await service.get(host + '/thertenfeedbacks');
    const result = Object.values(therTenFeedbacks);
    return result;
};