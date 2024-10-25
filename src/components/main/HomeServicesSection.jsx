import React from "react";
import ServicesBoxSquare from "./ServicesBoxSquare";
//import privateImg from "../../assets/coaSquare.jpg";

function HomeServicesSection() {
  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center gap-10">
      <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
        our services
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-12">
        <ServicesBoxSquare
          title="Open Group Training"
          buttonTitle={"Register now"}
        />
        <ServicesBoxSquare
          title="Private Mentorship"
          buttonTitle={"Apply now"}
          imgLink={"/training#program2"}
        />
        <ServicesBoxSquare title="Small Privates" buttonTitle={"Book now"} />
      </div>
    </div>
  );
}

export default HomeServicesSection;
