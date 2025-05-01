import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrainingPage from "./pages/TrainingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollToTop from "./components/ScrollToTop";
import WinterPage from "./pages/WinterPage";
import ProdigyPage from "./pages/ProdigyPage";
import SkillDevelopmentPage from "./pages/SkillDevelopmentPage";
import PreseasonPage from "./pages/PreseasonPage";

function App() {
  return (
    <BrowserRouter basename="">
      <ScrollToTop />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/winter" exact element={<SkillDevelopmentPage />} />
        <Route path="/prodigy" exact element={<ProdigyPage />} />
        <Route path="/skilldevelopment" element={<SkillDevelopmentPage />} />
        <Route path="/preseason" element={<PreseasonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
