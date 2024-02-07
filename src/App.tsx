import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomdPage/Homepage";
import LoginPage from "./pages/authentication/LoginPage";
import "./index.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default App;
