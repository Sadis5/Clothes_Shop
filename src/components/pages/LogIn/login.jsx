import { Button } from "@/components/UI/button.jsx";
import "./login.css";
import UserService from "@/components/Services/user_service.js";
import LogIn from "@/components/Store/userStore.js";
import UserStore from "@/components/Store/userStore.js";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/main.jsx";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
function Login() {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const { user_store } = useContext(Context);
  function sendData() {
    console.log("Отправка данных", data);

    user_store.Login(data.login, data.password);
  }

  const nav = useNavigate();

  useEffect(() => {
    if (user_store.isAuth) {
      nav("/");
    }
  }, [user_store.isAuth]);

  return (
    <main>
      <div className="login-container">
        <h1 className="title">Вход</h1>
        <p className="subtitle">Введите свои данные</p>
        <input
          onInput={(event) => {
            setData({ password: data.password, login: event.target.value });
          }}
          className="input"
          type="email"
          placeholder="e-mail"
        />
        <input
          onInput={(event) => {
            setData({ ...data, password: event.target.value });
          }}
          className="input"
          type="password"
          placeholder="Пароль"
        />
        <Button func={sendData}>Войти</Button>
      </div>
    </main>
  );
}
export default observer(Login);
