import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

function ReviewBox({ stars, author, text, playerInfo, location }) {
  const [starsList, setStarsList] = useState();

  const handleStars = () => {
    if (stars && stars > 0) {
      let currList = [];
      for (let i = 0; i < Math.floor(stars); i++) {
        currList.push(<IoIosStar className="text-xl text-yellow-300" />);
      }
      if (stars % 1 == 0.5) {
        currList.push(<IoIosStarHalf className="text-xl text-yellow-300" />);
      }
      setStarsList(currList);
    }
  };

  useEffect(() => {
    handleStars();
  }, [stars]);

  return (
    <div className="w-full max-w-[300px] h-max-content p-4 py-6 rounded-2xl shadow-md flex flex-col border-neutral-100 border-2">
      <div className="flex flex-col items-start justify-start mb-2">
        <p className="text-[0.75rem] font-semibold sm:text-[0.85rem] leading-tight">
          {author}
        </p>
        <p className="text-[0.75rem] sm:text-[0.85rem] leading-tight text-neutral-400">
          {playerInfo}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        {starsList && starsList.map((star) => star)}
      </div>
      <p className="text-[0.75rem] sm:text-[0.85rem] leading-tight text-neutral-400 mt-3">
        {text}
      </p>
    </div>
  );
}

export default ReviewBox;
