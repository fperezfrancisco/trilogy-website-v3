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

function WinterPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          mainTitle={"Stay ahead this"}
          specialTitleText={"Winter"}
          heroImg={winterWide}
          heroImgMedium={winterMedium}
          heroSquare={winterSquare}
        />
        <WinterProgramSection />
        <HomeReviewSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default WinterPage;
