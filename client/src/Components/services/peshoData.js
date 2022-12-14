import * as service from '../services/feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;

export async function getAll() {
    let peshoFeedbacks = await service.get(host + '/peshofeedbacks');
    let result = Object.values(peshoFeedbacks);

    return result;
};

export async function createPeshoFeedback(data) {
    return await service.post(host + '/peshofeedbacks', data)
};

export async function deletePeshoFeedback(id) {
    return await service.del(host + `/peshofeedbacks/${id}`)
};