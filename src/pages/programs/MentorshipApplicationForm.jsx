import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Home,
} from "lucide-react";

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'
  const [formData, setFormData] = useState({
    // Contact Information
    playerName: "",
    dateOfBirth: "",
    primaryEmail: "",
    phoneNumber: "",
    parentName: "",
    // Player Information
    currentTeam: "",
    currentLevel: "",
    longTermGoals: "",
    shortTermGoals: "",
    commitmentLevel: 3,
    // Program Selection
    programType: "",
    // Availability
    availability: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
  });

  const steps = [
    "Contact Information",
    "Player Information",
    "Program Selection",
    "Availability",
    "Review & Submit",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvailabilityChange = (day, timeRanges) => {
    setFormData((prev) => ({
      ...prev,
      availability: { ...prev.availability, [day]: timeRanges },
    }));
  };

  const validateContactInfo = () => {
    const { playerName, dateOfBirth, primaryEmail, phoneNumber, parentName } =
      formData;
    return (
      playerName && dateOfBirth && primaryEmail && phoneNumber && parentName
    );
  };

  const nextStep = () => {
    // Validate contact information before moving from step 1
    if (currentStep === 1) {
      if (!validateContactInfo()) {
        alert(
          "Please fill in all required contact information fields before proceeding."
        );
        return;
      }
    }
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 5) {
      setShowConfirmModal(true);
    }
  };

  const confirmSubmission = async () => {
    setShowConfirmModal(false);

    try {
      // Google Apps Script Web App URL - Replace with your deployed URL
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbx7WCaFaxgVxQRbc_VF8YQ9mENGyG36Kmo284HlQ2Ij_lym0gho9noUWnAVdU_vC4FNEQ/exec"; // ⚠️ PASTE YOUR URL HERE

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors", // Required for Google Apps Script
      });

      // Note: mode: 'no-cors' means we can't read the response,
      // but the data is still submitted successfully
      console.log("Form submitted successfully:", formData);
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSubmissionStatus(null);
    setFormData({
      playerName: "",
      dateOfBirth: "",
      primaryEmail: "",
      phoneNumber: "",
      parentName: "",
      currentTeam: "",
      currentLevel: "",
      longTermGoals: "",
      shortTermGoals: "",
      commitmentLevel: 3,
      programType: "",
      availability: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
    });
  };

  // Success State
  if (submissionStatus === "success") {
    return (
      <div className="w-full max-w-[600px] mx-auto bg-white border h-full min-h-[600px] p-4 md:p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-center mb-4">
          Application Submitted!
        </h2>
        <p className="text-center text-neutral-600 mb-8 max-w-md">
          Thank you for applying to the Elite Mentorship Program. We've received
          your application and will review it shortly. You'll hear from us
          within 1-2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all text-center"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // Error State
  if (submissionStatus === "error") {
    return (
      <div className="w-full max-w-[600px] mx-auto bg-white border h-full min-h-[600px] p-4 md:p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center">
        <XCircle className="w-20 h-20 text-red-500 mb-6" />
        <h2 className="text-3xl font-bold text-center mb-4">
          Submission Failed
        </h2>
        <p className="text-center text-neutral-600 mb-8 max-w-md">
          We encountered an error while submitting your application. Please try
          again or contact us directly for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetForm}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
          >
            Retry Application
          </button>
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-300 transition-all text-center"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Confirm Submission</h3>
            <p className="text-neutral-600 mb-6">
              Please review your application carefully. Once submitted, you
              won't be able to make changes. Are you sure you want to submit?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-300 transition-all"
              >
                Go Back
              </button>
              <button
                onClick={confirmSubmission}
                className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="w-full max-w-[600px] mx-auto bg-white border h-full min-h-[600px] p-4 md:p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="w-full flex flex-col h-full">
          {/* Header with Progress */}
          <div className="formHeader pb-4 border-b border-neutral-200 w-full flex flex-col items-center mb-6">
            <h2 className="font-medium tracking-[-1.5px] italic text-2xl">
              {steps[currentStep - 1]}
            </h2>
            <div className="flex items-center gap-3 mt-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex size-10 rounded-full text-center items-center justify-center transition-colors ${
                    step === currentStep
                      ? "bg-blue-500"
                      : step < currentStep
                      ? "bg-green-500"
                      : "bg-neutral-300"
                  }`}
                >
                  <span className="text-white font-bold text-lg">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1">
            {currentStep === 1 && (
              <ContactInformation
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 2 && (
              <PlayerInformation
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 3 && (
              <ProgramSelection
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 4 && (
              <Availability
                formData={formData}
                handleAvailabilityChange={handleAvailabilityChange}
              />
            )}
            {currentStep === 5 && <ReviewStep formData={formData} />}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {currentStep === 5 ? (
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all"
              >
                Submit Application
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

// Step 1: Contact Information
const ContactInformation = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Player Name *
        </label>
        <input
          type="text"
          value={formData.playerName}
          onChange={(e) => handleInputChange("playerName", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter player's full name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Date of Birth *
        </label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Primary Email *
        </label>
        <input
          type="email"
          value={formData.primaryEmail}
          onChange={(e) => handleInputChange("primaryEmail", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="email@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="(123) 456-7890"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Parent/Guardian Name *
        </label>
        <input
          type="text"
          value={formData.parentName}
          onChange={(e) => handleInputChange("parentName", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter parent's full name"
          required
        />
      </div>
    </div>
  );
};

// Step 2: Player Information
const PlayerInformation = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Current Team
        </label>
        <input
          type="text"
          value={formData.currentTeam}
          onChange={(e) => handleInputChange("currentTeam", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your current team"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Current Level/League
        </label>
        <input
          type="text"
          value={formData.currentLevel}
          onChange={(e) => handleInputChange("currentLevel", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., MLS NEXT, ECNL, High School Varsity"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Long-Term Goals
        </label>
        <textarea
          value={formData.longTermGoals}
          onChange={(e) => handleInputChange("longTermGoals", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="3"
          placeholder="Describe your long-term soccer goals..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Short-Term Goals
        </label>
        <textarea
          value={formData.shortTermGoals}
          onChange={(e) => handleInputChange("shortTermGoals", e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="3"
          placeholder="Describe your short-term soccer goals..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Commitment Level: {formData.commitmentLevel}/5
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.commitmentLevel}
          onChange={(e) =>
            handleInputChange("commitmentLevel", parseInt(e.target.value))
          }
          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-neutral-500 mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>
    </div>
  );
};

// Step 3: Program Selection
const ProgramSelection = ({ formData, handleInputChange }) => {
  const programs = [
    {
      value: "elite-1-1",
      title: "Elite 1-1",
      description: "Personalized one-on-one training sessions",
    },
    {
      value: "elite-pods",
      title: "Elite Pods",
      description: "Small group training (2-4 players)",
    },
    {
      value: "both",
      title: "Both Programs",
      description: "Combination of 1-1 and pod training",
    },
    {
      value: "unsure",
      title: "Unsure",
      description: "Need help deciding the best option",
    },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-neutral-600 mb-4">
        Select the program that best fits your development needs:
      </p>
      {programs.map((program) => (
        <label
          key={program.value}
          className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
            formData.programType === program.value
              ? "border-blue-500 bg-blue-50"
              : "border-neutral-200 hover:border-blue-300"
          }`}
        >
          <input
            type="radio"
            name="programType"
            value={program.value}
            checked={formData.programType === program.value}
            onChange={(e) => handleInputChange("programType", e.target.value)}
            className="mt-1 w-4 h-4 text-blue-500 focus:ring-blue-500"
          />
          <div className="ml-3">
            <p className="font-medium text-neutral-900">{program.title}</p>
            <p className="text-sm text-neutral-600">{program.description}</p>
          </div>
        </label>
      ))}
    </div>
  );
};

