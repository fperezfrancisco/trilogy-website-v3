import React from "react";
import PricingSection from "./PricingSection";

// Example usage of PricingSection component
const PricingSectionExample = () => {
  // Define your pricing plans
  const pricingPlans = [
    {
      title: "Basic Plan",
      pricing: {
        Monthly: {
          price: 49,
          period: "month",
          billingInfo: "Billed monthly",
        },
        Quarterly: {
          price: 45,
          period: "month",
          billingInfo: "Billed quarterly ($135 total)",
        },
        Annually: {
          price: 39,
          period: "month",
          billingInfo: "Billed annually ($468 total)",
        },
      },
      features: [
        "Weekly group training sessions",
        "Access to training facilities",
        "Basic skill development drills",
        "Monthly progress reports",
        "Team communication platform",
      ],
      ctaText: "Select Plan",
      featured: false,
    },
    {
      title: "Pro Plan",
      pricing: {
        Monthly: {
          price: 99,
          period: "month",
          billingInfo: "Billed monthly",
        },
        Quarterly: {
          price: 89,
          period: "month",
          billingInfo: "Billed quarterly ($267 total)",
        },
        Annually: {
          price: 79,
          period: "month",
          billingInfo: "Billed annually ($948 total)",
        },
      },
      features: [
        "Everything in Basic Plan",
        "Bi-weekly 1-on-1 coaching sessions",
        "Personalized training programs",
        "Video analysis and feedback",
        "Priority facility booking",
        "Quarterly performance reviews",
      ],
      ctaText: "Select Plan",
      featured: true,
    },
    {
      title: "Elite Plan",
      pricing: {
        Monthly: {
          price: 199,
          period: "month",
          billingInfo: "Billed monthly",
        },
        Quarterly: {
          price: 179,
          period: "month",
          billingInfo: "Billed quarterly ($537 total)",
        },
        Annually: {
          price: 159,
          period: "month",
          billingInfo: "Billed annually ($1,908 total)",
        },
      },
      features: [
        "Everything in Pro Plan",
        "Weekly 1-on-1 mentorship sessions",
        "Custom nutrition and fitness plans",
        "College recruitment guidance",
        "Tournament preparation coaching",
        "24/7 coach support",
        "Exclusive training camps access",
      ],
      ctaText: "Select Plan",
      featured: false,
    },
  ];

  return (
    <PricingSection
      title="Pricing Plans"
      subtitle="Choose Your Plan"
      billingOptions={["Monthly", "Quarterly", "Annually"]}
      defaultBilling="Monthly"
      plans={pricingPlans}
    />
  );
};

export default PricingSectionExample;
