import { useCallback, useContext, useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote, { FormValueState } from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";
import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { FormikHelpers } from "formik";
import SearchInput from "../../components/SearchInput";
import Navbar from "../../components/NavBar";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Classification from "../../components/Classification";
import { filterNotes } from "../../utils/filterNotes";

function Home() {

  const { authenticated } = useContext(Context);
  const [notes, setNotes] = useState<Note[]>([] as Note[]);
  const [searchText, setSearchText] = useState('');
  const [classification, setClassification] = useState('');

  const [noteEdit, setNoteEdit] = useState<Note>()
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await NotesService.getNotes();

      setNotes(response.data);
      setLoading(false);
    })();
  }, []);

  const createOrUpdateNote = useCallback(
    (values: FormValueState, actions: FormikHelpers<FormValueState>) => {
      (async () => {
        if (noteEdit?.id) {
          const response = await NotesService.updateNote(values, noteEdit.id);
          if (response.status === 200) {
            setNotes((prevState: Note[]) => {
              const index = prevState.findIndex((n) => n.id === noteEdit.id)
              if (index !== -1) prevState[index] = { ...prevState[index], ...values }
              return prevState
            });
          }

        } else {
          const response = await NotesService.postNotes(values);
          setNotes((prevState) => [...prevState, response.data]);
        }

        actions.setSubmitting(false)
        setShowModal(false)
        setNoteEdit(undefined)
      })();
    },
    [notes, noteEdit]
  );

  const deleteNote = useCallback((id: number) => {
    (async () => {
      await NotesService.deleteNote({ id });
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
    })();
  }, []);


  const handleDoubleClick = useCallback((note: Note) => {
    setNoteEdit(note)
    setShowModal(true)
  }, []);

  const filteredNotes = filterNotes({
    notes,
    searchText,
    classification
  })

  useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  return (
    <>
      {loading && <Loading />}
      {showModal && (
        <Modal
          title={`${noteEdit?.id ? 'Editar Nota' : 'Nova nota'}`}
          handleClose={() => {
            setShowModal(false)
            setNoteEdit(undefined)
          }}
        >
          <FormNote handleSubmit={createOrUpdateNote} noteEdit={noteEdit} />
        </Modal>
      )}

      <Navbar />
      <SearchInput handleOnChange={(e) => setSearchText(e.target.value)} />
      <Classification
        handleOnClick={(e) => setClassification(`${e}`)}
        defaultClassification={classification}
        items={[
          { name: "urgent", label: "Prioridade" },
          { name: "date>", label: "Data (maior)" },
          { name: "date<", label: "Data (menor)" },
          { name: "ASC", label: "Asc (a-z)" },
          { name: "DESC", label: "Desc (z-a)" },
        ]}
      />
      <Container>
        {filteredNotes.map((note) => (
          <CardNote
            key={note.id}
            handleDelete={deleteNote}
            note={note}
            handleDoubleClick={() => handleDoubleClick(note)}
          />
        ))}
        <FabButton positionX="right" positionY="bottom" handleClick={() => setShowModal(true)}>
          +
        </FabButton>
      </Container>
    </>
  );
}

export default Home;
