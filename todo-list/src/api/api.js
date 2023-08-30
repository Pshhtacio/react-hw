import axios from "axios";

const api = axios.create({
  baseURL: "https://64ee4b4a1f87218271427bf8.mockapi.io/api/v1",
});

export default api;
