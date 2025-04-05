import UserService from "@/components/Services/user_service.js";
import { makeAutoObservable } from "mobx";

export default class UserStore {
  isAuth = false;

  async Login(login, password) {
    UserService.login(login, password)
      .then((res) => {
        this.isAuth = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  constructor() {
    makeAutoObservable(this);
  }
}
