import React from "react";
import Header from "../../components/nav/Header";
import { Link } from "react-router-dom";
import { Check, Clock, AlertCircle } from "lucide-react";

const OpenGroupsPage = () => {
  const bundles = [
    {
      title: "4-Session Pack",
      price: 135,
      originalPrice: 140,
      savings: 5,
      sessions: 4,
      timeLimit: "6 weeks",
      pricePerSession: "$33.75",
      stripeLink: "https://buy.stripe.com/cNi6oIesf0mE04s2q07ss01", // Add your Stripe Payment Link here
      features: [
        "4 Open Group Training Sessions",
        "Valid for 6 weeks from purchase",
        "Access to age-appropriate groups",
        "Priority booking over non-bundle players",
        "No roll-overs after deadline",
        "8-hour cancellation notice required",
      ],
      featured: false,
    },
    {
      title: "8-Session Pack",
      price: 250,
      originalPrice: 280,
      savings: 30,
      sessions: 8,
      timeLimit: "10 weeks",
      pricePerSession: "$31.25",
      stripeLink: "https://buy.stripe.com/6oU7sMck72uMg3q6Gg7ss02", // Add your Stripe Payment Link here
      features: [
        "8 Open Group Training Sessions",
        "Valid for 10 weeks from purchase",
        "Access to age-appropriate groups",
        "Priority booking over non-bundle players",
        "No roll-overs after deadline",
        "8-hour cancellation notice required",
      ],
      featured: true,
    },
    {
      title: "12-Session Pack",
      price: 350,
      originalPrice: 420,
      savings: 70,
      sessions: 12,
      timeLimit: "14 weeks",
      pricePerSession: "$29.17",
      stripeLink: "https://buy.stripe.com/5kQ6oIfwj5GY3gE8Oo7ss03", // Add your Stripe Payment Link here
      features: [
        "12 Open Group Training Sessions",
        "Valid for 14 weeks from purchase",
        "Access to age-appropriate groups",
        "Priority booking over non-bundle players",
        "No roll-overs after deadline",
        "8-hour cancellation notice required",
      ],
      featured: false,
    },
  ];

  const handlePurchase = (stripeLink) => {
    if (stripeLink && stripeLink !== "YOUR_STRIPE_LINK_HERE") {
      window.open(stripeLink, "_blank");
    } else {
      alert(
        "Stripe payment link not configured yet. Please add your Stripe Payment Link."
      );
    }
  };

  const scrollToBundles = () => {
    const bundlesSection = document.getElementById("bundles-section");
    if (bundlesSection) {
      bundlesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto mt-[0px] h-full min-h-[700px] overflow-x-hidden p-4 md:p-8 flex flex-col items-center justify-center min-[800px]:flex-row min-[800px]:items-center md:justify-start relative">
          <div className="flex flex-col items-center text-center min-[800px]:items-start min-[800px]:text-left w-full min-[800px]:w-1/2 min-[800px]:max-w-[600px] p-0 min-[800px]:py-4 min-[800px]:relative min-[800px]:z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight mb-4 tracking-[-2px]">
              Trilogy <span className="text-blue-500">Open Group</span> Training
              Sessions.
            </h1>
            <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%]">
              Small group sessions focusing on various technical and tactical
              topics, keeping you sharp & focused. Open to all intermediate or
              club players ages 7 - 14. Limited spots per group.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 w-full justify-center min-[800px]:justify-start">
              <Link
                to="https://trilogysoccer.setmore.com/book"
                target="_blank"
                className="p-4 bg-blue-500 hover:bg-blue-700 rounded-lg w-full max-w-[200px] text-white text-center"
              >
                Book Now
              </Link>
              <button
                onClick={scrollToBundles}
                className="p-4 bg-neutral-300 hover:bg-neutral-400 rounded-lg w-full max-w-[200px] text-neutral-700"
              >
                View Bundles
              </button>
            </div>
          </div>
          <div className="aspect-[5/3] overflow-hidden rounded-2xl w-full max-w-[500px] mt-8 h-auto bg-black min-[800px]:absolute min-[800px]:right-[-100px] min-[800px]:top-1/2 min-[800px]:transform min-[800px]:-translate-y-1/2 min-[800px]:w-2/3 min-[800px]:max-w-[800px] min-[800px]:mt-0 min-[800px]:z-0">
            <img
              src="/colton-group.JPG"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="w-full max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col-reverse md:flex-row items-center md:flex-start gap-8">
          <div className="w-full max-w-[600px] flex-col flex items-center text-center md:items-start md:text-left">
            <div className="mt-8 aspect-square bg-neutral-200 rounded-2xl w-full overflow-hidden">
              <img
                src="/private.JPG"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-4 mt-4">
            <h2 className="text-3xl md:text-4xl font-semibold italic tracking-[-2px] leading-tight">
              High-Quality Training, at a{" "}
              <span className="text-blue-500">Great Value</span>.
            </h2>
            <p className="text-base tracking-[-0.5px] leading-tight max-w-[600px]">
              Our open group sessions are designed to provide top-tier training
              at an affordable price point while keeping group sizes small for
              better focus and repetition. Each session hones in on specific
              technical or tactical aspects of the game, ensuring players get
              targeted practice to elevate their skills. Perfect for players
              seeking extra touches on the ball, without breaking the bank.
            </p>
            <ul className="flex flex-col items-start pl-4 font-medium text-sm mt-4">
              <li className="flex items-center gap-2 p-2 bg-blue-50 rounded-xl mb-2">
                <Check className="w-5 h-5 text-blue-500" />
                Weekly 60 minute training sessions available (see schedule)
              </li>
              <li className="flex items-center gap-2 p-2 bg-blue-50 rounded-xl mb-2">
                <Check className="w-5 h-5 text-blue-500" />
                Boys & Girls Ages 7 - 10 capped at 12 Players
              </li>
              <li className="flex items-center gap-2 p-2 bg-blue-50 rounded-xl mb-2">
                <Check className="w-5 h-5 text-blue-500" />
                Boys & Girls Ages 11 - 14 capped at 12 Players
              </li>
              <li className="flex items-center gap-2 p-2 bg-blue-50 rounded-xl mb-2">
                <Check className="w-5 h-5 text-blue-500" />
                $35 per session or save with multi-session bundles
              </li>
              <li className="flex items-center gap-2 p-2 bg-blue-50 rounded-xl mb-2">
                <Check className="w-5 h-5 text-blue-500" />
                Training Location varies, communicated via email or sms day
                before sessions.
              </li>
            </ul>
          </div>
        </section>

        {/* Bundle Pricing Section */}
        <section
          id="bundles-section"
          className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold italic tracking-[-2px] leading-tight mb-4">
              Session Bundles & Pricing
            </h2>
            <p className="text-base tracking-[-0.5px] leading-tight max-w-[600px] mx-auto">
              Save money with our multi-session bundles. Perfect for committed
              players looking for consistent training.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-6 md:p-8 transition-all duration-200 hover:shadow-xl ${
                  bundle.featured
                    ? "border-blue-500 shadow-lg"
                    : "border-neutral-200 hover:border-blue-300"
                }`}
              >
                {/* Featured Badge */}
                {bundle.featured && (
                  <div className="absolute z-10 -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Best Value
                    </span>
                  </div>
                )}

                {/* Bundle Header */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-left">
                    {bundle.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 text-left mb-2">
                    <span className="text-4xl md:text-5xl font-bold">
                      ${bundle.price}
                    </span>
                    <span className="text-neutral-400 line-through text-lg">
                      ${bundle.originalPrice}
                    </span>
                  </div>

                  {/* Savings & Per Session */}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-green-600">
                      Save ${bundle.savings}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {bundle.pricePerSession} per session
                    </p>
                  </div>

                  {/* Time Limit Badge */}
                  <div className="mt-4 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg p-2">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span className="text-xs text-amber-700 font-medium">
                      Valid for {bundle.timeLimit}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-left"
                    >
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handlePurchase(bundle.stripeLink)}
                  className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    bundle.featured
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200"
                  }`}
                >
                  Purchase Bundle
                </button>
              </div>
            ))}
          </div>

          {/* Important Terms */}
          <div className="mt-12 max-w-[800px] mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  Important Bundle Terms
                </h4>
                <ul className="text-sm text-blue-800 space-y-1.5">
                  <li>• Bundles cannot be shared between players</li>
                  <li>
                    • No-shows without 8-hour notice count as used sessions
                  </li>
                  <li>
                    • Sessions expire after time limit - no roll-overs or
                    refunds
                  </li>
                  <li>
                    • Bundle holders get priority booking for group sessions
                  </li>
                  <li>• Time limit starts from date of purchase</li>
                  <li>• Reserve open group seats via online booking system</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  max-w-[1440px] mx-auto h-full p-4 md:py-[64px] md:px-8 flex flex-col md:flex-row items-center md:items-start md:flex-start gap-8">
          <div className=" w-full h-full min-h-[500px] flex relative overflow-hidden p-4 md:p-8 flex-col justify-center md:justify-normal md:flex-row items-center gap-8 rounded-2xl ">
            <div className="z-50 flex flex-col items-center md:items-start text-center justify-center md:justify-normal md:text-left text-white max-w-[800px] w-full h-full md:w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight mb-4 tracking-[-2px]">
                Ready to take your game to the next level?
              </h1>
              <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%]">
                Start training with us or set up a call so that we can get you
                started on the best development plan right away.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 w-full justify-center min-[800px]:justify-start">
                <Link
                  to="https://trilogysoccer.setmore.com/book"
                  target="_blank"
                  className="p-4 bg-[#1e1e1e] hover:bg-neutral-800 rounded-lg w-full max-w-[200px] text-white text-center"
                >
                  Book Open Groups
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
    </div>
  );
};

export default OpenGroupsPage;
