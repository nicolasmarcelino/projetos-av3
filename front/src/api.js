import axios from "axios";

const api = axios.create({
  baseURL: "https://projetos-av3-api.onrender.com",
  timeout: 70000
});

export default api;