import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrainingPage from "./pages/TrainingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
