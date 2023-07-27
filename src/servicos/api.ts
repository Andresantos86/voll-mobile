import axios from "axios";

// corrigir
const api = axios.create({
  baseURL: "http://192.168.0.110:8080",
});

export default api;
