import axios from "axios";

const api = axios.create({
  baseURL: "https://stadiumsense-ai.onrender.com/api/v1",
});

export default api;