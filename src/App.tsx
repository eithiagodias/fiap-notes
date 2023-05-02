import { AuthProvider } from "./Context/AuthContext";
import { NoteProvider } from "./Context/NotesContext";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <NoteProvider>
          <AppRoutes />
        </NoteProvider>
      </AuthProvider>
    </>
  );
}

export default App;
