import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import { Alert } from "@mui/material";

function SignUpModal({ switchToLogin }) {
  const [parentSignUp, setParentSignUp] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [alertText, setAlertText] = useState("");

  const { setLoggedIn, loggedIn } = useContext(GlobalContext);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleParentAccClick = () => {
    setParentSignUp(true);
  };

  const handlePlayerAccClick = () => {
    setParentSignUp(false);
  };

  const handleLogInLink = () => {
    switchToLogin(true);
  };

  const handleKeyDownLogIn = (e) => {
    if (e.key === "Enter") {
      handleLogInLink();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    signUpUserWithEmail();
  };

  const signUpUserWithEmail = () => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          setLoggedIn(true);
          navigate(`/parentinfo`);
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/email-already-in-use":
              setAlertText(
                "Email address is already in use. Please proceed to log in."
              );
              setAlertDisplay(true);
              break;
            case "auth/invalid-email":
              setAlertText("This email address is invalid");
              setAlertDisplay(true);
              break;
            case "auth/operation-not-allowed":
              setAlertText("Error during sign up. Please try again.");
              setAlertDisplay(true);
              break;
            case "auth/weak-password":
              setAlertText(
                "Password is too weak. Must be at least 6 characters long!"
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

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)

        setLoggedIn(true);
        navigate(`/parentinfo`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full max-w-[600px] z-10 p-4 pt-8 flex flex-col items-center h-screen sm:h-fit sm:rounded-2xl min-[400px]:shadow-2xl bg-white">
      <h1 className="font-medium text-xl">Create your account now</h1>
      <div className="w-full flex max-w-[350px] sm:max-w-none flex-col sm:flex-row gap-4 justify-center mt-4">
        <button
          className={`p-2 border-2 border-black rounded-2xl text-sm ${
            parentSignUp ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={handleParentAccClick}
        >
          Parent Account
        </button>
        <button
          className={`p-2 border-2 border-black rounded-2xl text-sm ${
            !parentSignUp ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={handlePlayerAccClick}
        >
          Player Account
        </button>
      </div>
      {parentSignUp !== "null" && parentSignUp ? (
        <div className="flex flex-col gap-4 p-4 w-full max-w-[450px] my-4">
          {alertDisplay && <Alert severity="error">{alertText}</Alert>}
          <form onSubmit={(e) => handleRegisterSubmit(e)}>
            <ul className="w-full flex flex-col gap-4">
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userEmail" className="font-medium">
                  Email
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userPassword" className="font-medium">
                  Password
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </li>
            </ul>
            <button
              tabIndex={0}
              className="w-full p-3 bg-blue-500 text-white flex items-center text-center justify-center rounded-2xl mt-4 font-semibold hover:bg-blue-700 focus:bg-blue-700"
            >
              Next Step
            </button>
          </form>
          <div className="w-full h-[1.5px] bg-neutral-200"></div>
          <div className="flex flex-col w-full items-center">
            <p className="text-neutral-400 mb-4">or</p>
            <button
              tabIndex={0}
              className="w-full p-2 flex items-center justify-center border-2 border-neutral-700 rounded-2xl text-md gap-2 hover:bg-neutral-200 focus:bg-neutral-200"
              onClick={signUpWithGoogle}
            >
              <FcGoogle className="text-2xl" />
              Sign Up with Google
            </button>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm">
              <p className="text-medium">Already have an account?</p>
              <p
                tabIndex={0}
                className="text-blue-500 font-medium hover:underline cursor-pointer"
                onClick={handleLogInLink}
                onKeyDown={handleKeyDownLogIn}
              >
                Log in
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-4 w-full max-w-[450px] my-4">
          <p className="text-[0.9rem] bg-blue-200 p-2">
            You must be 16 years or older to create an account with us. If not,
            please ensure your parent comes back and creates an account for you.
          </p>
          <form onSubmit={(e) => handleRegisterSubmit(e)}>
            <ul className="w-full flex flex-col gap-4">
              <li className="w-full flex gap-2">
                <input
                  type="checkbox"
                  name="ageVerification"
                  id="ageVerification"
                  className="border-[2px] w-8 border-neutral-200 rounded-2xl"
                  required
                />
                <label
                  htmlFor="ageVerification"
                  className="font-medium text-sm"
                >
                  I verify that I am 16 years or older in order to continue with
                  the creation of this acccount.
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
              </li>

              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userParentName" className="font-medium">
                  Player Name
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="text"
                  name="userParentName"
                  id="userParentName"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Parent Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userEmail" className="font-medium">
                  Email
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="userPassword" className="font-medium">
                  Password
                  <span className="text-[0.95rem] text-blue-500 pl-1">*</span>
                </label>
                <input
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  className="p-2 pl-3 border-[2px] border-neutral-200 rounded-2xl"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </li>
            </ul>
            <button
              tabIndex={0}
              className="w-full p-3 bg-blue-500 text-white flex items-center text-center justify-center rounded-2xl mt-4 font-semibold hover:bg-blue-700 focus:bg-blue-700"
            >
              Create my account
            </button>
          </form>
          <div className="w-full h-[1.5px] bg-neutral-200"></div>
          <div className="flex flex-col w-full items-center">
            <p className="text-neutral-400 mb-4">or</p>
            <button
              tabIndex={0}
              className="w-full p-2 flex items-center justify-center border-2 border-neutral-700 rounded-2xl text-md gap-2 hover:bg-neutral-200 focus:bg-neutral-200"
            >
              <FcGoogle className="text-2xl" />
              Sign Up with Google
            </button>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm">
              <p className="text-medium">Already have an account?</p>
              <p
                tabIndex={0}
                className="text-blue-500 font-medium hover:underline cursor-pointer"
                onClick={handleLogInLink}
                onKeyDown={handleKeyDownLogIn}
              >
                Log in
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUpModal;