// Step 4: Availability
const Availability = ({ formData, handleAvailabilityChange }) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const addTimeRange = (day) => {
    const currentRanges = formData.availability[day] || [];
    handleAvailabilityChange(day, [
      ...currentRanges,
      { start: "09:00", end: "17:00" },
    ]);
  };

  const updateTimeRange = (day, index, field, value) => {
    const currentRanges = [...formData.availability[day]];
    currentRanges[index][field] = value;
    handleAvailabilityChange(day, currentRanges);
  };

  const removeTimeRange = (day, index) => {
    const currentRanges = formData.availability[day].filter(
      (_, i) => i !== index
    );
    handleAvailabilityChange(day, currentRanges);
  };

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
      {days.map((day) => (
        <div key={day} className="border border-neutral-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-neutral-900 capitalize">{day}</h3>
            <button
              type="button"
              onClick={() => addTimeRange(day)}
              className="text-sm text-blue-500 hover:text-blue-600 font-medium"
            >
              + Add Time
            </button>
          </div>

          {formData.availability[day].length === 0 ? (
            <p className="text-sm text-neutral-500 italic">
              No availability set
            </p>
          ) : (
            <div className="space-y-2">
              {formData.availability[day].map((range, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="time"
                    value={range.start}
                    onChange={(e) =>
                      updateTimeRange(day, index, "start", e.target.value)
                    }
                    className="flex-1 px-3 py-1.5 border border-neutral-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="text-neutral-500">to</span>
                  <input
                    type="time"
                    value={range.end}
                    onChange={(e) =>
                      updateTimeRange(day, index, "end", e.target.value)
                    }
                    className="flex-1 px-3 py-1.5 border border-neutral-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => removeTimeRange(day, index)}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Step 5: Review & Submit
const ReviewStep = ({ formData }) => {
  const getProgramTitle = (value) => {
    const programs = {
      "elite-1-1": "Elite 1-1",
      "elite-pods": "Elite Pods",
      both: "Both Programs",
      unsure: "Unsure",
    };
    return programs[value] || "Not selected";
  };

  const formatTime = (time24) => {
    if (!time24) return "";
    const [hours, minutes] = time24.split(":");
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? "pm" : "am";
    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${hour12}${minutes !== "00" ? ":" + minutes : ""}${period}`;
  };

  const formatAvailability = (availability) => {
    const days = Object.entries(availability).filter(
      ([_, times]) => times.length > 0
    );
    if (days.length === 0) return "No availability specified";

    return days.map(([day, times]) => (
      <div key={day} className="mb-2">
        <span className="font-medium capitalize">{day}:</span>
        <ul className="ml-4 text-sm text-neutral-600">
          {times.map((time, idx) => (
            <li key={idx}>
              {formatTime(time.start)} - {formatTime(time.end)}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="space-y-6 max-h-[450px] overflow-y-auto pr-2">
      {/* Contact Information */}
      <div className="border border-neutral-200 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-3 text-blue-600">
          Contact Information
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Player Name:</span>
            <span className="text-neutral-900">
              {formData.playerName || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Date of Birth:</span>
            <span className="text-neutral-900">
              {formData.dateOfBirth || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Email:</span>
            <span className="text-neutral-900">
              {formData.primaryEmail || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Phone:</span>
            <span className="text-neutral-900">
              {formData.phoneNumber || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">
              Parent/Guardian:
            </span>
            <span className="text-neutral-900">
              {formData.parentName || "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Player Information */}
      <div className="border border-neutral-200 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-3 text-blue-600">
          Player Information
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Current Team:</span>
            <span className="text-neutral-900">
              {formData.currentTeam || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Current Level:</span>
            <span className="text-neutral-900">
              {formData.currentLevel || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">
              Commitment Level:
            </span>
            <span className="text-neutral-900">
              {formData.commitmentLevel}/5
            </span>
          </div>
          {formData.longTermGoals && (
            <div className="pt-2">
              <span className="font-medium text-neutral-700 block mb-1">
                Long-Term Goals:
              </span>
              <p className="text-neutral-900 text-xs bg-neutral-50 p-2 rounded">
                {formData.longTermGoals}
              </p>
            </div>
          )}
          {formData.shortTermGoals && (
            <div className="pt-2">
              <span className="font-medium text-neutral-700 block mb-1">
                Short-Term Goals:
              </span>
              <p className="text-neutral-900 text-xs bg-neutral-50 p-2 rounded">
                {formData.shortTermGoals}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Program Selection */}
      <div className="border border-neutral-200 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-3 text-blue-600">
          Program Selection
        </h3>
        <div className="text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">
              Selected Program:
            </span>
            <span className="text-neutral-900">
              {getProgramTitle(formData.programType)}
            </span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="border border-neutral-200 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-3 text-blue-600">Availability</h3>
        <div className="text-sm">
          {formatAvailability(formData.availability)}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
        <p className="text-blue-800">
          Please review all information carefully. Click "Submit Application"
          below to complete your submission.
        </p>
      </div>
    </div>
  );
};

const MentorshipApplicationForm = () => {
  return (
    <div className="w-full h-full">
      <section className="w-full relative max-w-[1440px] mx-auto mt-[56px] p-4 md:p-8 flex flex-col items-center justify-center">
        <a
          href="/"
          className="absolute top-0 left-4 italic cursor-pointer hover:text-blue-500"
        >
          Back to Home
        </a>
        <h1 className="text-4xl md:text-5xl font-semibold italic tracking-[-2px] leading-tight mb-4 text-center">
          Elite Mentorship Application
        </h1>
        <p className="text-base md:text-lg tracking-[-0.5px] leading-tight max-w-[80%] text-center">
          Fill out the Form To get started on your individual Development
          Journey.
        </p>
        <div className="w-full mt-8">
          <FormContainer />
        </div>
      </section>
    </div>
  );
};

export default MentorshipApplicationForm;
