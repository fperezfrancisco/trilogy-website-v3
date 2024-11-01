import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function LogInModal({ switchToLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    alert("Logged In");
  };

  const handleSignUpLink = () => {
    switchToLogin(false);
  };

  const handleKeyDownSignUp = (e) => {
    if (e.key === "Enter") {
      handleSignUpLink;
    }
  };

  return (
    <div className="w-full max-w-[600px] p-4 pt-8 flex flex-col items-center h-screen sm:h-fit sm:rounded-2xl min-[400px]:shadow-2xl bg-white">
      <h1 className="font-medium text-xl">Log in</h1>
      <div className="flex flex-col gap-4 p-4 w-full max-w-[450px] my-4">
        <form onSubmit={(e) => handleLogInSubmit(e)}>
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
            Log In
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
            Log In with Google
          </button>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm">
            <p className="text-medium">Dont't have an account?</p>
            <p
              tabIndex={0}
              onClick={handleSignUpLink}
              onKeyDown={(e) => handleKeyDownSignUp(e)}
              className="text-blue-500 font-medium hover:underline cursor-pointer"
            >
              Create an account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
