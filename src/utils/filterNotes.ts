import { Note } from "../services/notes/types";

interface FilterNotesParams {
    notes: Note[]
    searchText: string
    classification: string
}
export const filterNotes = ({
    notes,
    searchText,
    classification
}:FilterNotesParams) => {
    return notes
    .filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a: any, b: any) => {
      const aContent = a[classification || ''];
      const bContent = b[classification || '']
      const typeA = typeof aContent;
      if(typeA == 'boolean') {
        return  bContent - aContent
      }

      if(classification.includes('date')) {
        const bDate: any = new Date(b.date)
        const aDate: any = new Date(a.date)
        return classification == 'date>' ?  bDate - aDate : aDate - bDate;
      }

      if(classification == 'ASC') {
        return  a.text.localeCompare(b.text);
      }

      if(classification == 'DESC') {
        return  b.text.localeCompare(a.text);
      }

      return a - b;
    });
}