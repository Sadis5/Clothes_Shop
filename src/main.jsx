import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./components/Store/Store";
import UserStore from "@/components/Store/userStore.js";

const store = new Store();
const user_store = new UserStore();

export const Context = createContext({ store, user_store });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ store, user_store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
