import React, { useState } from "react";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import { CheckCircle } from "lucide-react";

const GetHelpPage = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    playerName: "",
    email: "",
    phoneNumber: "",
    helpWith: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

  const helpOptions = [
    { value: "", label: "Select an option..." },
    { value: "elite-1-1", label: "Unsure where to start" },
    { value: "elite-1-1", label: "Interested in Elite 1-1" },
    { value: "elite-pods", label: "Interested in Elite Pods" },
    { value: "open-groups", label: "Interested in Open Group Training" },
    { value: "prodigy", label: "Interested in Prodigy Program" },
    { value: "joining-staff", label: "Interested in Joining Staff" },
    { value: "collaboration", label: "Interested in Collaboration Program" },
    { value: "questions", label: "Have Questions" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with your actual submission endpoint
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmissionStatus("success");

      // Reset form
      setFormData({
        parentName: "",
        playerName: "",
        email: "",
        phoneNumber: "",
        helpWith: "",
        comments: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full">
      <Header />
      <main className="w-full max-w-[2400px] mx-auto mt-[56px] my-0 flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto p-4 md:p-8 py-12 md:py-16">
          <div className="flex flex-col min-[900px]:flex-row items-center min-[900px]:items-start gap-8">
            {/* Image Section */}
            <div className="w-full min-[900px]:w-1/2 flex justify-center min-[900px]:justify-start">
              <div className="w-full max-w-[500px] aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden">
                {/* Placeholder for image - add src later */}
                <div className="w-full h-full flex items-center justify-center text-neutral-400">
                  <img
                    src="/mentorship.JPG"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full min-[900px]:w-1/2 flex flex-col items-center min-[900px]:items-start">
              {submissionStatus === "success" ? (
                // Success Message
                <div className="w-full max-w-[600px] bg-white border border-green-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Thanks for Reaching Out!
                  </h2>
                  <p className="text-neutral-700 mb-6">
                    We've received your inquiry and will get back to you within
                    24-48 hours. Our team is excited to help you get started
                    with Trilogy Soccer!
                  </p>
                  <button
                    onClick={() => setSubmissionStatus(null)}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                // Form
                <div className="w-full max-w-[600px] bg-white border border-neutral-200 rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold italic tracking-[-2px] leading-tight mb-3">
                      Need Help Getting Started?
                    </h1>
                    <p className="text-neutral-600 text-sm md:text-base">
                      Fill out the form below and we'll reach out to help you
                      find the perfect program or answer any questions you have.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) =>
                          handleInputChange("parentName", e.target.value)
                        }
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter parent/guardian name"
                        required
                      />
                    </div>

                    {/* Player Name */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Player Name *
                      </label>
                      <input
                        type="text"
                        value={formData.playerName}
                        onChange={(e) =>
                          handleInputChange("playerName", e.target.value)
                        }
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter player name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>

                    {/* Help With Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        What do you need help with? *
                      </label>
                      <select
                        value={formData.helpWith}
                        onChange={(e) =>
                          handleInputChange("helpWith", e.target.value)
                        }
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        required
                      >
                        {helpOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Comments/Questions */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Comments or Questions
                      </label>
                      <textarea
                        value={formData.comments}
                        onChange={(e) =>
                          handleInputChange("comments", e.target.value)
                        }
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows="4"
                        placeholder="Let us know how we can help you..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 ${
                        isSubmitting
                          ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetHelpPage;
