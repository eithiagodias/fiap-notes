import React, {
  createContext,
  PropsWithChildren,
} from "react";

import { Note } from "../services/notes/types";
import { NoteFormValueState } from "../pages/Home/FormNote";
import useNotes from "./hooks/useNotes";

interface NoteContextTypes {
  notes: Note[];
  loading: boolean;
  getNotes: () => Note[],
  postNotes: (payload: NoteFormValueState) => void,
  updateNote: (payload: NoteFormValueState, id: number) => void,
  deleteNote: (id: number) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<NoteContextTypes>({} as NoteContextTypes);

function NoteProvider({ children }: PropsWithChildren) {
  const { notes, loading, getNotes, postNotes, updateNote, deleteNote, setLoading} = useNotes();

  return (
    <Context.Provider
      value={{notes,loading, setLoading, getNotes, postNotes, updateNote, deleteNote,  }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, NoteProvider };
