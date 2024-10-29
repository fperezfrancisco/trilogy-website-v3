import React from "react";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import CtaSection from "../components/cta/CtaSection";
import HeroSectionMiddle from "../components/main/HeroSectionMiddle";
import eliteImgLarge from "../assets/elite-group-min.png";
import ContactForm from "../components/forms/ContactForm";

function ContactPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <HeroSectionMiddle
          mainTitle={"Contact Us"}
          subheading={
            "For any sort of inquiry, please fill out the form and we will get back to you as soon as possible. Thank you!"
          }
          heroImg={eliteImgLarge}
        />
        <div className="w-full py-6 px-4 md:px-8 flex flex-col">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
