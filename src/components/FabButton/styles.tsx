import styled from "styled-components";

interface PropsFab {
  positionX: 'left' | 'right';
  positionY: 'top' | 'bottom';
}

export const FabButtonStyled = styled.button<PropsFab>`
  position: absolute;
  ${(props) => (props.positionX === "left" ? "left: var(--space-5);" : "right: var(--space-5);")}
  ${(props) => (props.positionY === "top" ? "top: var(--space-5);" : "bottom: var(--space-5);")}
  
  color: white;
  background-color: transparent;
  color: var(--colors-white);
  font-size: var(--fontSizes-2xl);
  font-weight: bold;

  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--space-10);
  border: 2px solid var(--colors-id-dark);
  background-color: var(--colors-id-mid);

  box-shadow: 2px 4px 4px #0009;
  transition: .3s;
  cursor: pointer;

  :hover {
    font-weight: normal;
    box-shadow: 2px 10px 10px #0009;
    ${(props) => (props.positionX === "left" ? "transform: scale(1.1) translateX(-5px) translateY(-5px);" : "transform: scale(1.1) translateX(5px) translateY(-5px);")}
  }
`;
