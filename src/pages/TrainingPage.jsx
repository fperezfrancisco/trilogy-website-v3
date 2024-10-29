import React, { useEffect } from "react";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import CtaSection from "../components/cta/CtaSection";
import HeroSectionRight from "../components/main/HeroSectionRight";
import ProgramSection from "../components/training/ProgramSection";
import trainingImg from "../assets/trainingImg-min.webp";
import { useLocation } from "react-router-dom";

function TrainingPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionRight
          mainTitle={"All the training you need to stay"}
          specialTitleText={"Ahead"}
          heroImg={trainingImg}
        />
        <ProgramSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default TrainingPage;
