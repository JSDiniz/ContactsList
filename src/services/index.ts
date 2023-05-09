import axios from "axios";

export const Api = axios.create({
  baseURL: "https://contacts-list-api-tye2.onrender.com",
  timeout: 5000,
});
