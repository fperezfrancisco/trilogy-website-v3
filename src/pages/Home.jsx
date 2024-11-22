import React from "react";
import Header from "../components/nav/Header";
import HeroSectionMain from "../components/main/HeroSectionMain";
import HomeReviewSection from "../components/main/HomeReviewSection";
import HomeAboutSection from "../components/main/HomeAboutSection";
import Footer from "../components/footer/Footer";
import CtaSection from "../components/cta/CtaSection";
import HomeServicesSection from "../components/main/HomeServicesSection";
import AdvertisementSectionHome from "../components/main/AdvertisementSectionHome";

function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionMain />
        <AdvertisementSectionHome />
        <HomeReviewSection />
        <HomeAboutSection />
        <HomeServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
