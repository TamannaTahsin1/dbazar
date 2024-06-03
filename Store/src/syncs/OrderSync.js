import requests from "./httpSync";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/order/add", body, headers);
  },

  createPaymentIntent: async (body) => {
    return requests.post("/order/create-payment-intent", body);
  },

  getOrderCustomer: async (headers) => {
    return requests.get(`/order`, headers);
  },
  getOrderById: async (id, body) => {
    return requests.get(`/order/${id}`, body);
  },
};

export default OrderServices;
