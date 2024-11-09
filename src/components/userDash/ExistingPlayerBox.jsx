import React from "react";
import { useNavigate } from "react-router-dom";

function ExistingPlayerBox({ playerName, playerMembership, playerDob }) {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 border-2 border-neutral-700 rounded-2xl w-[250px] h-[100px] min-[375px]:w-[350px] min-[375px]:h-[200px] flex flex-col leading-tight text-xl text-black hover:shadow-lg cursor-pointer"
      onClick={() => navigate("/userdashboard/1/myplayers/1")}
    >
      <p>{playerName}</p>
      <p className="text-sm text-neutral-400">{playerMembership}</p>
      <p className="text-sm text-neutral-400">{playerDob}</p>
    </div>
  );
}

export default ExistingPlayerBox;
