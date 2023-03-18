import axios from "axios";
import { FINANCE_API_URL } from "./env";

const finance_api = axios.create({
  baseURL: FINANCE_API_URL,
});

export default finance_api;
