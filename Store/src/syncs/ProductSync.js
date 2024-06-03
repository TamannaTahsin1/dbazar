import requests from "./httpSync";

const ProductServices = {
  getShowingProducts: async () => {
    return requests.get("/products/show");
  },
  getAllProducts: async ({
    price = "",
    category = "",
    query = "",
    discount = "",
    popular = "",
  }) => {
    return requests
      .get(
        `/products/search?price=${price}&category=${category}&query=${query}&discount=${discount}&popular=${popular}`,
      )
      .catch((err) => console.log(err));
  },
  getDiscountedProducts: async () => {
    return requests.get("/products/discount");
  },

  getProductBySlug: async (slug) => {
    return requests.get(`/products/product/${slug}`);
  },
  getProductById: async (id) => {
    return requests.get(`/products/productID/${id}`);
  },
};

export default ProductServices;
