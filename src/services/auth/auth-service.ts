import { apiAuth } from "../apiAuth";
import { AuthPayload } from "./types";

export const AuthService = {
  register: (authPayload: AuthPayload) =>
    apiAuth.post("/login", null, {
      headers: {
        accept: "*/*",
        login: authPayload.username,
        passw: authPayload.password,
      },
    }),
  login: (authPayload: AuthPayload) =>
    apiAuth.get("/login", {
      headers: {
        accept: "*/*",
        login: authPayload.username,
        passw: authPayload.password,
      },
    }),
};
