import axios from "axios";

export const Api = axios.create({
  baseURL: "https://contacts-list-1fhx.onrender.com",
  timeout: 5000,
});
