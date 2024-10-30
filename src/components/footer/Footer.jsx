import React, { useState } from "react";
import trilogyImg from "../../assets/logos/trilogy-transparent.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  const [emailSubscribe, setEmailSubscribe] = useState();

  const openInNewTab = (path) => {
    window.open(path, "_blank");
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Email", emailSubscribe);

    const subscribeUrl =
      "https://script.google.com/macros/s/AKfycbzLCV_WDSf9Wv1uLfm7qX_CICNPHx0VgSkgUVcbyVFefMNJ286yiMYsXgDblg2ktC79/exec";
    try {
      await fetch(subscribeUrl, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });
      alert("Subscribed!");
    } catch (error) {
      console.log(error);
      alert("Oops something went wrong, please try again.");
    }
  };

  return (
    <footer className="w-full mt-[6rem] md:mt-[12rem] p-8 py-14 md:p-8 md:py-[6rem] bg-black text-white flex flex-col">
      <div className="flex flex-col lg:flex-row max-w-[2400px] mx-auto gap-8 lg:gap-[6rem] items-center">
        <div className="flex flex-col gap-4 items-center">
          {true && (
            <img src={trilogyImg} className="w-full max-w-[300px]" alt="" />
          )}
          <div className="flex flex-wrap w-fit gap-2">
            <div
              className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out"
              onClick={() =>
                openInNewTab("https://www.instagram.com/trilogysoccer/")
              }
            >
              <FaInstagram />
            </div>
            <div
              className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out"
              onClick={() =>
                openInNewTab("https://www.instagram.com/trilogysoccer/")
              }
            >
              <FaTiktok />
            </div>
            <div
              className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out"
              onClick={() =>
                openInNewTab("https://www.youtube.com/@trilogysoccer")
              }
            >
              <FaYoutube />
            </div>
            <div
              className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out"
              onClick={() =>
                openInNewTab("mailto:trilogysoccertraining@gmail.com")
              }
            >
              <SiGmail />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[400px]">
          <h3 className="font-medium capitalize text-2xl mb-2">
            Stay up to date with Trilogy Soccer
          </h3>
          <p className="flex font-extralight leading-tight text-[0.65rem] sm:text-sm">
            Subscribe to our newsletter so you never miss an update, camp, or
            special events we have throughout the year. Submit your email and
            you’ll be all set!
          </p>
          <form action="" className="mt-8" onSubmit={(e) => handleSubscribe(e)}>
            <input
              name="Email"
              placeholder="Email..."
              type="email"
              className="w-full p-4 rounded-2xl border-2 border-white text-white my-2 bg-black"
              required
              onChange={(e) => setEmailSubscribe(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white w-full rounded-2xl text-black p-4 hover:bg-neutral-300 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
