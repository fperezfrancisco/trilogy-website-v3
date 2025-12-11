import { useNavigate } from "react-router-dom";

function AdvertisementSectionHome() {
  const handleWinter = () => {
    window.open("https://forms.gle/VpZjdDEuQ82JMqvM6", "_blank");
    return;
  };

  /*
  const handlePreseason = () => {
    window.open("https://forms.gle/hBi5tgww1k4VAEyf8", "_blank");
    return;
  };

  const handleProdigy = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfPEV7poqRIA4fvRL9qiJnrv-F6aY1g-F_2dHGoGzPID1IFxA/viewform",
      "_blank"
    );
    return;
  };
  */

  const navigate = useNavigate();

  return (
    <div className="w-full py-[6rem] px-4 md:px-8 flex flex-col items-center">
      <div className="w-full flex flex-wrap gap-8 items-center my-8 justify-center">
        <div className="w-full  flex flex-col items-center">
          <img
            src={"/winter2025-26/winter-wide.png"}
            className="object-cover rounded-2xl overflow-hidden w-full cursor-pointer hover:scale-105 transition-all duration-300 ease-out"
            alt=""
            onClick={handleWinter}
          />
        </div>
      </div>
      <h2 className="sectionTitle text-[1.75rem] text-center lg:text-left md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-[#1e1e1e] capitalize mb-0 leading-none">
        Join us this{" "}
        <span className="text-blue-500 italic">Winter 2025/26</span>{" "}
      </h2>
      <button
        className="p-2 border-2 border-black rounded-xl bg-black text-white hover:bg-black/80 w-full max-w-[350px] mt-4"
        onClick={() => navigate("/winter")}
      >
        Learn More
      </button>
    </div>
  );
}

export default AdvertisementSectionHome;
