import axios from "axios";

const $api = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:3001",
});

export { $api };
