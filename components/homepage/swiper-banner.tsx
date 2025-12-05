"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperBanner({ images }) {
  console.log(images);
  return (
    <>
      <Swiper
        className="rounded-xl"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {images &&
          images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full ">
                <Image src={img.src} alt={img.alt} fill />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
