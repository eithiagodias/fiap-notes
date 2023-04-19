import { ErrorMessage, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { Form } from "./styles";
import Button from "../../../components/Button";
import { registerValidation } from "./validations";

interface FormValueState {
  username: string;
  password: string;
}

interface FormRegisterProps {
  handleSubmit: (payload: FormValueState) => void;
}

function FormRegister({ handleSubmit }: FormRegisterProps) {
  const initialValues: FormValueState = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidation}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="username" autoFocus placeholder="Insira seu usuário" type='text' />
        <ErrorMessage
          component="span"
          className="error"
          name="username"
        />
        <Field type="password" name="password" placeholder="Insira sua senha" />
        <ErrorMessage
          component="span"
          className="error"
          name="password"
        />
        <Button handleClick={() => { }}>Salvar</Button>
        <p>Possui uma conta? <Link to="/">Voltar</Link></p>
      </Form>
    </Formik>
  );
}

export default FormRegister;
