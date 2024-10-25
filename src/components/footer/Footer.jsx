import React from "react";
//import trilogyImg from "../../assets/trilogy-transparent.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <footer className="w-full mt-[6rem] md:mt-[12rem] p-8 py-14 md:p-8 md:py-[6rem] bg-black text-white flex flex-col">
      <div className="flex flex-col lg:flex-row max-w-[2400px] mx-auto gap-8 lg:gap-[6rem] items-center">
        <div className="flex flex-col gap-4 items-center">
          {false && (
            <img src={trilogyImg} className="w-full max-w-[350px]" alt="" />
          )}
          <div className="flex flex-wrap w-fit gap-2">
            <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out">
              <FaInstagram />
            </div>
            <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out">
              <FaTiktok />
            </div>
            <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out">
              <FaYoutube />
            </div>
            <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-500 hover:text-3xl transition-all duration-200 ease-out">
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
              placeholder="Email..."
              type="email"
              className="w-full p-4 rounded-2xl border-2 border-white text-white my-2 bg-black"
              required
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
