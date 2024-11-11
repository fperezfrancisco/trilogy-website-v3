import React, { useContext, useState } from "react";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";
import { GlobalContext } from "../context/context";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase/init";
import NewPlayerBox from "../components/userDash/NewPlayerBox";
import ExistingPlayerBox from "../components/userDash/ExistingPlayerBox";
import DialogBox from "../components/mui/DialogBox";
import { signOut } from "firebase/auth";

function UserPlayersPage() {
  const { accid } = useParams();

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
              <h1 className="text-xl lg:text-2xl">My Players</h1>
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
              <div className="w-full py-4 my-4 flex flex-col lg:flex-wrap lg:flex-row gap-4">
                <div className="w-full flex flex-wrap gap-4 border-2- border-neutral-200">
                  <ExistingPlayerBox
                    playerName={"Francisco Perez"}
                    playerMembership={"Free Membership"}
                    playerDob={"12/13/1997"}
                  />
                  <ExistingPlayerBox
                    playerName={"Cesar Perez"}
                    playerMembership={"Pro Membership"}
                    playerDob={"05/08/2003"}
                  />
                  <NewPlayerBox accId={accid} />
                </div>
              </div>
            </div>
          </>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default UserPlayersPage;
