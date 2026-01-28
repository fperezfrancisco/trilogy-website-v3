import React from "react";

const ProgramHeroSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-[0px] h-full min-h-[700px] overflow-x-hidden p-4 md:p-8 flex flex-col items-center justify-center min-[800px]:flex-row min-[800px]:items-center md:justify-start relative">
      <div className="flex flex-col items-center text-center min-[800px]:items-start min-[800px]:text-left w-full min-[800px]:w-1/2 min-[800px]:max-w-[600px] p-0 min-[800px]:py-4 min-[800px]:relative min-[800px]:z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight mb-4 tracking-[-2px]">
          Elite 1-1 <span className="text-blue-500">Mentorship</span>.
        </h1>
        <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%]">
          Train With Purpose. Progress With Clarity. Personalized 1-on-1
          Mentorship for Highly Committed Players Ready to Level Up — Limited
          Elite Spots Available (Ages 10+).
        </p>
        <div className="mt-6 flex flex-wrap gap-2 w-full justify-center min-[800px]:justify-start">
          <button className="p-4 bg-blue-500 hover:bg-blue-700 rounded-lg w-full max-w-[200px] text-white">
            Sign Up
          </button>
          <button className="p-4 bg-neutral-300 hover:bg-neutral-400 rounded-lg w-full max-w-[200px] text-neutral-700">
            Get Help
          </button>
        </div>
      </div>
      <div className="aspect-[5/3] rounded-2xl w-full max-w-[500px] mt-8 h-auto bg-neutral-200 min-[800px]:absolute min-[800px]:right-[-100px] min-[800px]:top-1/2 min-[800px]:transform min-[800px]:-translate-y-1/2 min-[800px]:w-2/3 min-[800px]:max-w-[800px] min-[800px]:mt-0 min-[800px]:z-0"></div>
    </section>
  );
};

export default ProgramHeroSection;
