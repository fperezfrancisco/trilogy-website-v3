import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function GuestCheckoutOrSignIn({ setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="fixed w-screen h-screen z-20 bg-neutral-800/70 top-0 left-0 right-0 bottom-0"></div>
      <dialog
        className="p-8 border-2 border-neutral-400 rounded-2xl fixed top-0 bottom-0 my-auto z-30 w-full max-w-[800px] flex flex-col items-start"
        open
      >
        <IoMdClose
          className="absolute top-4 right-4 text-xl hover:text-neutral-400 cursor-pointer"
          onClick={closeModal}
        />
        <h1 className="font-semibold text-2xl">Proceed as Guest or Sign in</h1>
        <p className="my-4 leading-tight text-neutral-500">
          If you already have an account with us, please proceed to sign in for
          easy & quick booking options. Otherwise, create an account with us or
          continue as a guest.
        </p>
        <div className="flex flex-wrap gap-3 w-full items-center justify-start mt-4">
          <button
            className="p-2 rounded-xl border-2 border-neutral-900 px-4 text-sm hover:bg-neutral-200"
            onClick={() => navigate("/userAuth")}
          >
            Take me to sign in
          </button>
          <button className="p-2 rounded-xl border-2 border-neutral-900 px-4 text-sm hover:bg-neutral-200">
            Create an account
          </button>
          <button className="p-2 rounded-xl border-2 border-neutral-900 px-4 text-sm hover:bg-neutral-200">
            Continue as a guest
          </button>
        </div>
      </dialog>
    </>
  );
}

export default GuestCheckoutOrSignIn;
