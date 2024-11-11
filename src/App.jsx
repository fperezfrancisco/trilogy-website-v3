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
import UserAccountPage from "./pages/UserAccountPage";
import UserPlayersPage from "./pages/UserPlayersPage";
import UserSessionsPage from "./pages/UserSessionsPage";
import PlayerProfilePage from "./pages/PlayerProfilePage";
import CreateNewPlayer from "./pages/CreateNewPlayer";
import PasswordRecovery from "./components/authentication/PasswordRecovery";

function App() {
  const [user, setUser] = useState({
    playersList: [],
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggingIn, setLoggingIn] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser({ user, playersList: [] });
        setLoggedIn(true);
        // ...
      }
    });
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        loading,
        setLoading,
        loggingIn,
        setLoggingIn,
      }}
    >
      <BrowserRouter basename="">
        <ScrollToTop />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/userAuth" element={<AuthenticationIndex />} />
          <Route path="/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="/userdashboard/:id" exact element={<UserDashboard />} />
          <Route
            path="/userdashboard/:id/myaccount"
            exact
            element={<UserAccountPage />}
          />
          <Route
            path="/userdashboard/:id/myplayers"
            exact
            element={<UserPlayersPage />}
          />
          <Route
            path="/userdashboard/:id/newplayer"
            exact
            element={<CreateNewPlayer />}
          />
          <Route
            path="/userdashboard/:id/mysessions"
            exact
            element={<UserSessionsPage />}
          />
          <Route
            path="/userdashboard/:id/myplayers/:playerid"
            exact
            element={<PlayerProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
