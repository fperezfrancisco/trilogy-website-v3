import React, { useState } from "react";
import SignUpModal from "../components/authentication/SignUpModal";
import LogInModal from "../components/authentication/LogInModal";

function AuthenticationIndex() {
  const [userLoggingIn, setUserLoggingIn] = useState(true);

  return (
    <div className="w-screen h-full min-h-screen sm:p-4 md:p-8 flex flex-col items-center justify-center bg-neutral-900/80">
      {userLoggingIn ? (
        <LogInModal switchToLogin={setUserLoggingIn} />
      ) : (
        <SignUpModal switchToLogin={setUserLoggingIn} />
      )}
    </div>
  );
}

export default AuthenticationIndex;
