import React from "react";
import ReviewBox from "../reviews/ReviewBox";
import reviewImg from "../../assets/trilogy-reviews-min.webp";

function HomeReviewSection() {
  const reviewsList = [
    {
      author: "Jen Misaki",
      stars: 5,
      text: "Exactly how your athlete needs to be training on the side. Outstanding group & individual trainings.",
      playerInfo: "Kai LAFC B2014 Gold",
      date: "Tue 15 Aug 2023",
    },
    {
      author: "Chris Neal",
      stars: 5,
      text: "The training for Trilogy is top notch. My daughter and her teammates love coming every time. The exercises keep players engaged, and wanting to do more.",
      playerInfo: "Ava LAFC G2009 Black",
      date: "Mon Oct 09 2023",
    },

    {
      author: "Amanda H.",
      stars: 5,
      text: "My son has been doing privates, semi privates and camps with Trilogy for a year and a half. 10/10 reccomend - there are such a great variety of options available to meet the needs of any player.",
      playerInfo: "Maverick LAFC B2016 Gold",
      date: "Mon 17 Jun 2024",
    },
    {
      author: "Oxana Hus",
      stars: 5,
      text: "My kids absolutely love this trainings. It gives them such great confidence and always want to do more. Thank You Coach!",
      playerInfo: "Tudor LAFC B2014 Black",
      date: "Mon 30 Sep 2024",
    },
    {
      author: "Beckham Rishko",
      stars: 5,
      text: "Coach Francisco is always prepared and lays out the objectives for his players to meet, making his expectations and goals clear for even the youngest players to comprehend. Trilogy builds strength in players both mentally and physically. Each session provides a motivating and challenging environment that pushes players to improve. If you’re looking for quality training, our family highly recommends Trilogy!",
      playerInfo: "Beckham LAFC B2016 Gold",
      date: "Wed 22 May 2024",
    },
    {
      author: "C. Vincent",
      stars: 5,
      text: "I highly recommend Coach Francisco! He has a deep understanding of soccer and a genuine passion for helping young athletes improve. My son enhanced his ball control and tactical awareness through tailored drills that kept him engaged. What sets Coach Francisco apart is his ability to connect with the kids, fostering a positive environment that encourages teamwork and love for the game. His impact on my son’s soccer journey has been significant. If you’re looking for an effective youth soccer coach, Coach Francisco is the best choice!",
      playerInfo: "Coa LAFC B2014 Gold",
      date: "Wed 23 Oct 2024",
    },
  ];

  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center lg:flex-row lg:items-start justify-center gap-12">
      <div className="aspect-[4/5] w-full max-w-[450px] flex bg-neutral-300 rounded-2xl overflow-hidden">
        {true && <img src={reviewImg} className="object-cover w-full" alt="" />}
      </div>
      <div className="sectionCopy w-full max-w-[650px] flex flex-col items-center lg:items-start">
        <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
          building an elite community
        </h2>
        <p className="my-3 text-sm sm:text-[1rem] text-center lg:text-left text-neutral-500">
          Let's show you what people have said about us!
        </p>
        <div className="py-3 flex flex-wrap justify-center  w-full gap-3">
          {reviewsList &&
            reviewsList.map((review) => (
              <ReviewBox
                stars={review.stars}
                author={review.author}
                text={review.text}
                playerInfo={review.playerInfo}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomeReviewSection;
