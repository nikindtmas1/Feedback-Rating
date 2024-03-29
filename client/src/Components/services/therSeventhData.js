import * as service from '../services/feedbackService';

const host = 'http://localhost:5000';

service.settings.host = host;

export async function getAll() {
    const seventTherFeed = await service.get(host + '/therseventhfeedbacks');
    const result = Object.values(seventTherFeed);
    return result;
};


export async function createTherSevFeed(data) {
    await service.post(host + '/therseventhfeedbacks', data);
};

export async function editTherSevFeed(id, data) {
    await service.put(host + `/therseventhfeedbacks/${id}`, data);
};

export async function deleteTherSevFeed(id) {
    await service.del(host + `/therseventhfeedbacks/${id}`);
};

