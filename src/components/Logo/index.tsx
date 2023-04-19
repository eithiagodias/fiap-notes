import { StyledLogoContainer } from "./styles";

function Logo() {
  return (
    <StyledLogoContainer className="logo">
      <span className="material-icons-outlined">
        text_snippet
      </span>
      <p>fiap notes</p>
    </StyledLogoContainer>
  );
}

export default Logo;
