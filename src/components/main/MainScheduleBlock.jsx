import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import SessionPreviewRow from "../sessions/SessionPreviewRow";
import { Skeleton } from "@mui/material";

function MainScheduleBlock() {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [currDate, setCurrDate] = useState(dayjs().format("MM/DD/YYYY"));
  const [showToday, setShowToday] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCaledarChange = (value) => {
    setSelectedDate(value.$d);
    if (dayjs().isSame(value.$d, "day")) {
      setShowToday(true);
    } else {
      setShowToday(false);
    }
  };

  useEffect(() => {
    console.log("current date: ", currDate);
    console.log("selected date: ", selectedDate);
    console.log(dayjs(selectedDate).format("MM/DD/YYYY"));
  }, [selectedDate]);

  return (
    <div className="p-4 sm:p-8 flex flex-wrap gap-4 lg:flex-nowrap lg:flex-row">
      <div className="w-full h-fit xl:w-[800px] py-6 sm:min-w-[500px] max-w-[800px] flex items-center justify-center border-2 border-neutral-200 rounded-2xl shadow-md">
        <DateCalendar onChange={(value) => handleCaledarChange(value)} />
      </div>
      <div className="w-full h-full min-h-[500px] p-4 flex flex-col border-2 border-green-300">
        <div className="w-full flex items-center justify-start gap-2 mb-4">
          <span
            className={`text-sm p-2 border-2 rounded-xl cursor-pointer transition-all duration-150 ease-out hover:underline ${
              showToday
                ? "text-[#1e1e1e] font-semibold border-neutral-700"
                : "text-neutral-300 font-normal border-neutral-200"
            }`}
            onClick={() => setShowToday(true)}
          >
            Today's Schedule
          </span>
          <span className="h-full min-h-[32px] w-[2px] bg-neutral-300"></span>
          <span
            className={`text-sm p-2 border-2 rounded-xl cursor-pointer transition-all duration-150 ease-out hover:underline ${
              !showToday
                ? "text-[#1e1e1e] font-semibold border-neutral-700"
                : "text-neutral-300 font-normal border-neutral-200"
            }`}
            onClick={() => setShowToday(false)}
          >
            Schedule for {dayjs(selectedDate).format("MM/DD/YYYY")}
          </span>
        </div>
        {showToday ? (
          <div className="w-full flex flex-col gap-3 h-full border-2 border-neutral-200">
            {isLoading
              ? Array(8)
                  .fill(0)
                  .map((_, index) => <Skeleton variant="rounded" height={60} />)
              : Array(8)
                  .fill(0)
                  .map((_, index) => <SessionPreviewRow />)}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MainScheduleBlock;
