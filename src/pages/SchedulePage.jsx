import React from "react";
import Header from "../components/nav/Header";
import MainScheduleBlock from "../components/main/MainScheduleBlock";
import HeroSectionRight from "../components/main/HeroSectionRight";

function SchedulePage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          mainTitle={"Take a peak at our"}
          specialTitleText={"Schedule"}
        />
        <MainScheduleBlock />
      </main>
    </div>
  );
}

export default SchedulePage;
