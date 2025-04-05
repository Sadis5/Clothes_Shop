import { $api } from "@components/http/http.js";

export default class CartService {
  static async getCart(userId) {
    return $api.get(`/get/cart/${userId}`);
  }
  static async addCart(product, userId) {
    return $api.put(`/add/cart/${userId}`, product);
  }
  static async deleteCard(productId, userId) {
    return $api.delete(`/cart/delete/${userId}/${productId}`);
  }
}

// получать
// удалять, добавлять,
