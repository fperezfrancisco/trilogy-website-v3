import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../buttons/Button";
import SkeletonBox from "../skeleton/SkeletonBox";
import heroArtBanner from "../../assets/hero-art-banner.webp";
//import heroImgOne from "../../assets/hero-img-1.png";
//import heroImgOnePortrait from "../../assets/hero-img-1-portrait.png";
//import heroBlue from "../../assets/hero-banners/blue-skills.png";
//import heroSkills from "../../assets/hero-banners/skills.png";
//import heroSkillsMedium from "../../assets/hero-banners/skills-medium.png";
//import heroSkillsSmall from "../../assets/hero-banners/skills-small.png";
//import heroSkillsSquare from "../../assets/hero-banners/skills-square.png";

function HeroSectionMain() {
  const [loadState, setLoadState] = useState(false);
  return (
    <section className="w-full p-4 pb-12 sm:pb-[12rem] md:p-8 md:pt-2 md:pb-[14rem] relative">
      <div className="  flex rounded-2xl aspect-[4/5] min-[425px]:aspect-video max-h-[600px] w-full mx-auto overflow-hidden">
        {true && (
          <>
            {false && (
              <>
                <img
                  src={heroSkills}
                  className="object-cover object-center w-full hidden lg:block"
                  alt=""
                />
                <img
                  src={heroSkillsMedium}
                  className="object-cover w-full hidden sm:block lg:hidden"
                />
                <img
                  src={heroSkillsSmall}
                  className="object-cover w-full hidden min-[425px]:block sm:hidden"
                />
                <img
                  src={heroSkillsSquare}
                  className="object-cover w-full block min-[425px]:hidden"
                />
              </>
            )}
            <img
              src={heroArtBanner}
              className="object-cover object-center w-full hidden md:block"
              alt=""
            />
          </>
        )}
        {false && (
          <div className="w-full h-full bg-neutral-300 animate-pulse"></div>
        )}
      </div>
      <div className="sm:absolute flex flex-col items-center sm:items-start gap-2 lg:gap-4 justify-center mx-auto right-0 sm:right-auto sm:justify-start bg-white rounded-t-2xl p-6 sm:rounded-tl-none sm:rounded-tr-2xl sm:p-6 sm:pl-4 md:pl-11 w-fit sm:w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[650px] bottom-[1rem] md:bottom-0 left-3">
        {loadState ? (
          <SkeletonBox isFullWidth={true} height={32} rounded={true} />
        ) : (
          <h1 className="text-[#1e1e1e] font-bold text-center sm:text-left text-[2.65rem] leading-[1] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]">
            Take your game to the{" "}
            <span className="text-blue-500 italic">next level</span>.
          </h1>
        )}

        {loadState ? (
          <SkeletonBox width={200} height={32} rounded={true} />
        ) : (
          <p className="text-center mb-6 sm:text-left text-sm lg:text-[1.25rem] leading-6">
            Experience the difference with Trilogy Soccer Training: Elite
            development, rapid advancement.
          </p>
        )}

        {loadState ? (
          <SkeletonBox height={54} rounded={true} />
        ) : (
          <Button primary={true} full={true} title="Start Training Now" />
        )}
      </div>
      <div className="p-3 w-full max-w-[300px] sm:max-w-[250px] md:w-fit md:flex-wrap xl:flex-row xl:max-w-[550px] md:min-w-[300px] lg:w-full mx-auto flex flex-col gap-2 sm:absolute sm:right-0 sm:bottom-0 xl:left-[680px] xl:right-auto xl:bottom-[9rem]">
        <div className="rounded-2xl p-3 flex gap-2 items-center shadow-lg w-fit bg-white">
          <IoIosCheckmarkCircle className="text-blue-500 text-2xl" />
          <p className="italic font-semibold text-[0.85rem] leading-none">
            100% Satisfaction Guarentee
          </p>
        </div>
        <div className="rounded-2xl p-3 flex gap-2 items-center shadow-lg w-fit bg-white">
          <IoIosCheckmarkCircle className="text-blue-500 text-2xl" />
          <p className="italic font-semibold text-[0.85rem] leading-none">
            Highly Rated by Customers
          </p>
        </div>
        <div className="rounded-2xl p-3 flex gap-2 items-center shadow-lg w-fit bg-white">
          <IoIosCheckmarkCircle className="text-blue-500 text-2xl" />
          <p className="italic font-semibold text-[0.85rem] leading-none">
            Qualified Coaching Staff
          </p>
        </div>
        <div className="rounded-2xl p-3 flex gap-2 items-center shadow-lg w-fit bg-white">
          <IoIosCheckmarkCircle className="text-blue-500 text-2xl " />
          <p className="italic font-semibold text-[0.85rem] leading-none">
            Development for all levels
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionMain;
