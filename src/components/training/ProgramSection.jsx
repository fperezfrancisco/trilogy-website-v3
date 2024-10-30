import React, { useEffect } from "react";
import ProgramBox from "./ProgramBox";
import { useLocation, useNavigate } from "react-router-dom";
//import mentorshipImg from "../../assets/coa-speed-2.jpg";
import openGroupImg from "../../assets/trilogy-poles-square.webp";
import privateImg from "../../assets/coaSquare.webp";
import smallGroup from "../../assets/small-trilogy.webp";

function ProgramSection() {
  //const navigate = useNavigate();
  const openInNewTab = (path) => {
    window.open(path, "_blank");
  };
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
        "Weekly group session to continue developing your skills & technique. Must register through our website to ensure spot as group size is limited. Location will be disclosed via email & text upon registering.",
      bullets: [
        "Open to players ages 7+",
        "$35 per session (we do offer packs for more savings)",
        "Limited to 10 spots per group session",
      ],
      imgMain: openGroupImg,
      primaryBtn: {
        title: "Register Now",
        type: "secondary",
        action: () => openInNewTab("https://trilogytoei.setmore.com/#classes"),
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
        "More in depth training with 1-1 coaching & cultivated sessions for more rapid improvement. Must apply & only few are selected. Must be 11+ to be considered.",
      bullets: [
        "3 month minimum commitment",
        "3, 4, or 8 sessions per month packs",
        "Personal Plan & Monthly check-ins",
        "Waiting list available",
      ],
      imgMain: privateImg,
      primaryBtn: {
        title: "Apply Now",
        type: "secondary",
        action: () =>
          openInNewTab(
            "https://docs.google.com/forms/d/e/1FAIpQLSckSWoPR8wbdfO5V8wSpVr0hFU9qTfqUcA-ExQXG1hX6rQHjQ/viewform"
          ),
      },
    },
    {
      id: 3,
      title: "Small Privates",
      description:
        "The perks of private training but with the ability to share the costs with friends or teammates. We offer the ability to train in small groups ranging from 2-8 players. Price varies per group size.",
      bullets: [
        "Price per numbers of players in session",
        "Closed groups",
        "Price is total per session",
      ],
      imgMain: smallGroup,
      primaryBtn: {
        title: "Book Now",
        type: "secondary",
        action: () => openInNewTab("https://trilogytoei.setmore.com/book"),
      },
    },
  ];

  return (
    <div className="w-full py-8 sm:py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center gap-3 sm:gap-10">
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
