import React from "react";
import { useNavigate } from "react-router-dom";
import prodigyImg from "../../assets/trilogy-poles-square.webp";

function ProdigyProgramsSection() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfPEV7poqRIA4fvRL9qiJnrv-F6aY1g-F_2dHGoGzPID1IFxA/viewform",
      "_blank"
    );
    return;
  };
  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[10rem] px-4 md:px-8 flex flex-col items-center lg:flex-row-reverse lg:items-start justify-center gap-12">
      <div className="aspect-[4/5] flex w-full max-w-[450px] bg-neutral-400 rounded-2xl overflow-hidden">
        {true && (
          <img src={prodigyImg} className="object-cover w-full" alt="" />
        )}
      </div>
      <div className="sectionCopy w-full max-w-[650px] flex flex-col items-center lg:items-start gap-8">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
            Prodigy Clinics
          </h2>
          <p className="mt-4 text-[1rem] font-medium text-center lg:text-left">
            Dec 23rd & Dec 30th | 10am - 12pm
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Duane R Harte Park, SCV, CA
          </p>
          <p className=" text-[1rem] font-normal text-neutral-400 text-center lg:text-left">
            Boys & Girls Ages 5 - 9
          </p>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            Perfect for recreational & early club players looking to perfect
            their foundations this Winter Break. We’ll be focusing on individual
            ball mastery & technical proficiency as well as applying these
            skills in small sided games. Limited to 20 players total.
          </p>
          <p className="mt-4 text-[1rem] font-normal text-center lg:text-left">
            2 hour trainings focused on speed, agility, & quickness as well as
            technical foundations - ball mastery, passing, receiving, &
            shooting. All applied in a fun, safe game-like environment.
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

export default ProdigyProgramsSection;
