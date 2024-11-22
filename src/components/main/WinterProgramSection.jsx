import React from "react";
import { useNavigate } from "react-router-dom";
import jackImg from "../../assets/jack-trilogy.webp";

function WinterProgramSection() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScmafl-trO8VO01AFR6vZ2hqicHXjLdO4RcBdSaYlda5IXKAg/viewform",
      "_blank"
    );
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
            Skill Mastery Clinics
          </h2>
          <p className="mt-4 text-[1rem] font-medium text-center lg:text-left">
            Dec 23rd & Dec 30th | 8am - 10am
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Duane R Harte Park, SCV, CA
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Boys & Girls Ages 7 - 15
          </p>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            Perfect for competitive club soccer players who are looking to stay
            sharp this Winter Break. We’ll be focusing on individual ball
            mastery & technical proficiency as well as applying these skills in
            small sided games. Limited to 20 players total.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start w-full">
          <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
            Preseason Program
          </h2>
          <p className="mt-4 text-[1rem] font-medium text-center lg:text-left">
            Jan 6th - 10th | Duane R Harte Park, SCV
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Boys & Girls Ages born 2017 - 2014 | 8 - 9:30am
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Boys & Girls Ages born 2013 - 2010 | 9:30am - 11am
          </p>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            We are bringing back our highly popular Preseason Program this
            winter! Join us for a week of high intensity & preparation for the
            upcoming spring season. We focus on developing technical skills
            while also pushing your endurance and conditioning. Our last day
            pushes players with an endurance test followed by small-sided
            scrimmages. Make this off-season easy for your player by letting us
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
}

export default WinterProgramSection;
