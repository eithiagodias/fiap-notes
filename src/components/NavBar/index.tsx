import { useContext } from "react";
import FabButton from "../FabButton";
import Logo from "../Logo";

import { StyledNavbarContainer } from "./styles";
import { Context } from "../../Context/AuthContext";
import Button from "../Button";

function Navbar() {

  const { handleLogout } = useContext(Context);

  return (
    <StyledNavbarContainer className="navbar">
      <Logo />
      <Button handleClick={handleLogout}>
        <span className="material-icons">logout</span>
      </Button>
    </StyledNavbarContainer>
  );
}

export default Navbar;
