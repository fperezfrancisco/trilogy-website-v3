import React, { useContext, useState } from "react";
import SignUpModal from "../components/authentication/SignUpModal";
import LogInModal from "../components/authentication/LogInModal";
import { GlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import authBkg from "../assets/hero-art-banner.webp";

function AuthenticationIndex() {
  const navigate = useNavigate();

  const { loggedIn, loggingIn, setLoggingIn } = useContext(GlobalContext);

  return (
    <div
      className="w-screen h-full min-h-screen sm:p-4 md:p-8 flex flex-col items-center justify-center bg-neutral-900/80"
      id="authScreen"
    >
      <p
        className="absolute top-8 left-8 cursor-pointer font-semibold hover:underline z-10 text-white"
        onClick={() => navigate("/")}
      >
        Back to Home
      </p>
      <div className="absolute w-full h-full z-0 bg-blue-500/60"></div>
      {loggedIn ? (
        <div
          className="text-white cursor-pointer"
          onClick={() => navigate("/userdashboard")}
        >
          Go to dashboard
        </div>
      ) : loggingIn ? (
        <LogInModal switchToLogin={setLoggingIn} />
      ) : (
        <SignUpModal switchToLogin={setLoggingIn} />
      )}
    </div>
  );
}

export default AuthenticationIndex;
