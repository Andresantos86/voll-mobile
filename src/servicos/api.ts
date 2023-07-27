import axios from "axios";

// corrigir
const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default api;
