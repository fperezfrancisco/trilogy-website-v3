import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <div className="absolute z-20 m-auto top-auto bottom-6 inset-10 flex items-center justify-between p-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default SwiperButtons;
