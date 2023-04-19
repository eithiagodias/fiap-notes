import styled, { keyframes } from "styled-components";

export const StyledNavbarContainer = styled.header`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-5);
  height: 70px;
  position: sticky;
  top: 0px;
  box-shadow: unset;
  border-bottom: 1px solid rgb(18, 18, 20);

  button {
    height: 38px;
    width: 48px;
    padding: 0;
    margin-left: auto;
  }
`;
