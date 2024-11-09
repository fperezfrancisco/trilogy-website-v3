import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function NewPlayerBox({ accId }) {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 border-2 border-neutral-700 rounded-2xl w-[250px] h-[100px] min-[375px]:w-[350px] min-[375px]:h-[200px] flex flex-col text-xl text-blue-400 hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/userdashboard/${accId}/newplayer`)}
    >
      <p className="">Add a new player</p>
      <div className="w-full h-full flex items-center justify-center text-[3rem]">
        <IoIosAddCircleOutline />
      </div>
    </div>
  );
}

export default NewPlayerBox;
