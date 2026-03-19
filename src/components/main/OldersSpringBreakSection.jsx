import React from "react";

const OldersSpringBreakSection = ({ flyerSrc = "/spring-26.png" }) => {
  return (
    <section
      aria-labelledby="olders-spring-title"
      className="w-full bg-white py-12"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2
            id="olders-spring-title"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Olders Spring Break Camp — Inquiry
          </h2>

          <p className="mb-4 text-gray-700">
            Opportunities for 8th–12th graders to get quality training this
            spring. April 6–9, morning times TBD. This four-day program is
            focused on technical skills, small-sided positional games, and
            speed/endurance training — ideal preparation for upcoming
            spring/summer tournaments.
          </p>

          <ul className="mb-4 space-y-2 text-gray-700">
            <li>
              <strong>Who:</strong> Players in grades 8–12
            </li>
            <li>
              <strong>When:</strong> April 6–9 — mornings (time TBD)
            </li>
            <li>
              <strong>Where:</strong> Bridgeport Park, Santa Clarita, CA
            </li>
            <li>
              <strong>Cost:</strong> $160
            </li>
            <li>
              <strong>Referral:</strong> For every 3 players referred, $20 off
              registration
            </li>
          </ul>

          <p className="mb-6 text-gray-700">
            We are currently collecting inquiries to gauge interest. Please fill
            out the inquiry form and we will follow up with next steps to
            complete registration if there is enough demand.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://forms.gle/azs3bRkWVUgGDPPs6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Inquiry for Olders Spring Break Camp"
            >
              Inquiry Form
            </a>

            <a
              href="/contact"
              className="inline-block border border-gray-300 px-5 py-2 rounded-md text-gray-700"
              aria-label="Contact for Olders Spring Break Camp"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
          <img
            src={flyerSrc}
            alt="Olders Spring Break Camp flyer"
            className="w-full max-w-[420px] h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OldersSpringBreakSection;
