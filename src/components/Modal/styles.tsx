import styled, { keyframes } from "styled-components";
import CardNote from "../CardNote";
import { CardNoteContainer } from "../CardNote/styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  overflow: hidden;
  background-color: #0009;
  animation: ${fadeIn} .2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(CardNoteContainer)`
  width: 250px;
  height: 320px;
  clip-path: unset;

  :after {
    display: none;
  }

  :hover {
    transform: none;
  }

  header {
    margin-bottom: var(--space-2);
    font-size: var(--fontSizes-2xl);
    color: var(--colors-text-title);
  }

  @media (max-width: 425px){
    margin: 0 !important;
  }
`;
