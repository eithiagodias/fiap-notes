import axios from "axios";

export const apiAuth = axios.create({
  baseURL: `http://localhost:9090/api/loginValidator/`,
});
