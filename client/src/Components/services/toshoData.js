import * as service from './feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;

export async function getAll() {
    let toshoFeedbacks = await service.get(host + '/toshofeedbacks');
    let result = Object.values(toshoFeedbacks);

    return result;
};

export async function createToshoFeedback(data) {
   return await service.post(host + '/toshofeedbacks', data);
};

export async function editToshoFeedback(id, data) {
    const respons = await service.put(host + `/toshofeedbacks/${id}`, data);
    return respons;
}

export async function deleteToshoFeedback(id) {
    return await service.del(host + `/toshofeedbacks/${id}`);
};