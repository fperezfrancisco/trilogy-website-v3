import React from "react";
import { IoMdClose } from "react-icons/io";

function BookingDialogWithAccount(setOpen) {
  const handleConfirm = () => {
    console.log("handle confirm");
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    closeModal();
  };
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
        <h1 className="font-semibold text-2xl">Your Booking Details</h1>
        <p className="my-4 leading-tight text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          culpa, natus, delectus voluptas animi sed aspernatur esse deserunt
          quod veritatis eos voluptates inventore unde necessitatibus
          consequatur officiis ad velit possimus?
        </p>
        <div className="flex flex-wrap gap-3 w-full items-center justify-start">
          <button className="p-2 rounded-xl border-2 border-neutral-900 px-4 text-sm hover:bg-neutral-200">
            {confirmText || "Confirm"}
          </button>
          <button
            className="p-2 rounded-xl border-2 border-neutral-900 px-4 text-sm bg-red-500 hover:bg-red-400"
            onClick={handleCancel}
          >
            {cancelText || "Cancel"}
          </button>
        </div>
      </dialog>
    </>
  );
}

export default BookingDialogWithAccount;
