import React from "react";
import winterPrograms from "../../assets/Winter-Programs.png";
import prodigyFlyer from "../../assets/Prodigy-Flyer.png";
import januaryFlyer from "../../assets/trilogy-january.png";
import { useNavigate } from "react-router-dom";

function AdvertisementSectionHome() {
  const handleWinter = () => {
    window.open("https://forms.gle/bMCoTw2D89FfgseZ9", "_blank");
    return;
  };

  const handleProdigy = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfPEV7poqRIA4fvRL9qiJnrv-F6aY1g-F_2dHGoGzPID1IFxA/viewform",
      "_blank"
    );
    return;
  };

  const navigate = useNavigate();

  return (
    <div className="w-full py-[6rem] md:py-[10rem] lg:py-[14rem] px-4 md:px-8 flex flex-col items-center">
      <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
        Join us this <span className="text-blue-500 italic">January 2025</span>{" "}
      </h2>
      <div className="w-full flex flex-wrap gap-8 items-center my-8 justify-center">
        <div className="w-full max-w-[600px] flex flex-col items-center">
          {true && (
            <img
              src={januaryFlyer}
              className="object-cover w-full max-w-[600px] rounded-2xl overflow-hidden hover:scale-105 transition-all ease-out hover:shadow-2xl cursor-pointer"
              alt=""
              onClick={handleWinter}
            />
          )}
          <button
            className="p-2 border-2 border-black rounded-xl bg-neutral-300 hover:bg-neutral-400 w-full max-w-[350px] mt-4"
            onClick={() => navigate("/winter")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvertisementSectionHome;
