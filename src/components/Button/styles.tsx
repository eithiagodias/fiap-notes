import styled from "styled-components";


export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: var(--space-12);
  padding: 0 var(--space-8);
  background-color: var(---backgroundColor);
  color: var(---color);
  border: 1px solid transparent;
  border-radius: var(--radii-sm);
  font-family: var(--fonts-default);
  font-size: var(--fontSizes-sm);
  font-weight: var(--fontWeights-bold);
  cursor: pointer;
  transition: background 0.2s ease 0s, box-shadow 0.2s ease 0s;
  background-color: var(--colors-id-mid);
  color: var(--colors-white);

  :hover {
    background-color: var(--colors-id-light);
  }

  .primary {
    background-color: var(--colors-id-mid);
    color: var(--colors-white);

    :hover {
      background-color: var(--colors-id-light);
    }
    
  }

  .primary {
    background-color: var(--colors-id-mid);
    color: var(--colors-white);

    :hover {
      background-color: var(--colors-id-light);
    }
    
  }
`;
