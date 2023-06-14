import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

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
      <button className='prevSlide'>←</button>

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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
      <button className='nextSlide'>→</button>
    </div>
  );
};

SliderPageComponent.displayName = "SliderPage";
