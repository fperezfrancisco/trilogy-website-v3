import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import Header from "../components/nav/Header";
import UserAsideBar from "../components/userDash/UserAsideBar";
import SignOutModal from "../components/userDash/SignOutModal";
import SessionPreviewRow from "../components/sessions/SessionPreviewRow";
import DialogBox from "../components/mui/DialogBox";
import { signOut } from "firebase/auth";

function UserSessionsPage() {
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
              <h1 className="text-xl lg:text-2xl">My Sessions</h1>
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
              <div className="w-full py-4 my-4 flex flex-col gap-4">
                <div className="flex-col flex gap-2">
                  <h2 className="text-blue-500">Upcoming</h2>
                  <div className="w-full flex flex-wrap gap-4 ">
                    {Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <SessionPreviewRow
                          session={{
                            title: "Prodigy Program",
                            dateFormatted: "Friday 10 November 2024",
                            time: "8am - 9am",
                            price: "35",
                            coach: "Coach Francisco C.",
                          }}
                        />
                      ))}
                  </div>
                </div>
                <div className="flex-col flex gap-2">
                  <h2 className="text-blue-500">Previous</h2>
                  <div className="w-full flex flex-wrap gap-4 ">
                    {Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <SessionPreviewRow
                          session={{
                            title: "Prodigy Program",
                            dateFormatted: "Friday 10 November 2024",
                            time: "8am - 9am",
                            price: "35",
                            coach: "Coach Francisco C.",
                          }}
                        />
                      ))}
                  </div>
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

export default UserSessionsPage;
