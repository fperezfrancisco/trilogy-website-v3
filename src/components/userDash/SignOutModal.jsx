import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../../firebase/init";
import { GlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function SignOutModal({ setShowLogOutModal }) {
  const { setCurrUser, setLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    setCurrUser();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <dialog className="p-8 flex flex-col gap-4 absolute left-0 right-0 top-[50%] m-auto items-center justify-center bg-white border-2 border-neutral-200 rounded-2xl w-full max-w-[500px]">
      <p>Are you sure you want to log out?</p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <button
          className="p-2 text-center bg-white border-2 border-black w-[200px] rounded-2xl hover:bg-neutral-200"
          onClick={handleSignOut}
        >
          Yes, log me out
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 p-2 rounded-2xl border-2 border-black w-[200px]"
          onClick={() => setShowLogOutModal(false)}
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
}

export default SignOutModal;
