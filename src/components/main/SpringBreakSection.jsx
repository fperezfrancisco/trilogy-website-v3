import React from "react";

const SpringBreakSection = ({ flyerSrc = "/spring-26.png" }) => {
  return (
    <section
      aria-labelledby="springbreak-title"
      className="w-full bg-white py-12"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 order-1 lg:order-1">
          <h2
            id="springbreak-title"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Spring Break Camp — April 6–9
          </h2>
          <p className="mb-4 text-gray-700">
            A four-day camp focused on technical foundations, small-sided games,
            and decision-making. Designed for players ages 6–12 who want to
            build confidence and sharpen fundamentals in a fun, supportive
            environment.
          </p>

          <ul className="mb-4 space-y-2 text-gray-700">
            <li>
              <strong>Who:</strong> Players ages 6–12
            </li>
            <li>
              <strong>When:</strong> April 6–9 — 8:00 AM to 10:00 AM
            </li>
            <li>
              <strong>Where:</strong> Bridgeport Park, Santa Clarita, CA
            </li>
            <li>
              <strong>Cost:</strong> $160 (before 3/25), $200 (after)
            </li>
          </ul>

          <p className="mb-6 text-gray-700">
            Limited spots available. All coaches are highly qualified and
            trained to provide age-appropriate instruction. Players are grouped
            by age and ability to maximize touches and learning. Please reach
            out if you have any questions or would like to learn more about the
            camp!
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://forms.gle/TaKpKdYk8HPDxao27"
              target="_blank"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Register for Spring Break Camp"
            >
              Register
            </a>

            <a
              href="/contact"
              className="inline-block border border-gray-300 px-5 py-2 rounded-md text-gray-700"
              aria-label="Contact for Spring Break Camp"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 order-2 lg:order-2 flex justify-center">
          <img
            src={flyerSrc}
            alt="Spring Break Camp flyer"
            className="w-full max-w-[420px] h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpringBreakSection;
