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
    <div className="w-full py-[6rem] md:py-[6rem] lg:py-[8rem] px-4 md:px-8 flex flex-col items-center gap-10">
      <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
        our services
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 max-w-[1200px] mx-auto">
        <ServicesBoxSquare
          title="Progidy Program"
          buttonTitle={"Register now"}
          img={openGroupImg}
          imgLink={"/training#program1"}
          action={() =>
            openInNewTab("https://trilogytoei.setmore.com/#classes")
          }
        />
        <ServicesBoxSquare
          title="Open Group Sessions"
          buttonTitle={"Book now"}
          imgLink={"/training#program2"}
          img={"/colton-group.JPG"}
          action={() =>
            openInNewTab(
              "https://docs.google.com/forms/d/e/1FAIpQLSckSWoPR8wbdfO5V8wSpVr0hFU9qTfqUcA-ExQXG1hX6rQHjQ/viewform"
            )
          }
        />

        <ServicesBoxSquare
          title="Elite Pods"
          buttonTitle={"Book now"}
          img={"/pods-1.JPG"}
          imgLink={"/training#program3"}
          action={() => openInNewTab("https://trilogytoei.setmore.com/book")}
        />
        <ServicesBoxSquare
          title="Elite Mentorship"
          buttonTitle={"Book now"}
          img={"/private-1.JPG"}
          imgLink={"/training#program4"}
          action={() => openInNewTab("https://trilogytoei.setmore.com/book")}
        />
      </div>
    </div>
  );
}

export default HomeServicesSection;
