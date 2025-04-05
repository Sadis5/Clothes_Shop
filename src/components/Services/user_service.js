import { $api } from "@components/http/http.js";

export default class UserService {
  static async login(login, password) {
    return $api.post(`/login`, { login, password });
  }
  static async getUser(id) {
    return $api.get(`/get/user/${id}`);
  }
  static async logOut() {
    return $api.post(`/logout`, {});
  }
  static async register(
    name,
    surname,
    city,
    adress,
    email,
    login,
    password,
    phone
  ) {
    return $api.post(`/registration`, {
      name,
      surname,
      city,
      adress,
      email,
      login,
      password,
      phone,
    });
  }
}

//
