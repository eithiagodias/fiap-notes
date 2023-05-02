import { Note } from "../services/notes/types";
import { jwtDecode } from "./jwtDecode";

export const recoverNotes = (): Note[] => {
    const token = jwtDecode(localStorage.getItem("token"));
    if(token) {
        const notesStr = localStorage.getItem(`@NOTES-${token.sub}`)
        const n = JSON.parse(notesStr || "[]")
        if(n.length > 0) {
            return n as Note []
        }
    }

    return []
}