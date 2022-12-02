import * as service from './feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;

export async function getAll() {
    let toshoFeedbacks = service.get(host + '/toshofeedbacks');
    let result = Object.values(toshoFeedbacks);

    return result;
}