import { useEffect, useState } from "react";
import { Note } from "../../services/notes/types";
import { NoteFormValueState } from "../../pages/Home/FormNote";
import { jwtDecode } from "../../utils/jwtDecode";
import { recoverNotes } from "../../utils/recoverNotes";

export default function useNotes() {
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized]= useState<boolean>(false);
  const [notes, setNotes]= useState<Note[]>([]);

  useEffect(() => {
    if(!initialized) {
      setNotes(recoverNotes())
      setInitialized(true)
    }

  }, [setNotes])

  
  useEffect(() => {
    const token = jwtDecode(localStorage.getItem("token")) ;
    if(token && initialized) {
      localStorage.setItem(`@NOTES-${token.sub}`, JSON.stringify(notes))
    }
  }, [notes, initialized])


  function getNotes() {
    return notes;  
  }

  function postNotes(payload: NoteFormValueState) {
    return setNotes((oldState => {
      return [...oldState, {
        id: oldState.length + 1,
        date: new Date(),
        ...payload
      } as Note];
    }))
  }

  function updateNote(payload: NoteFormValueState, id: number) {
    setNotes((oldState => {
      const foundedIndex = oldState.findIndex((n) => n.id === id)
      if (foundedIndex !== - 1 && oldState[foundedIndex]) oldState[foundedIndex] = { ...oldState[foundedIndex], ...payload }
      return [...oldState];
    }))
  }

  function deleteNote(id: number) {
    setNotes((oldState => oldState.filter((note) => note.id !== id)))
  }


  return { notes, loading, setLoading, getNotes, postNotes, updateNote, deleteNote, setNotes};
}
