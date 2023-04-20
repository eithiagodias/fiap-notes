import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import FormRegister from "./FormRegister";
import Logo from "../../components/Logo";

import { Container, Wrapper } from "./styles";

function Register() {
  const { handleRegister, authenticated } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/home");
  }, [authenticated])

  return (
    <Container>
      <Wrapper>
        <Logo />
        <FormRegister handleSubmit={handleRegister} />
      </Wrapper>
    </Container>
  );
}

export default Register;
