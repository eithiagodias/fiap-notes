import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
        transform: translateY(-50px) scale(0);
    }
`;

const spin = keyframes`
  100% {
        transform: rotate(360deg);
    }
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--colors-id-mid);
`
export const Container = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(50% - 16px);
  top: 50vh;
  border-radius: 50%;
  background-color: var(--colors-id-low);
  animation: ${slideDown} .3s;
`;

export const Spinner = styled.div`
  margin: 10px 0px;
  width: 35px;
  height: 35px;
  border-top: 5px solid var(--colors-id-light);
  border-right: 5px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  padding: 10px;
`;

