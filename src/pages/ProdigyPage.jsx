import React from "react";
import Header from "../components/nav/Header";
import HeroSectionRight from "../components/main/HeroSectionRight";
import HomeReviewSection from "../components/main/HomeReviewSection";
import CtaSection from "../components/cta/CtaSection";
import Footer from "../components/footer/Footer";
import prodigyImg from "../assets/prodigy-wide.png";
import ProdigyProgramsSection from "../components/main/ProdigyProgramsSection";

function ProdigyPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          mainTitle={"Perfect your"}
          specialTitleText={"Foundations"}
          heroImg={prodigyImg}
        />
        <ProdigyProgramsSection />
        <HomeReviewSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default ProdigyPage;
