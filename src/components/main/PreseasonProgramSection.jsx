import React from "react";
import { useNavigate } from "react-router-dom";

const PreseasonProgramSection = () => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    window.open("https://forms.gle/hBi5tgww1k4VAEyf8", "_blank");
    return;
  };

  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[10rem] px-4 md:px-8 flex flex-col items-center lg:flex-row-reverse lg:items-center justify-center gap-12">
      <div className="aspect-[4/5] flex w-full max-w-[450px] bg-neutral-400 rounded-2xl overflow-hidden">
        {true && (
          <img
            src={"/preseason2025.png"}
            className="object-cover w-full"
            alt=""
          />
        )}
      </div>
      <div className="sectionCopy w-full max-w-[600px] flex flex-col items-center lg:items-start gap-8">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h2 className="sectionTitle italic text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
            Prepare for Your <span className="text-blue-500">Best Season </span>
            Yet.
          </h2>

          <p className="mt-4 text-[1rem] font-medium text-center lg:text-left">
            Duane R Harte Park, SCV
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Boys & Girls Ages born 2018 - 2015 | 8 - 9:30am
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Boys & Girls Ages born 2014+ | 9:30am - 11am
          </p>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            We are bringing back our highly popular Preseason Program this
            summer! An elite 4-week training experience designed to get you
            sharp, confident, and match-ready before fall season and summer
            tournaments. Make this off-season easy for your player by letting us
            push them.
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
};

export default PreseasonProgramSection;
