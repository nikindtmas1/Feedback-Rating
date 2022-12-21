import * as service from "./feedbackService";

const host = "http://localhost:5000";

service.settings.host = host;

export const login = service.login;
export const logout = service.logout;

export async function getAll() {
  let feedbacks = await service.get(host + "/feedbacks");
  let result = Object.values(feedbacks);

  return result;
};

export async function createFeedback(data) {
    return await service.post(host + '/feedbacks', data);
};

export async function deleteFeedback(id) {
  return await service.del(host + `/feedbacks/${id}`);
};

export async function editFeedback(id, data) {
  const respons = await service.put(host + `/feedbacks/${id}`, data);
  return respons;
};