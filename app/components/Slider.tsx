"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { sliderItems } from "@/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/slider.css";

const Slider = () => {
  return (
    <Swiper
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={true}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="!pb-10"
    >
      {sliderItems.map(({ title, icon, img }) => (
        <SwiperSlide key={title}>
          <div className="flex flex-col items-center gap-4 sm:flex-row xl:gap-20">
            <div className="m-auto flex-1 sm:ml-24">
              <Image src={icon} alt="slider icon" width={64} height={64} />
              <p className="font-semibold sm:text-3xl">{title}</p>
            </div>

            <div className="relative flex-1">
              <Image
                src={img}
                alt="slider image"
                width={710}
                height={408}
                className="object-contain sm:h-full sm:w-full"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
