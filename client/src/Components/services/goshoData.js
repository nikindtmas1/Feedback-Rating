import * as service from './feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;

export async function getAll() {
    let goshoFeedbacks = await service.get(host + '/goshofeedbacks');
    let result = Object.values(goshoFeedbacks);

    return result;
}