import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../services/auth/auth-service";
import { AuthPayload } from "../../services/auth/types";

interface ErrorResponse extends AxiosError {
  response: AxiosResponse<{ erro: string }>;
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(payload: AuthPayload) {
    debugger;
    try {
      setLoading(true);

      const response = await AuthService.register(payload);
      const token = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        alert("Usuário não cadastrado!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as ErrorResponse;
        alert(err.response?.data.erro);
      } else {
        alert("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(payload: AuthPayload) {
    debugger;
    try {
      setLoading(true);

      const response = await AuthService.register(payload);
      const token = response.data;

      localStorage.setItem("token", token);
      setAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as ErrorResponse;
        alert(err.response?.data);
      } else {
        alert("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
  }

  return { authenticated, loading, handleLogin, handleLogout, handleRegister };
}
