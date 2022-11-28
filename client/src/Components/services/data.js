import * as service from "./feedbackService";

const host = "http://localhost:5000";

service.settings.host = host;

export async function getAll() {
  let feedbacks = await service.get(host + "/feedbacks");
  let result = Object.values(feedbacks);

  return result;
}
