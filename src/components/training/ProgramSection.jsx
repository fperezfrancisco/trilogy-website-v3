import React, { useEffect } from "react";
import ProgramBox from "./ProgramBox";
import { useLocation } from "react-router-dom";
//import mentorshipImg from "../../assets/coa-speed-2.jpg";

function ProgramSection() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  const programList = [
    {
      id: 1,
      title: "Open Group Training",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla donec egestas non felis nibh vulputate pulvinar massa. Cursus eu adipiscing eros sed massa eu. Tellus sed rutrum eros nibh mi mauris. Etiam etiam adipiscing urna purus.",
      bullets: [
        "Open to players ages 7+",
        "prodigy, club, and elite levels available",
        "limited memberships available",
      ],
      primaryBtn: {
        title: "Register Now",
        type: "secondary",
      },
      secondaryBtn: {
        title: "Learn More",
        type: "other",
      },
    },
    {
      id: 2,
      title: "Private Mentorship Program",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla donec egestas non felis nibh vulputate pulvinar massa. Cursus eu adipiscing eros sed massa eu. Tellus sed rutrum eros nibh mi mauris. Etiam etiam adipiscing urna purus.",
      bullets: [
        "2, 4, or 8 monthly session plans",
        "Book up to 1 month in advance",
        "Personal Plan & Monthly check-ins",
        "Waiting list available",
      ],
      primaryBtn: {
        title: "Apply Now",
        type: "secondary",
      },
    },
    {
      id: 3,
      title: "Small Privates",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla donec egestas non felis nibh vulputate pulvinar massa. Cursus eu adipiscing eros sed massa eu. Tellus sed rutrum eros nibh mi mauris. Etiam etiam adipiscing urna purus.",
      bullets: [
        "Price per numbers of players in session",
        "Closed groups",
        "Waiting list available",
      ],
      primaryBtn: {
        title: "Book Now",
        type: "secondary",
      },
    },
  ];

  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center gap-10">
      <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
        Our Programs
      </h2>
      <div className="w-full flex flex-col gap-[5rem] items-center my-10">
        {programList &&
          programList.map((program) => (
            <ProgramBox program={program} key={program.id} />
          ))}
      </div>
    </div>
  );
}

export default ProgramSection;
