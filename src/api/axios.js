import axios from "axios";

export const inctance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default inctance;
