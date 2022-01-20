import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
