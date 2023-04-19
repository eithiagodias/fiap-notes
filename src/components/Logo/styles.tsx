import styled, { keyframes } from "styled-components";

export const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-2);

    span {
      font-size: var(--fontSizes-4xl);
      color: rgb(130, 87, 230);
    }

    p {
      font-size: var(--fontSizes-lg);
      color: var(--colors-white);
    }
`;
