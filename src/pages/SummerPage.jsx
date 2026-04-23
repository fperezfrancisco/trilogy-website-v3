import { Link } from "react-router-dom";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import HomeReviewSection from "../components/main/HomeReviewSection";
import SummerProgramsSection from "../components/main/SummerProgramsSection";

const SUMMER_REGISTER_URL = "https://forms.gle/dJWKh3fRhyr3zriS7";

function SummerPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <section className="w-full px-4 md:px-8 pt-6 pb-10 md:pt-8 md:pb-14">
          <div className="w-full rounded-2xl overflow-hidden relative bg-neutral-200 aspect-[4/5] min-[425px]:aspect-video max-h-[620px]">
            <img
              src="/summer/Sebi-Dribble.JPG"
              alt="Trilogy Soccer Summer Camps and Programs 2026"
              className="w-full h-full object-cover"
            />

            <div className="hidden min-[900px]:block absolute w-full min-[900px]:max-w-[520px] min-[1200px]:max-w-[700px] right-0 bottom-0 rounded-tl-2xl bg-white p-6 md:p-8 lg:p-10">
              <p className="hidden min-[900px]:block min-[1400px]:hidden uppercase text-blue-500 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-none tracking-[0.04em]">
                SUMMER 2026
              </p>

              <div className="hidden min-[1400px]:block">
                <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-blue-500 font-semibold">
                  Summer 2026
                </p>
                <h1 className="text-[#1e1e1e] text-[1.8rem] sm:text-[2.1rem] md:text-[2.6rem] lg:text-[3rem] leading-[0.98] font-semibold mt-2">
                  Trilogy Summer Camps & Programs
                </h1>
                <p className="mt-4 text-neutral-600 text-[0.95rem] md:text-[1rem] leading-7 max-w-[620px]">
                  Preseason weeks, positional training, and technical camps to
                  keep players developing all summer. Register early to lock in
                  your tier pricing and reserve your spot.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={SUMMER_REGISTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-blue-400 transition-colors duration-200"
                >
                  Register Now
                </a>
                <a
                  href="#summer-programs"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm md:text-base font-semibold text-[#1e1e1e] hover:bg-neutral-100 transition-colors duration-200"
                >
                  View Program Details
                </a>
              </div>
            </div>
          </div>

          <div className="min-[900px]:hidden w-full rounded-b-2xl bg-white p-6">
            <p className="uppercase tracking-[0.2em] text-xs text-blue-500 font-semibold">
              Summer 2026
            </p>
            <h1 className="text-[#1e1e1e] text-[1.8rem] sm:text-[2.1rem] leading-[0.98] font-semibold mt-2">
              Trilogy Summer Camps & Programs
            </h1>
            <p className="mt-4 text-neutral-600 text-[0.95rem] leading-7 max-w-[620px]">
              Preseason weeks, positional training, and technical camps to keep
              players developing all summer. Register early to lock in your tier
              pricing and reserve your spot.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SUMMER_REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-colors duration-200"
              >
                Register Now
              </a>
              <a
                href="#summer-programs"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-[#1e1e1e] hover:bg-neutral-100 transition-colors duration-200"
              >
                View Program Details
              </a>
            </div>
          </div>
        </section>

        <SummerProgramsSection registerUrl={SUMMER_REGISTER_URL} />

        <HomeReviewSection />

        <section className="w-full px-4 md:px-8 pb-16 md:pb-20">
          <div className="w-full max-w-[1200px] mx-auto rounded-2xl bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] px-6 py-10 md:px-12 md:py-14 text-white">
            <p className="uppercase tracking-[0.18em] text-blue-100 text-xs sm:text-sm font-semibold">
              Ready To Join?
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.6rem] font-semibold leading-tight mt-2">
              Register for Summer Camps or get help choosing the right program.
            </h2>
            <p className="text-white/90 mt-4 max-w-[760px] leading-7">
              We can help you find the best fit based on age, current level, and
              goals for the season. Reach out to our team or secure your summer
              spot now.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SUMMER_REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Register With Google Form
              </a>
              <Link
                to="/gethelp"
                className="inline-flex items-center justify-center rounded-xl border border-white/45 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                Contact Us For Help
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SummerPage;
