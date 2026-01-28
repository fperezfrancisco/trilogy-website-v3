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
import EliteMentorshipPage from "./pages/programs/EliteMentorshipPage";
import MentorshipApplicationForm from "./pages/programs/MentorshipApplicationForm";
import ElitePodsPage from "./pages/programs/ElitePodsPage";
import OpenGroupsPage from "./pages/programs/OpenGroupsPage";
import GetHelpPage from "./pages/GetHelpPage";

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
        <Route path="/elitementorship" element={<EliteMentorshipPage />} />
        <Route
          path="/eliteapplication"
          element={<MentorshipApplicationForm />}
        />
        <Route path="/elitepods" element={<ElitePodsPage />} />
        <Route path="/opengroups" element={<OpenGroupsPage />} />
        <Route path="/gethelp" element={<GetHelpPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
