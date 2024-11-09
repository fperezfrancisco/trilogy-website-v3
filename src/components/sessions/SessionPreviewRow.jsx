import React, { useEffect, useState } from "react";

function SessionPreviewRow({ session }) {
  const [currSessionTitle, setCurrSessionTitle] = useState("Trilogy Acadmey");
  const [currSessionDate, setCurrSessionDate] = useState(
    "Saturday 25 December 2024"
  );
  const [currSessionTime, setCurrSessionTime] = useState("8am - 10am");
  const [currSessionPrice, setCurrSessionPrice] = useState("100");
  const [currSessionCoach, setCurrSessionCoach] = useState("Coach Francisco J");

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
    <div className="p-3 px-4 w-full max-w-[600px] rounded-xl border-2 border-black flex flex-col-reverse items-start justify-start gap-1 sm:flex-row sm:gap-4 sm:items-center">
      <div className="flex flex-col items-start leading-tight">
        <p className="text-black text-[0.9rem]">{currSessionDate}</p>
        <p className="text-neutral-500 text-sm">{currSessionTime}</p>
      </div>
      <div className="hidden sm:block h-full w-[1px] bg-neutral-500"></div>
      <div className="flex flex-col items-start leading-tight">
        <h3 className="font-medium">{currSessionTitle}</h3>
        <div className="flex w-full items-center gap-2 text-sm text-neutral-500">
          <div className="">${currSessionPrice}</div>
          <div>{currSessionCoach}</div>
        </div>
      </div>
    </div>
  );
}

export default SessionPreviewRow;
