import { useCallback, useContext, useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote, { NoteFormValueState } from "./FormNote";
import Modal from "../../components/Modal";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";
import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { FormikHelpers } from "formik";
import SearchInput from "../../components/SearchInput";
import Navbar from "../../components/NavBar";
import Classification from "../../components/Classification";
import { filterNotes } from "../../utils/filterNotes";
import useNotes from "../../Context/hooks/useNotes";

function Home() {
  const { notes, updateNote, postNotes, deleteNote, setLoading, loading } = useNotes()
  const { authenticated } = useContext(Context);
  const [searchText, setSearchText] = useState('');
  const [classification, setClassification] = useState('');

  const [noteEdit, setNoteEdit] = useState<Note>()
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      setTimeout(() => {setLoading(false)}, 3000)
    })();
  }, []);

  const createOrUpdateNote = useCallback(
    (values: NoteFormValueState, actions: FormikHelpers<NoteFormValueState>) => {
      (() => {
        if (noteEdit?.id) {
          updateNote(values, noteEdit.id)
        } else {
          postNotes(values)
        }

        actions.setSubmitting(false)
        setShowModal(false)
        setNoteEdit(undefined)
      })();
    },
    [notes, noteEdit]
  );

  const removeNote = useCallback((id: number) => {
    (() => {
      deleteNote(id)
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
            handleDelete={removeNote}
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
