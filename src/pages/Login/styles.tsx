import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  flex: 1;
  background: var(--colors-grey-900);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  background: var(--colors-grey-800);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--space-4);
  border-radius: var(--radii-sm);
  width: 50%;

  form {
    width: 100%;

    p{
      text-align: center;
      margin-top: var(--space-1);
      color:  var(--colors-id-mid);
      font-size: var(--fontSizes-sm);
  
      :hover {
        color: var(--colors-id-light);
      }
    }
  }

  .logo {
    span {
      font-size: var(--fontSizes-8xl);
    }
    p {
      font-size: var(--fontSizes-4xl);
    }
  }

  @media (max-width: 425px){
    width: 90%;
  }
`;
