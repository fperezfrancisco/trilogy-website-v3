import React from "react";
import Header from "../components/nav/Header";
import HeroSectionRight from "../components/main/HeroSectionRight";
import SpringBreakSection from "../components/main/SpringBreakSection";
import OldersSpringBreakSection from "../components/main/OldersSpringBreakSection";
import HomeReviewSection from "../components/main/HomeReviewSection";
import CtaSection from "../components/cta/CtaSection";
import Footer from "../components/footer/Footer";

const SpringBreakPage = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          heroImg={"/winter-25-group.JPG"}
          mainTitle={"Spring Break Camp:"}
          specialTitleText={"April 6 - 9, 2026"}
        />

        <SpringBreakSection flyerSrc={"/spring-26.png"} />
        <OldersSpringBreakSection flyerSrc={"/olders-camp.png"} />

        <HomeReviewSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default SpringBreakPage;
