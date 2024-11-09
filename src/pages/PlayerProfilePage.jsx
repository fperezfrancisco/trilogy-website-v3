import React, { useContext, useState } from "react";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";
import { GlobalContext } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import { TiChevronRight } from "react-icons/ti";

function PlayerProfilePage() {
  const { user, loggedIn, setUser, setLoggedIn } = useContext(GlobalContext);
  const [userMenuOpen, setUserMenuOpen] = useState();
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const navigate = useNavigate();

  //states
  const [playerList, setPlayerList] = useState();

  const handleSignOut = () => {
    signOut(auth);
    setUser({});
    setLoggedIn(false);
    navigate("/");
  };
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] flex h-full relative ">
        {loggedIn && (
          <>
            <UserAsideBar
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
              setShowLogOutModal={setShowLogOutModal}
            />
            <div
              className={`flex flex-col w-full h-full p-4 sm:px-8 ${
                userMenuOpen
                  ? "ml-[80px] sm:ml-[100px] lg:ml-[432px]"
                  : "ml-[80px] sm:ml-[100px]"
              }`}
            >
              <h1 className="text-xl lg:text-2xl flex items-center gap-2">
                <Link to={"/userdashboard/1/myplayers"}>My Players</Link>
                <TiChevronRight /> Current Player
              </h1>
              {showLogOutModal && (
                <SignOutModal setShowLogOutModal={setShowLogOutModal} />
              )}
              <div className="w-full py-4 my-4 flex flex-col lg:flex-wrap lg:flex-row gap-4"></div>
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default PlayerProfilePage;