import React from "react";
import Button from "../buttons/Button";
//import jackImg from "../../assets/jack-trilogy.png";

function AboutPurposeSection() {
  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center lg:flex-row-reverse lg:items-start justify-center gap-12">
      <div className="aspect-[4/5] w-full max-w-[450px] flex rounded-2xl overflow-hidden">
        {false && <img src={jackImg} className="w-full object-cover" alt="" />}
      </div>
      <div className="sectionCopy w-full max-w-[650px] flex flex-col items-center lg:items-start">
        <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
          soccer training with a purpose.
        </h2>
        <p className="my-3 text-[1rem] font-normal text-center lg:text-left text-neutral-500">
          It’s not about us but about what we can do for you! Our mission is to
          develop you as as a player to reach your ultimate goal of becoming a
          Pro, a College player, or whatever you want to be. Our emphasis is on
          being that environment that makes it easy to improve and takes care of
          all the fine details so you can focus on what’s important -- Learning
          & Loving the Game
        </p>
        <ul className="flex flex-col pl-10 gap-4 list-none mt-6 mb-10">
          <li className="flex flex-col items-start">
            <p className="font-semibold text-2xl md:text-[2rem]">20+ Years</p>
            <p className="text-[0.65rem] md:text-[0.85rem]">
              Playing Experience at High Level
            </p>
          </li>
          <li className="flex flex-col items-start">
            <p className="font-semibold text-2xl md:text-[2rem]">4+ Years</p>
            <p className="text-[0.65rem] md:text-[0.85rem]">
              Coaching Competitive Soccer
            </p>
          </li>
          <li className="flex flex-col items-start">
            <p className="font-semibold text-2xl md:text-[2rem]">3 Coaches</p>
            <p className="text-[0.65rem] md:text-[0.85rem]">
              With College Playing Experience
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPurposeSection;
