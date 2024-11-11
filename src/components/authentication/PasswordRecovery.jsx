import { Alert, Dialog } from "@mui/material";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/init";
import { error } from "jquery";
import { Link } from "react-router-dom";

function PasswordRecovery() {
  const [recoveryEmail, setRecoveryEmail] = useState();
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertText, setAlertText] = useState("Email does not exist.");
  const [alertType, setAlertType] = useState("error");

  const handleReset = (e) => {
    e.preventDefault();
    if (recoveryEmail) {
    } else if (recoveryEmail) {
      sendPasswordResetEmail(auth, recoveryEmail)
        .then(() => {
          setAlertText(
            "Email was sent with instructions on resetting your password."
          );
          setAlertType("success");
          setAlertDisplay(true);
        })
        .catch((error) => {
          setAlertType("error");
          switch (error.code) {
            case "auth/user-not-found":
              setAlertText(
                "No account found for this email & password combination."
              );
              setAlertDisplay(true);
              break;
            case "auth/invalid-credential":
              setAlertText(
                "No account found for this email & password combination."
              );
              setAlertDisplay(true);
              break;
            default:
              console.log(error.message);
              break;
          }
        });
    }
  };

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <h1 className="text-2xl sm:text-[2rem] font-semibold">
        Password Reset for Trilogy Account
      </h1>
      <div className="w-full flex-col p-4 max-w-[800px] mt-8">
        {alertDisplay && <Alert severity={alertType}>{alertText}</Alert>}
        <form className="my-4" action="" onSubmit={(e) => handleReset(e)}>
          <ul>
            <li className="flex flex-col gap-2">
              <label htmlFor="recoveryEmail">Email</label>
              <input
                type="email"
                required
                className="p-2 rounded-lg w-full border-2 border-neutral-200"
                onChange={(e) => setRecoveryEmail(e.target.value)}
                placeholder="Enter your email to receive password reset instructions"
              />
            </li>
          </ul>
          <button className="my-4 p-2 w-full max-w-[350px] bg-neutral-200 rounded-xl border-2 border-neutral-700 hover:bg-neutral-300">
            Reset Password
          </button>
        </form>
      </div>
      <Link className="my-8 hover:underline" to={"/"}>
        Back to home
      </Link>
    </div>
  );
}

export default PasswordRecovery;
