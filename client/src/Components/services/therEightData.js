import * as services from '../services/feedbackService';

const host = 'http://localhost:5000';

services.settings.host = host;

export async function getAll() {
    const therEightFeeds = await services.get(host + '/thereightfeedbacks');
    const respons = Object.values(therEightFeeds);
    return respons;
};

export async function createTherEightFeedback(data) {
   return await services.post(host + '/thereightfeedbacks', data);
};