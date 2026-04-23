/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SUMMER_PROGRAMS = [
  {
    date: "June 15 - June 19",
    title: "Preseason Program Week 1",
    details: "Ages 6-12 @ 8:00am - 10:00am | Ages 13+ @ 10:00am - 12:00pm",
  },
  {
    date: "June 22 - June 26",
    title: "Preseason Program Week 2",
    details: "Ages 6-12 @ 8:00am - 10:00am | Ages 13+ @ 10:00am - 12:00pm",
  },
  {
    date: "June 29 - July 3",
    title: "Preseason Program Week 3",
    details: "Ages 6-12 @ 8:00am - 10:00am | Ages 13+ @ 10:00am - 12:00pm",
  },
  {
    date: "July 6 - July 10",
    title: "Preseason Program Week 4",
    details: "Ages 6-12 @ 8:00am - 10:00am | Ages 13+ @ 10:00am - 12:00pm",
  },
  {
    date: "July 20 - July 23",
    title: "Summer Positional Camp",
    details:
      "Position-specific camp focused on defenders, midfielders, wingers, strikers, and goalkeepers.",
  },
  {
    date: "August 3 - August 6",
    title: "Trilogy Summer Skillz Camp",
    details:
      "Technical ball mastery, confidence, and key fundamentals before fall season.",
  },
];

const PRICING_NOTES = [
  "Tier 1 purchase before 5/4/2026",
  "Tier 2 purchase before 6/1/2026",
  "Tier 3 purchase on and after 6/1/2026",
];

function SummerProgramsSection({ registerUrl }) {
  return (
    <section
      id="summer-programs"
      className="w-full px-4 md:px-8 py-16 md:py-20"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-14">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-blue-600 font-semibold mb-3">
              Summer 2026 Programs
            </p>
            <h2 className="text-[1.8rem] md:text-[2.3rem] font-semibold leading-tight text-[#1e1e1e]">
              Build confidence, sharpen technique, and get game-ready all summer
              long.
            </h2>
            <p className="text-neutral-600 mt-4 leading-7">
              Our full summer lineup includes a 4-week preseason program plus
              focused specialty camps. Sessions are designed to challenge
              players with structured technical reps, game scenarios, and high
              quality coaching in a supportive environment.
            </p>

            <ul className="mt-6 flex flex-col gap-3 text-neutral-700">
              <li>
                <span className="font-semibold text-[#1e1e1e]">Location:</span>{" "}
                Santa Clarita, CA
              </li>
              <li>
                <span className="font-semibold text-[#1e1e1e]">Ages:</span> 6-12
                and 13+
              </li>
              <li>
                <span className="font-semibold text-[#1e1e1e]">Season:</span>{" "}
                June - August 2026
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={registerUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 text-white px-6 py-3 font-semibold hover:bg-blue-400 transition-colors duration-200"
              >
                Register For Summer
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 text-[#1e1e1e] px-6 py-3 font-medium hover:bg-neutral-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-[#111827] text-white p-6 md:p-8">
            <h3 className="text-[1.35rem] md:text-[1.6rem] font-semibold mb-5">
              Summer Schedule
            </h3>
            <div className="flex flex-col gap-5">
              {SUMMER_PROGRAMS.map((program) => (
                <div
                  key={program.title}
                  className="border-b border-white/15 pb-4"
                >
                  <p className="text-[#fde047] font-semibold">{program.date}</p>
                  <p className="text-[1.1rem] font-semibold mt-1">
                    {program.title}
                  </p>
                  <p className="text-sm text-white/75 mt-1 leading-6">
                    {program.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
          <h3 className="text-[1.45rem] md:text-[1.9rem] text-[#1e1e1e] font-semibold">
            Pricing Tiers And Bundles
          </h3>
          <p className="mt-3 text-neutral-600 leading-7 max-w-[900px]">
            Bundle savings are available when players join multiple summer
            programs. Tier pricing rewards early registration, and spots can
            fill quickly as dates approach.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {PRICING_NOTES.map((note) => (
              <p
                key={note}
                className="rounded-lg border border-blue-200 bg-blue-50 text-blue-700 px-3 py-2 text-sm font-medium"
              >
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-[1.45rem] md:text-[1.9rem] text-[#1e1e1e] font-semibold mb-5">
            Summer 2026 Flyers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((flyerNumber) => (
              <a
                key={flyerNumber}
                href={`/summer/${flyerNumber}.png`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={`/summer/${flyerNumber}.png`}
                  alt={`Summer 2026 flyer ${flyerNumber}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummerProgramsSection;
