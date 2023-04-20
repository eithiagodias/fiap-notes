import { Link } from "react-router-dom";

import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

import Button from "../../../components/Button";
import { Form } from "./styles";

export interface FormValueState {
  username: string;
  password: string;
}

interface FormLoginProps {
  handleSubmit: (payload: FormValueState) => void;
}

function FormLogin({ handleSubmit }: FormLoginProps) {
  const initialValues: FormValueState = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(5, "Deve ter pelo menos 5 caracteres")
          .required("Campo obrigatório"),
        password: Yup.string()
          .required("Campo obrigatório")
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="username" autoFocus placeholder="Insira seu usuário" type='text' />
        <ErrorMessage component="span" className="error" name="username" />
        <Field type="password" name="password" placeholder="Insira sua senha" />
        <ErrorMessage component="span" className="error" name="password" />
        <Button>Entrar</Button>
        <p>Não possui conta? <Link to="/register">Registar</Link></p>
      </Form>
    </Formik>
  );
}

export default FormLogin;
