import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import PricingSection from "../../components/programs/PricingSection";
import Header from "../../components/nav/Header";
import { BiCalendar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TbSoccerField } from "react-icons/tb";
import { LineChart, Map, Trophy, TvMinimalPlay } from "lucide-react";

const HeroSlideshow = () => {
  const images = ["/pods-1.JPG", "/pods-2.JPG", "/pods-3.JPG"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        // Add longer delay when looping back to first image
        if (nextIndex === 0) {
          setTimeout(() => {}, 1000);
        }
        return nextIndex;
      });
    }, 3000); // 3 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Elite training ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      ))}
    </div>
  );
};

const FeatureBox = ({ title, description, icon }) => {
  return (
    <div className="w-full h-full  border border-neutral-400 rounded-lg p-4 flex flex-col items-start gap-2">
      <div className="flex items-start">
        {icon ? icon : <BiCalendar className="size-[24px]" />}
      </div>
      <div className="flex flex-col gap-0 items-start">
        <h3 className="text-lg font-semibold">{title ? title : "Feature"}</h3>
        <p className="text-sm lg:text-base text-neutral-700 leading-tight">
          {description ? description : "Description"}
        </p>
      </div>
    </div>
  );
};

const ElitePodsPage = () => {
  const featureList = [
    {
      title: "Weekly Training",
      description:
        "75 Minute 1-5 training once a week at a dedicated time that is consistent. Sessions specific to player pod needs.",
      icon: <TbSoccerField className="size-[24px]" />,
    },

    {
      title: "Individual Player Plan",
      description:
        "Together, we will setup an individual player plan that leads to clarity and result-oriented training.",
      icon: <Map className="size-[24px]" />,
    },
    {
      title: "Monthly Tactical Video Analysis",
      icon: <TvMinimalPlay className="size-[24px]" />,
      description:
        "We will review individual game footage or positional clips to help improve vision and in-game decision making.",
    },
    {
      title: "Development Tracking",
      icon: <LineChart className="size-[24px]" />,
      description:
        "We’ll help make development tangible by tracking key individual metrics to improve training and progressive overload.",
    },
    {
      title: "Monthly Player Check-Ins",
      icon: <BiCalendar className="size-[24px]" />,
      description:
        "Once a month, you’ll have the opportunity to check-in to discuss your player track, adjust as needed, and keep progressing.",
    },
    {
      title: "Future-Proof Results",
      icon: <Trophy className="size-[24px]" />,
      description:
        "On this track, results will be consistent and the foundation will be set for many years to come -- saving time & money.",
    },
  ];

  const pricingPlans = [
    {
      title: "Basic Plan",
      pricing: {
        Monthly: {
          price: 250,
          period: "month",
          billingInfo: "Billed monthly",
        },
        Quarterly: {
          price: 700,
          period: "quarter",
          billingInfo: "Save $50 - Billed every 3 months",
        },
        Annually: {
          price: 2000,
          period: "year",
          billingInfo: "Save $1,000 - Billed annually.",
        },
      },
      features: [
        "Weekly 75 minute 1-5 training sessions",
        "Monthly Player Check-Ins",
        "Tactical Video Analysis",
        "Individual Player Plan",
        "10% Discount on Additional Training Sessions",
        "2 Training Shirts Included",
      ],
      ctaText: "Select Plan",
      ctaLink: "/eliteapplication",
      featured: false,
    },
    {
      title: "Premium Plan - Pods & 1-1 Combo",
      pricing: {
        Monthly: {
          price: 500,
          period: "month",
          billingInfo: "Billed monthly",
        },
        Quarterly: {
          price: 1400,
          period: "quarter",
          billingInfo: "Save $50 - Billed every 3 months",
        },
        Annually: {
          price: 3500,
          period: "year",
          billingInfo: "Save $1,000 - Billed annually.",
        },
      },
      features: [
        "Weekly 75 minute 1-5 training sessions & 60 Minute 1-1 session",
        "Monthly Player Check-Ins",
        "Tactical Video Analysis",
        "Individual Player Plan",
        "15% Discount on Additional Training Sessions",
        "4 Training Shirts Included",
      ],
      ctaText: "Select Plan",
      ctaLink: "/eliteapplication",
      featured: true,
    },
  ];

  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto mt-[0px] h-full min-h-[700px] overflow-x-hidden p-4 md:p-8 flex flex-col items-center justify-center min-[800px]:flex-row min-[800px]:items-center md:justify-start relative">
          <div className="flex flex-col items-center text-center min-[800px]:items-start min-[800px]:text-left w-full min-[800px]:w-1/2 min-[800px]:max-w-[600px] p-0 min-[800px]:py-4 min-[800px]:relative min-[800px]:z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight mb-4 tracking-[-2px]">
              Elite <span className="text-blue-500">Mentorship</span> Pods.
            </h1>
            <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%]">
              Train alongside committed, like-minded players in a structured
              mentorship environment designed to accelerate technical, tactical,
              and physical development. Limited elite spots available.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 w-full justify-center min-[800px]:justify-start">
              <Link
                to="/eliteapplication"
                className="p-4 bg-blue-500 hover:bg-blue-700 rounded-lg w-full max-w-[200px] text-white text-center"
              >
                Sign Up
              </Link>
              <button className="p-4 bg-neutral-300 hover:bg-neutral-400 rounded-lg w-full max-w-[200px] text-neutral-700">
                <Link to="/gethelp">Get Help</Link>
              </button>
            </div>
          </div>
          <div className="aspect-[5/3] overflow-hidden rounded-2xl w-full max-w-[500px] mt-8 h-auto bg-black min-[800px]:absolute min-[800px]:right-[-100px] min-[800px]:top-1/2 min-[800px]:transform min-[800px]:-translate-y-1/2 min-[800px]:w-2/3 min-[800px]:max-w-[800px] min-[800px]:mt-0 min-[800px]:z-0">
            <HeroSlideshow />
          </div>
        </section>
        <section className="w-full max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col items-center ">
          <div className="w-full max-w-[800px] flex-col flex items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold italic tracking-[-2px] leading-tight mb-4">
              A Small-Group Mentorship Environment That{" "}
              <span className="text-blue-500">Demands More</span>.
            </h2>
            <p className="text-base tracking-[-0.5px] leading-tight">
              Elite Mentorship Pods are a small-group, high-performance training
              environment designed for competitive players who thrive on
              accountability and competition. This program blends the
              personalized structure of mentorship training with the added
              benefits of training alongside like-minded players of similar age
              and ability. Athletes train in capped pods of up to five players,
              ensuring focused coaching attention while creating game-realistic
              pressure and intensity. Weekly 75-minute sessions emphasize
              technical execution, tactical understanding, and physical demands
              at a higher level than traditional group training. Each player
              receives an individual development plan, ongoing progress
              tracking, and quarterly evaluations to ensure consistent growth.
              Elite Mentorship Pods offer a premium development experience at a
              more accessible price point than private training, without
              sacrificing quality or intent.
            </p>
          </div>
          <div className="aspect-video w-full rounded-2xl bg-neutral-200 max-w-[800px] mt-8"></div>
        </section>
        <section className="w-full max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col items-center ">
          <div className="w-full max-w-[800px] flex-col flex items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold italic tracking-[-2px] leading-tight mb-4">
              Features & Benefits.
            </h2>
            <p className="text-base tracking-[-0.5px] leading-tight">
              What you can expect from the Elite Mentorship Pods Program:
            </p>
          </div>
          <div className="w-full grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8 justify-center items-start max-w-[1000px]">
            {featureList.map((feature, index) => (
              <FeatureBox
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </section>
        <section className="w-full max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col md:flex-row items-center md:items-start md:flex-start gap-8">
          <div className="w-full max-w-[600px] flex-col flex items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold italic tracking-[-2px] leading-tight mb-4">
              How it Works.
            </h2>
            <p className="text-base tracking-[-0.5px] leading-tight">
              All the steps to get started with the Elite Mentorship Pods
              Program:
            </p>
            <div className="mt-8 aspect-square bg-neutral-200 rounded-2xl w-full overflow-hidden">
              <img
                src="/liam-fitness.JPG"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-4 mt-4">
            <div className="flex items-start gap-4 w-full">
              <div className="size-[32px] rounded-full flex items-center justify-center bg-blue-500 text-white">
                <p className="text-lg font-bold">1</p>
              </div>
              <div className="flex flex-col items-start w-full">
                <h3 className="text-2xl md:text-3xl font-semibold italic tracking-[-0.5px] leading-tight">
                  Fill out Application
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-tight">
                  Fill out our Elite Pods application to initiate the process.
                  We will need important contact information, desired training
                  frequency, and player background.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="size-[32px] rounded-full flex items-center justify-center bg-blue-500 text-white">
                <p className="text-lg font-bold">2</p>
              </div>
              <div className="flex flex-col items-start w-full">
                <h3 className="text-2xl md:text-3xl font-semibold italic tracking-[-0.5px] leading-tight">
                  We Review & Follow Up
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-tight">
                  After the application is submitted, our team will review the
                  form and follow up with any necessary questions or
                  instructions. At this step, we will approve or suggest more
                  appropriate training programs. If approved, we finalize any
                  payment, scheduling, & final form completion at this step.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="size-[32px] rounded-full flex items-center justify-center bg-blue-500 text-white">
                <p className="text-lg font-bold">3</p>
              </div>
              <div className="flex flex-col items-start w-full">
                <h3 className="text-2xl md:text-3xl font-semibold italic tracking-[-0.5px] leading-tight">
                  Initial Evaluation
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-tight">
                  We will conduct a first evaluation (if needed) to get an
                  up-close look at the player’s individual baseline skill set in
                  each phase of the game - technical, tactical, physical, and
                  mental. This can be either individually or in a small group.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="size-[32px] rounded-full flex items-center justify-center bg-blue-500 text-white">
                <p className="text-lg font-bold">4</p>
              </div>
              <div className="flex flex-col items-start w-full">
                <h3 className="text-2xl md:text-3xl font-semibold italic tracking-[-0.5px] leading-tight">
                  Start Training Plan
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-tight">
                  Finally, we begin to train consistently with the Elite Pod
                  Group. Each month, player & parent are encouraged to setup a
                  check-in time as well as tactical analysis review.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PricingSection
          title="Pricing Plans"
          subtitle="Choose Your Plan"
          billingOptions={["Monthly", "Quarterly", "Annually"]}
          defaultBilling="Monthly"
          plans={pricingPlans}
        />
        <section className="w-full  max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col md:flex-row items-center md:items-start md:flex-start gap-8">
          <div className=" w-full h-full min-h-[500px] flex relative overflow-hidden p-4 md:p-8 flex-col justify-center md:justify-normal md:flex-row items-center gap-8 rounded-2xl ">
            <div className="z-50 flex flex-col items-center md:items-start text-center justify-center md:justify-normal md:text-left text-white max-w-[800px] w-full h-full md:w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight mb-4 tracking-[-2px]">
                Ready to take your game to the next level?
              </h1>
              <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%]">
                Start training with us or set up a call so that we can get you
                started on the best development plan right away. Limited
                Mentorship Pods available.
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
};

export default ElitePodsPage;
