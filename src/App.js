import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={< />} /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
