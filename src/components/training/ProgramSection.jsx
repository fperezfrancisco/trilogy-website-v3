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
        "Mondays and Fridays 4pm - 5pm",
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
      title: "Skill Development",
      description:
        "The best way to keep your skills sharp consistently & see long-term improvement. Our skill development program offers players structured, regular training that sharpens technical skill mastery, speed & conditoining, and tactical application week after week.",
      bullets: [
        "Small Group training sessions - Limited spots available.",
        "Perfect for club/competitive players ages 8 - 14",
        "Weekly sessions available - Monday - Thursday evenings",
        "90 minute sessions - covering technical, physical, and tactical development",
      ],
      imgMain: privateImg,
      primaryBtn: {
        title: "Register Now",
        type: "secondary",
        action: () =>
          openInNewTab(
            "https://docs.google.com/forms/d/e/1FAIpQLSckSWoPR8wbdfO5V8wSpVr0hFU9qTfqUcA-ExQXG1hX6rQHjQ/viewform"
          ),
      },
      secondaryBtn: {
        title: "Learn More",
        type: "other",
      },
    },
    {
      id: 3,
      title: "Private Training",
      description:
        "One-on-one training sessions tailored to the individual needs of each player or private small groups ranging between 2 - 8 players. Focus on specific areas of improvement, receive personalized feedback, and accelerate your development with dedicated attention from our experienced coaches.",
      bullets: [
        "Limited availability & priority to players committed to long-term plans",
        "4, 8, and 12 sessions plans available.",
        "Must contact us to schedule your first evaluation session.",
      ],
      imgMain: "/private.JPG",
      primaryBtn: {
        title: "Contact Us",
        type: "secondary",
        action: () => openInNewTab("/contact"),
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
