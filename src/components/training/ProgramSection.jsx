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
      title: "Prodigy Program",
      description:
        "6-week skill development program focused on building strong fundamentals in youth soccer athletes. Great for recreational players ages 5 - 8 looking to get started on their soccer journey or further their growth. No prior experience necessary.",
      bullets: [
        "Open to players ages 5-8",
        "$135 for the full 6-week program or $25 per drop-in session",
        "Fridays 4pm - 5pm",
        "First program starts Jan 19th, 2026",
        "Limited to 20 spots per group session",
      ],
      imgMain: openGroupImg,
      primaryBtn: {
        title: "Register Now",
        type: "secondary",
        action: () => openInNewTab("https://forms.gle/h9qHvqvkd2pd8TZ47"),
      },
      secondaryBtn: {
        title: "Learn More",
        action: () => openInNewTab("/prodigy"),
        type: "other",
      },
    },
    {
      id: 2,
      title: "Open Group Training",
      description:
        "Weekly small group training sessions focused on technical & tactical topics for competitive players looking to stay sharp without breaking the bank. Book in advanced or purchase a bundle for better savings.",
      bullets: [
        "60 minute training sessions available weekly.",
        "Intermediate/Club players ages 7 - 14. Limited spots available.",
        "Rotating technical and tactical themes each week.",
        "$35 per session or save with multi-session bundles.",
      ],
      imgMain: "/colton-group.JPG",
      primaryBtn: {
        title: "Register Now",
        type: "secondary",
        action: () => openInNewTab("https://trilogysoccer.setmore.com/book"),
      },
      secondaryBtn: {
        title: "Learn More",
        type: "other",
        action: () => openInNewTab("/opengroups"),
      },
    },
    {
      id: 3,
      title: "Elite Pods",
      description:
        "Brand new program that combines the benefits of personalized coaching with the energy and motivation of small group training. Elite Pods are perfect for players looking for focused development in a consitent and effective way. Limited Spots. Must apply and be accepted to join.",
      bullets: [
        "Weekly 75 minute training session with a 1-5 group.",
        "Pods consistent of players of similar, age, and commitment level.",
        "Schedule fixed monthly but can be adjusted depending on pod availability.",
        "Personalized feedback and development plans provided.",
        "Must apply and be accepted to join.",
      ],
      imgMain: "/mentorship.JPG",
      primaryBtn: {
        title: "Apply Now",
        type: "primary",
        action: () => openInNewTab("/eliteapplication"),
      },
      secondaryBtn: {
        title: "Learn More",
        type: "other",
        action: () => openInNewTab("/elitepods"),
      },
    },
    {
      id: 4,
      title: "Elite 1-1 Mentorship",
      description:
        "Private training enhanced & curated for highly committed players seeking to maximize their potential. Our Elite 1-1 Mentorship program offers personalized coaching, tailored development plans, and comprehensive support to help players reach their highest level. Must apply and be accepted to join. Monthly, quarterly, and annual plans only.",
      bullets: [
        "Weekly 60 minute private training session.",
        "Schedule fixed monthly but can be adjusted depending on pod availability.",
        "Personalized player plan and monthly tactical reviews.",
        "Must apply and be accepted to join.",
        "Players ages 10+ that are highly committed",
      ],
      imgMain: "/private.JPG",
      primaryBtn: {
        title: "Apply Now",
        type: "primary",
        action: () => openInNewTab("/eliteapplication"),
      },
      secondaryBtn: {
        title: "Learn More",
        type: "other",
        action: () => openInNewTab("/elitementorship"),
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
