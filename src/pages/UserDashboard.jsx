import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import Header from "../components/nav/Header";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/init";
import { useNavigate } from "react-router-dom";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";
import DialogBox from "../components/mui/DialogBox";

function UserDashboard() {
  const { user, loggedIn, setUser, setLoggedIn } = useContext(GlobalContext);
  const [userMenuOpen, setUserMenuOpen] = useState();
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    setUser({});
    setLoggedIn(false);
    navigate("/");
  };

  const getUserInfo = () => {};

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
              <h1 className="text-xl lg:text-2xl">My dashboard</h1>
              {showLogOutModal && (
                <DialogBox
                  openDialog={true}
                  title={"Are you sure you want to sign out?"}
                  text={"You will have to sign in again if you continue."}
                  confirmBtnText={"Yes Sign Out"}
                  cancelBtnText={"Cancel"}
                  confirmBtnAction={handleSignOut}
                  cancelBtnAction={() => setShowLogOutModal(false)}
                />
              )}
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default UserDashboard;
