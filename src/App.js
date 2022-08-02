import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  );
}

export default App;
