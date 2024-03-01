import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomdPage/Homepage";
import LoginPage from "./pages/authentication/LoginPage";
import SignupPage from "./pages/authentication/SignupPage";

import "./App.css";
import ContactPage from "./pages/Contact/contact";
import CreditPlansPage from "./pages/CreditPlans/CreditPlansPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/plans" element={<CreditPlansPage />} />
    </Routes>
  );
}

export default App;
