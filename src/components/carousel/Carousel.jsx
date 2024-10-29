import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
// core version + navigation, pagination modules:
// import Swiper and modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewBox from "../reviews/ReviewBox";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import SwiperButtons from "./SwiperButtons";

function Carousel({ slideList }) {
  return (
    <div className="relative h-full w-full p-2">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slideList &&
          slideList.map((review) => (
            <SwiperSlide>
              <ReviewBox
                stars={review.stars}
                author={review.author}
                text={review.text}
                playerInfo={review.playerInfo}
              />
            </SwiperSlide>
          ))}
        <SwiperButtons />
      </Swiper>
    </div>
  );
}

export default Carousel;
