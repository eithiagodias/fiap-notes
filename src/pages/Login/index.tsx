import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import FormLogin, { FormValueState } from "./FormLogin";
import { Container, Wrapper } from "./styles";
import Logo from "../../components/Logo";

function Login() {
  const { handleLogin, authenticated } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/home");
  }, [authenticated]);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <FormLogin handleSubmit={handleLogin} />
      </Wrapper>
    </Container>
  );
}

export default Login;
