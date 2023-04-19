import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { CardNoteContainer } from "./styles";

interface NoteProps {
  note: Note;
  handleDelete: (id: number) => void;
  handleDoubleClick: () => void
}

function CardNote({ note, handleDelete, handleDoubleClick }: NoteProps) {
  return (
    <CardNoteContainer onDoubleClick={handleDoubleClick} className="card-note">
      <div className="content">
        <p>{formatDate(new Date(note?.date))}</p>
        <p>{note.text}</p>
      </div>
      <span className="material-icons" id="delete" onClick={() => handleDelete(note.id)}>
        {" "}
        close{" "}
      </span>

      <div className="footer">
        {note.urgent && (
          <span className="material-icons" id="priority">
            priority_high
          </span>
        )}

      </div>
    </CardNoteContainer>
  );
}

export default CardNote;
