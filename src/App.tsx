import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomdPage/Homepage";
import LoginPage from "./pages/authentication/LoginPage";
import SignupPage from "./pages/authentication/SignupPage";

import "./App.css";
import ContactPage from "./pages/Contact/contact";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;
