import { $api } from "@components/http/http.js";

export default class ProductService {
  static async getProducts(limit, page) {
    return $api.get(`/get/products?limit=${limit}&page=${page}`);
  }

  static async getProductById(productId) {
    return $api.get(`/get/product/${productId}`);
  }
  static async filterProducts(
    size,
    category,
    tags,
    color,
    inStock,
    minprice,
    maxprice
  ) {
    return $api.get(
      `/get/products/filter?size=${size}&category=${category}&tags=${tags}&color=${color}&inStock=${inStock}&minprice=${minprice}&maxprice=${maxprice}`
    );
  }
}

// получать
// size, category, tags, color, inStock, minprice maxprice
