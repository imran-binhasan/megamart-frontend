"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BannerImage {
  src: string;
  alt: string;
}

interface SwiperBannerProps {
  images: BannerImage[];
}

export default function SwiperBanner({ images }: SwiperBannerProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Swiper
      className="h-full w-full rounded-lg md:rounded-xl"
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((img, index) => (
        <SwiperSlide key={`banner-${index}`}>
          <div className="relative w-full h-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}