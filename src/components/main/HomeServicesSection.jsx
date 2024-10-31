import React from "react";
import ServicesBoxSquare from "./ServicesBoxSquare";
import privateImg from "../../assets/coaSquare.webp";
import openGroupImg from "../../assets/trilogy-poles-square.webp";
import smallGroupImg from "../../assets/small-trilogy.webp";

function HomeServicesSection() {
  const openInNewTab = (path) => {
    window.open(path, "_blank");
  };
  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center gap-10">
      <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
        our services
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-12">
        <ServicesBoxSquare
          title="Open Group Training"
          buttonTitle={"Register now"}
          img={openGroupImg}
          imgLink={"/training#program1"}
          action={() =>
            openInNewTab("https://trilogytoei.setmore.com/#classes")
          }
        />
        <ServicesBoxSquare
          title="Private Mentorship"
          buttonTitle={"Apply now"}
          imgLink={"/training#program2"}
          img={privateImg}
          action={() =>
            openInNewTab(
              "https://docs.google.com/forms/d/e/1FAIpQLSckSWoPR8wbdfO5V8wSpVr0hFU9qTfqUcA-ExQXG1hX6rQHjQ/viewform"
            )
          }
        />
        <ServicesBoxSquare
          title="Small Privates"
          buttonTitle={"Book now"}
          img={smallGroupImg}
          imgLink={"/training#program3"}
          action={() => openInNewTab("https://trilogytoei.setmore.com/book")}
        />
      </div>
    </div>
  );
}

export default HomeServicesSection;
