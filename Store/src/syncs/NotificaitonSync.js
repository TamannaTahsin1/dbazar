import requests from "./httpSync";

const NotificationServices = {
  addNotification: async (body, headers) => {
    return requests.post("/notification/add", body, headers);
  },
};

export default NotificationServices;