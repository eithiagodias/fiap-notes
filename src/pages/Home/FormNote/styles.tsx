import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  textarea {
    background-color: var(--colors-id-mid);
    height: 100%;
    resize: unset;
  }

`;
