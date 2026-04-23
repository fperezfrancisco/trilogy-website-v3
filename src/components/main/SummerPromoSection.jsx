import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SUMMER_REGISTER_URL = "https://forms.gle/dJWKh3fRhyr3zriS7";

function SummerPromoSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full px-4 md:px-8 pt-8 md:pt-12 pb-12 md:pb-14 ${
        isInView ? "summerPromoVisible" : "summerPromoHidden"
      }`}
    >
      <div className="summerPromoReveal w-full rounded-2xl overflow-hidden border border-blue-200/70 bg-gradient-to-br from-[#eef4ff] via-white to-[#dbe9ff] shadow-[0_18px_60px_rgba(21,93,252,0.15)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="summerPromoArt relative min-h-[320px] md:min-h-[420px] lg:min-h-[480px] overflow-hidden">
            <img
              src="/summer/Sebi-Dribble.JPG"
              alt="Summer 2026 soccer training program"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto">
              <div className="inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-[0.8rem] font-semibold text-blue-600 shadow-md">
                Summer 2026 Enrollment Open
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-[0.75rem] md:text-[0.82rem] uppercase tracking-[0.2em] font-semibold text-blue-600">
              New Programs Added
            </p>
            <h2 className="mt-3 text-[1.9rem] md:text-[2.4rem] lg:text-[2.7rem] leading-[1.05] font-semibold text-[#1e1e1e]">
              Summer 2026 programs are here. Spots are limited.
            </h2>

            <p className="mt-4 text-neutral-600 leading-7 max-w-[620px]">
              Our preseason weeks, positional camp, and Skillz camp are now open
              for registration. Join early to secure tiered pricing before the
              next increase and lock in your player’s summer development.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs md:text-sm font-semibold text-red-600">
                Limited spots per group
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs md:text-sm font-semibold text-amber-700">
                Pricing increases by tier date
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/summer"
                className="inline-flex items-center justify-center rounded-xl bg-[#1e1e1e] px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-black transition-colors duration-200"
              >
                Learn More
              </Link>
              <a
                href={SUMMER_REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-blue-400 transition-colors duration-200"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummerPromoSection;
