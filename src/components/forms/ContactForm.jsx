import React, { useState } from "react";
import Button from "../buttons/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  //const postUrl = "https://script.google.com/macros/s/AKfycbztUn5WqvFYREd7CAqxfXi--iQeFjf9sOqb9SAlXsXL33C2Tms6UsAxqJx7xRB3cduNoA/exec"

  const googleUrl =
    "https://script.google.com/macros/s/AKfycbwkW-6JdOOwYhPSwgAFvlC1Ponh3HZbQst0KKeJbS6IHwfX9nFaQOj1sIKjAlzzl6e1tw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Message", formData.Message);

    const googleUrl =
      "https://script.google.com/macros/s/AKfycbwkW-6JdOOwYhPSwgAFvlC1Ponh3HZbQst0KKeJbS6IHwfX9nFaQOj1sIKjAlzzl6e1tw/exec";

    try {
      await fetch(googleUrl, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });
      //alert("Form submitted!");

      alert("Form submitted successfully!");
    } catch (error) {
      console.log(error);
      alert("Oops something went wrong! Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            onChange={handleChange}
            required
            name="Name"
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
            name="Email"
            onChange={handleChange}
            required
          />
        </li>
        <li className="flex flex-col gap-1 items-start">
          <label htmlFor="contactMessage" className="text-[1rem] font-medium">
            Message
          </label>
          <textarea
            name="Message"
            id="contactMessage"
            className="w-full rounded-xl px-4 py-2 border-[1px] border-neutral-200"
            cols={4}
            rows={6}
            placeholder="How can we help you?"
            onChange={handleChange}
            required
          />
        </li>
      </ul>
      <Button primary={true} title={"Send Message"} />
    </form>
  );
}

export default ContactForm;
