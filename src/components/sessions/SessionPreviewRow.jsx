import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoMdCloseCircleOutline } from "react-icons/io";

function SessionPreviewRow({
  session,
  openBook,
  setOpenBook,
  openOptions,
  setOpenOptions,
}) {
  const [currSessionTitle, setCurrSessionTitle] = useState("Trilogy Academy");
  const [currSessionDate, setCurrSessionDate] = useState(
    "Saturday 25 December 2024"
  );
  const [currSessionTime, setCurrSessionTime] = useState("8am - 10am");
  const [currSessionPrice, setCurrSessionPrice] = useState("100");
  const [currSessionCoach, setCurrSessionCoach] = useState("Coach Francisco J");
  const [isBooking, setIsBooking] = useState(true);
  const [isViewing, setIsViewing] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenBook(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const { loggedIn, currUser, parentObj } = useContext(GlobalContext);

  useEffect(() => {
    if (session) {
      setCurrSessionTitle(session.title);
      setCurrSessionDate(session.dateFormatted);
      setCurrSessionTime(session.time);
      setCurrSessionPrice(session.price);
      setCurrSessionCoach(session.coach);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full p-4 max-w-[800px] overflow-hidden rounded-xl border-2 border-black flex flex-row items-start flex-wrap sm:items-center gap-2">
        <div className="flex flex-col items-start leading-tight pr-2">
          <h3 className="font-medium">{currSessionTitle}</h3>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <div className="">${currSessionPrice}</div>
            <div>{currSessionCoach}</div>
          </div>
        </div>
        <div className="flex flex-col items-start leading-tight pr-8">
          <p className="text-black text-[0.9rem]">{currSessionDate}</p>
          <p className="text-neutral-500 text-sm">{currSessionTime}</p>
        </div>
        <div className="flex flex-wrap gpa-2 items-start gap-1">
          {isBooking && (
            <button
              className="p-2 px-6 text-[0.65rem] rounded-xl border-2 border-[#1e1e1e] text-white bg-blue-500 hover:bg-blue-400 font-semibold"
              onClick={handleClickOpen}
            >
              Book Now
            </button>
          )}
          <button className="p-2 px-6 text-[0.65rem] rounded-xl border-2 border-[#1e1e1e]  bg-neutral-200 hover:bg-neutral-300 font-semibold">
            See More
          </button>
        </div>
      </div>
    </>
  );
}

export default SessionPreviewRow;
