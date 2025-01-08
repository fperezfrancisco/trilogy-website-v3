import React from "react";
import { useNavigate } from "react-router-dom";
import jackImg from "../../assets/jack-trilogy.webp";

function SkillDevSection() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    window.open("https://forms.gle/bMCoTw2D89FfgseZ9", "_blank");
    return;
  };

  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[10rem] px-4 md:px-8 flex flex-col items-center lg:flex-row-reverse lg:items-start justify-center gap-12">
      <div className="aspect-[4/5] flex w-full max-w-[450px] bg-neutral-400 rounded-2xl overflow-hidden">
        {true && <img src={jackImg} className="object-cover w-full" alt="" />}
      </div>
      <div className="sectionCopy w-full max-w-[650px] flex flex-col items-center lg:items-start gap-8">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
            Skill Development Training
          </h2>
          <p className="mt-4 text-[1rem] font-medium text-center lg:text-left">
            January 13th, 15th, 22nd, & 27th
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Central Park Field #1
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Players born 2013 - 2010 | 4:30pm - 6pm
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Players born 2017 - 2014 | 6pm - 7:30pm
          </p>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            Introducing our Trilogy Skill Development Training for January,
            designed specifically for club/elite players to continue their
            preparation & development. This program is ideal for those looking
            to get ahead of tournaments & try out season ahead. Limited to 20
            players total.
          </p>
        </div>

        <button
          className="p-4 rounded-2xl w-full max-w-[350px] bg-blue-500 border-2 border-black text-white hover:bg-blue-400"
          onClick={handleRegistration}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default SkillDevSection;
