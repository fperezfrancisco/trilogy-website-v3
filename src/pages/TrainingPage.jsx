import React, { useEffect } from "react";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import CtaSection from "../components/cta/CtaSection";
import HeroSectionRight from "../components/main/HeroSectionRight";
import ProgramSection from "../components/training/ProgramSection";
import trainingImg from "../assets/trainingImg-min.webp";
import trainingMedium from "../assets/training-medium.webp";
import trainingSquare from "../assets/training-square.webp";
import { Link, useLocation } from "react-router-dom";

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
          heroImgMedium={trainingMedium}
          heroSquare={trainingSquare}
        />
        <ProgramSection />
        <section className="w-full  max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col md:flex-row items-center md:items-start md:flex-start gap-8">
          <div className=" w-full h-full min-h-[500px] flex relative overflow-hidden p-4 md:p-8 flex-col justify-center md:justify-normal md:flex-row items-center gap-8 rounded-2xl ">
            <div className="z-50 flex flex-col items-center md:items-start text-center justify-center md:justify-normal md:text-left text-white max-w-[800px] w-full h-full md:w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight mb-4 tracking-[-2px]">
                Ready to take your game to the next level?
              </h1>
              <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%]">
                Start training with us or set up a call so that we can get you
                started on the best development plan right away. Limited
                Mentorship Slots.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 w-full justify-center min-[800px]:justify-start">
                <Link
                  to="/eliteapplication"
                  className="p-4 bg-[#1e1e1e] hover:bg-neutral-800 rounded-lg w-full max-w-[200px] text-white text-center"
                >
                  Start Application
                </Link>
                <button className="p-4 bg-neutral-300 hover:bg-neutral-400 rounded-lg w-full max-w-[200px] text-neutral-700">
                  <Link to="/gethelp">Setup a Call</Link>
                </button>
              </div>
            </div>
            <div
              className="absolute inset-0 w-full h-full z-10"
              id="ctaGradient"
            ></div>
            <div className="absolute inset-0 w-full h-full z-0 bg-black">
              <img
                src="/private.JPG"
                alt="private training"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TrainingPage;
