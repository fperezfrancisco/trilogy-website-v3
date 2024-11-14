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
import ParentInfoPage from "./pages/ParentInfoPage";
import GlobalApi from "./firebase/GlobalApi";
import SchedulePage from "./pages/SchedulePage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

function App() {
  const [currUser, setCurrUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggingIn, setLoggingIn] = useState(true);
  const [accFinal, setAccFinal] = useState(false);
  const [parentObj, setParentObj] = useState(null);
  const [playerList, setPlayerList] = useState([]);

  const getUserParentInfo = async (user) => {
    const parentTempObj = await GlobalApi.getParentByUid(user.uid)
      .then((resp) => {
        return resp;
      })
      .catch((err) => console.log(err));
    setParentObj(parentTempObj);
  };

  const updatePlayerList = async (user) => {
    const playerListTemp = await GlobalApi.getAllPlayers(user.uid)
      .then((resp) => resp)
      .catch((err) => console.log(err));
    setPlayerList(playerListTemp);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        getUserParentInfo(user);
        updatePlayerList(user);
        setCurrUser({
          user: user,
          parentInfo: parentObj,
          playerList: playerList,
        });

        setLoggedIn(true);
        console.log(currUser);
        // ...
      }
    });
  }, []);

  useEffect(() => {
    console.log(currUser);
  }, [currUser]);

  useEffect(() => {
    console.log("Parent object has been updated");
    console.log("User Object: ", currUser);
  }, [parentObj]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GlobalContext.Provider
        value={{
          currUser,
          setCurrUser,
          parentObj,
          setParentObj,
          loggedIn,
          setLoggedIn,
          loading,
          setLoading,
          loggingIn,
          setLoggingIn,
          playerList,
          setPlayerList,
        }}
      >
        <BrowserRouter basename="">
          <ScrollToTop />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/userAuth" element={<AuthenticationIndex />} />
            <Route path="/passwordRecovery" element={<PasswordRecovery />} />
            <Route
              path="/userdashboard/:id"
              exact
              element={<UserDashboard />}
            />
            <Route path="/parentinfo" exact element={<ParentInfoPage />} />
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
    </LocalizationProvider>
  );
}

export default App;
