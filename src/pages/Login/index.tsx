import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../Context/AuthContext";
import Logo from "../../components/Logo";
import FormLogin from "./FormLogin";

import { Container, Wrapper } from "./styles";

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
