import axios from "axios";
import { FINANCE_API_URL } from "./env";
import { getOnSessionStorage } from "./storage";

const finance_api = axios.create({
  baseURL: FINANCE_API_URL,
});

finance_api.interceptors.request.use((config) => {
  config.headers["Authorization"] = getOnSessionStorage("SSID");
  return config;
});

export default finance_api;
