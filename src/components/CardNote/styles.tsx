import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(0.1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const CardNoteContainer = styled.article`
  position: relative;
  width: 200px;
  height: 140px;
  border-radius: var(--radii-sm);
  background-color: var(--colors-id-dark);
  color: var(--colors-text-title);
  padding: var(--space-4);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  clip-path: polygon(0 0, calc(100% - var(--radii-xlg)) 0, 100% var(--radii-xlg), 100% 100%, 0 100%);
  cursor: pointer;
  
  animation: ${fadeIn} ease-in .3s;

  :after {
    content: '';
    position: absolute;
    display: block;
    width: var(--radii-xlg);
    height: var(--radii-xlg);
    background-color: var(--colors-id-light);
    border-bottom-left-radius: var(--radii-sm);
    top: 0;
    right: 0;
  }

  :hover {
    transform: scale(1.1);
    transition: .3s;
    clip-path: none;

    :after {
      display: none;
    }
  }

  p:first-child {
    font-size: var(--fontSizes-xxs);
    margin-bottom: var(--space-2);
    color: var(--colors-text-base);
  }

  .material-icons {
    position: absolute;
    font-size: var(--fontSizes-2xl);
    cursor: pointer;
    transition: .3s;
  }

  #delete.material-icons  {
    top: var(--space-2);
    right: var(--space-2);
    font-size: var(--fontSizes-2xl);
  }

  #delete.material-icons:hover  {
    color: var(--colors-white);
    transform: scale(1.1);
  }

  #priority {
    position: absolute;
    bottom: var(--space-1);
    left: var(--space-1);
    width: fit-content;
  }

  @media (max-width: 425px){
    width: 100%;
    margin-bottom: var(--space-10);
  }
  
`;
