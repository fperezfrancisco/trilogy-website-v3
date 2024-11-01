import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import Header from "../components/nav/Header";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/init";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const { user, loggedIn, setUser, setLoggedIn } = useContext(GlobalContext);
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
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] flex h-full relative border-2 border-black">
        {loggedIn && (
          <div className="flex flex-col w-full p-8">
            <h1>User dashboard</h1>
            <button
              className="p-2 border-2 border-black hover:bg-neutral-200 max-w-[300px]"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
        {!loggedIn && <div className="p-8">Sign in to view your dashboard</div>}
      </main>
    </div>
  );
}

export default UserDashboard;
