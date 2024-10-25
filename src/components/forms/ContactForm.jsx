import React from "react";
import Button from "../buttons/Button";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form
      className="w-full flex flex-col items-end max-w-[600px] mx-auto md:shadow-xl md:border-[1px] md:border-neutral-300 rounded-2xl p-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <ul className="list-none w-full flex flex-col gap-4 mb-10">
        <li className="flex flex-col gap-1 items-start">
          <label htmlFor="contactName" className="text-[1rem] font-medium">
            Name
          </label>
          <input
            type="text"
            id="contactName"
            className="w-full rounded-xl px-4 py-2 border-[1px] border-neutral-200"
            placeholder="Your name..."
            required
          />
        </li>
        <li className="flex flex-col gap-1 items-start">
          <label htmlFor="contactEmail" className="text-[1rem] font-medium">
            Email
          </label>
          <input
            type="email"
            id="contactEmail"
            className="w-full rounded-xl px-4 py-2 border-[1px] border-neutral-200"
            placeholder="Your email..."
            required
          />
        </li>
        <li className="flex flex-col gap-1 items-start">
          <label htmlFor="contactMessage" className="text-[1rem] font-medium">
            Message
          </label>
          <textarea
            id="contactMessage"
            className="w-full rounded-xl px-4 py-2 border-[1px] border-neutral-200"
            cols={4}
            rows={6}
            placeholder="How can we help you?"
            required
          />
        </li>
      </ul>
      <Button primary={true} title={"Send Message"} />
    </form>
  );
}

export default ContactForm;
