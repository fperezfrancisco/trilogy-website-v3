import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrainingPage from "./pages/TrainingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollToTop from "./components/ScrollToTop";
import AuthenticationIndex from "./pages/AuthenticationIndex";
import { useEffect, useState } from "react";
import { GlobalContext } from "./context/context";
import UserDashboard from "./pages/UserDashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/init";

function App() {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user);
        setLoggedIn(true);
        // ...
      }
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      <BrowserRouter basename="">
        <ScrollToTop />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/userAuth" element={<AuthenticationIndex />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
