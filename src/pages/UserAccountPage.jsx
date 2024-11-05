import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";

function UserAccountPage() {
  const { user, loggedIn, setUser, setLoggedIn } = useContext(GlobalContext);
  const [userMenuOpen, setUserMenuOpen] = useState(true);
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const navigate = useNavigate();

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
              className={`flex flex-col w-full h-full p-8 ${
                userMenuOpen ? "ml-[120px] lg:ml-[432px]" : "ml-[120px]"
              }`}
            >
              <h1>My Account</h1>
              {showLogOutModal && (
                <SignOutModal setShowLogOutModal={setShowLogOutModal} />
              )}
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default UserAccountPage;
