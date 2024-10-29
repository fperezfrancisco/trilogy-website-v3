import React from "react";
import Footer from "../components/footer/Footer";
import CtaSection from "../components/cta/CtaSection";
import Header from "../components/nav/Header";
import HeroSectionRight from "../components/main/HeroSectionRight";
import AboutPurposeSection from "../components/main/AboutPurposeSection";
import aboutImg from "../assets/aboutImg-min.png";
//import aboutImgMedium from "../assets/aboutImg-Medium.png";
//import aboutImgSmall from "../assets/aboutImg-Small.png";
//import aboutImgSquare from "../assets/aboutImg-square.png";

function AboutPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          mainTitle={"A stepping stone for"}
          specialTitleText={"Greatness"}
          heroImg={aboutImg}
        />
        <AboutPurposeSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
