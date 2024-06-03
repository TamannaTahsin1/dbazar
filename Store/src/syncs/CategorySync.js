import requests from "./httpSync";

const CategoryServices = {
  getShowingCategory: async () => {
    return requests.get("/category/show");
  },
  getCategoryById: async (id) => {
    return requests.get(`/category/${id}`);
  },
};

export default CategoryServices;
