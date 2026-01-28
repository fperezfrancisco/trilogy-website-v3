import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PricingSection = ({
  title = "Pricing Plans",
  subtitle = "Choose Your Plan",
  billingOptions = ["Monthly", "Quarterly", "Annually"],
  defaultBilling = "Monthly",
  plans = [],
}) => {
  const [selectedBilling, setSelectedBilling] = useState(defaultBilling);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold italic tracking-[-2px] leading-tight mb-4 capitalize">
          {title}
        </h2>
        <p className="text-base tracking-[-0.5px] leading-tight">{subtitle}</p>
      </div>

      {/* Billing Toggle Pills */}
      {billingOptions.length > 0 && (
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 rounded-full p-1 gap-1">
            {billingOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedBilling(option)}
                className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                  selectedBilling === option
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-neutral-700 hover:text-neutral-900"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1000px] mx-auto">
        {plans.map((plan, index) => {
          const priceData =
            plan.pricing[selectedBilling] || plan.pricing[defaultBilling];

          return (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-6 md:p-8 transition-all duration-200 hover:shadow-xl ${
                plan.featured
                  ? "border-blue-500 shadow-lg"
                  : "border-neutral-200 hover:border-blue-300"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute z-10 -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 text-left">
                  <span className="text-4xl md:text-5xl font-bold">
                    ${priceData?.price || 0}
                  </span>
                  <span className="text-neutral-600 text-lg">
                    /{priceData?.period || "month"}
                  </span>
                </div>

                {/* Billing Info */}
                {priceData?.billingInfo && (
                  <p className="text-sm text-neutral-500 mt-1 text-left">
                    {priceData.billingInfo}
                  </p>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-left"
                  >
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {plan.stripeLink ? (
                <a
                  href={plan.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 text-center ${
                    plan.featured
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200"
                  }`}
                >
                  {plan.ctaText || "Select Plan"}
                </a>
              ) : plan.ctaLink ? (
                <Link
                  to={plan.ctaLink}
                  className={`block w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 text-center ${
                    plan.featured
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200"
                  }`}
                >
                  {plan.ctaText || "Select Plan"}
                </Link>
              ) : (
                <button
                  onClick={plan.ctaAction}
                  className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.featured
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200"
                  }`}
                >
                  {plan.ctaText || "Select Plan"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
