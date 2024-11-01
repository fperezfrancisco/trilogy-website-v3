import React, { useContext, useState } from "react";
import SignUpModal from "../components/authentication/SignUpModal";
import LogInModal from "../components/authentication/LogInModal";
import { GlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function AuthenticationIndex() {
  const [userLoggingIn, setUserLoggingIn] = useState(true);
  const navigate = useNavigate();

  const { loggedIn } = useContext(GlobalContext);

  return (
    <div className="w-screen h-full min-h-screen sm:p-4 md:p-8 flex flex-col items-center justify-center bg-neutral-900/80">
      {loggedIn ? (
        <div
          className="text-white cursor-pointer"
          onClick={() => navigate("/userdashboard")}
        >
          Go to dashboard
        </div>
      ) : userLoggingIn ? (
        <LogInModal switchToLogin={setUserLoggingIn} />
      ) : (
        <SignUpModal switchToLogin={setUserLoggingIn} />
      )}
    </div>
  );
}

export default AuthenticationIndex;
