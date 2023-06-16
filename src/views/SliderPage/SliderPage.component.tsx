import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./SliderPage.module.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper?.slideNext()}>{children}</button>;
};

export const SliderPageComponent = () => {
  return (
    <div className={styles.slider}>
      <IconButton>
        <ArrowBackIosNewIcon className='prevSlide' />
      </IconButton>

      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        navigation={{
          prevEl: ".prevSlide",
          nextEl: ".nextSlide",
        }}
        grabCursor={true}
        loop={true}
        modules={[Pagination, Navigation]}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>Slide {index + 1}</SwiperSlide>
          ))}
      </Swiper>
      <IconButton>
        <ArrowForwardIosIcon className='nextSlide' />
      </IconButton>
    </div>
  );
};

SliderPageComponent.displayName = "SliderPage";
