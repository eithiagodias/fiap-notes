import styled from "styled-components";

interface StyledClassificationItemContainerProps {
  classificated: boolean;
}


export const StyledClassificationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledClassificationItemContainer = styled.div<StyledClassificationItemContainerProps>`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  margin-left: var(--space-4); 
  background: ${(props) => (props.classificated ? "var(--colors-id-dark)" : "var(--colors-grey-900)")};;
  width: fit-content;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--space-1);

  label {
    font-size: var(--fontSizes-xs);
    cursor: pointer;
  }

  span {
    font-size: var(--fontSizes-sm);
    color: rgb(130, 87, 230);
    transform: ${(props) => (props.classificated ? "rotate(90deg)" : "none")};
    transition: .3s;
    color: var(--colors-id-light);
    cursor: pointer;
  }
`;