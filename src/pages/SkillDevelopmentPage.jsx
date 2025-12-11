import React from "react";
import Header from "../components/nav/Header";
import HeroSectionRight from "../components/main/HeroSectionRight";
import Footer from "../components/footer/Footer";
import CtaSection from "../components/cta/CtaSection";
import winterWide from "../assets/winter-wide.png";
import WinterProgramSection from "../components/main/WinterProgramSection";
import HomeReviewSection from "../components/main/HomeReviewSection";
import winterSquare from "../assets/winter-square.png";
import winterMedium from "../assets/winter-medium.png";
import SkillDevSection from "../components/main/SkillDevSection";

function SkillDevelopmentPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          mainTitle={"Stay Ahead this"}
          specialTitleText={"Winter"}
          heroImg={"/winter2025-26/winter-programs-26.png"}
          heroImgMedium={"/winter2025-26/winter-programs-26.png"}
          heroSquare={"/winter2025-26/winter-programs-26.png"}
        />
        <SkillDevSection />
        <HomeReviewSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default SkillDevelopmentPage;
