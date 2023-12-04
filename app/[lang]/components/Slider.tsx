'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/slider.css';

type SliderItem = {
  icon: string;
  title: string;
  img: string;
};
type SliderProps = {
  sliderItems: SliderItem[];
};

const Slider = ({ sliderItems }: SliderProps) => {
  return (
    <Swiper
      navigation
      pagination={{ type: 'bullets', clickable: true }}
      autoplay={true}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      className='!pb-10'
    >
      {sliderItems.map(({ title, icon, img }) => (
        <SwiperSlide key={title}>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center xl:gap-20'>
            <div className='flex-1 sm:m-auto sm:ml-24'>
              <Image
                src={icon}
                alt='slider icon'
                width={64}
                height={64}
                className='w-8 sm:w-16'
              />
              <p className='mt-2 font-semibold sm:text-3xl'>{title}</p>
            </div>

            <div className='relative flex-1'>
              <Image
                src={img}
                alt='slider image'
                width={710}
                height={408}
                className='object-contain sm:h-full sm:w-full'
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
