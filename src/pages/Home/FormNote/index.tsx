import {
  ErrorMessage,
  Field,
  Formik,
  FormikErrors,
  FormikHelpers,
} from "formik";

import * as Yup from "yup";

import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";

import { Note } from "../../../services/notes/types";

export interface NoteFormValueState {
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  noteEdit?: Note,
  handleSubmit: (
    payload: NoteFormValueState,
    actions: FormikHelpers<NoteFormValueState>
  ) => void;
}

function FormNote({ noteEdit, handleSubmit }: FormNoteProps) {

  return (
    <Formik
      initialValues={{
        text: noteEdit?.text || "",
        urgent: noteEdit?.urgent || false,
      }}
      validationSchema={Yup.object({
        text: Yup.string()
          .min(5, "Deve ter pelo menos 5 caracteres")
          .required("Campo obrigatório"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Field
            as="textarea"
            name="text"
            autoFocus
            placeholder="Insira o texto da nota"
          />
          <span className="error"><ErrorMessage name="text" /></span>
          <Checkbox name="urgent" label="Urgente ?" checked={!!values.urgent} />
          <Button handleClick={() => { }} disabled={isSubmitting}>
            {isSubmitting ? (noteEdit?.id ? 'Atualizando...' : 'Salvando...') : (noteEdit?.id ? 'Atualizar' : 'Salvar')}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormNote;
