import Image from "next/image";
import SwiperBanner from "./swiper-banner";

const defaultMainBanners = [
  { src: "/assets/banner2.webp", alt: "banner1" },
  { src: "/assets/banner3.webp", alt: "banner2" },
  { src: "/assets/banner2.webp", alt: "banner3" },
];

const defaultSideBanners = [
  { src: "/assets/banner2.webp", alt: "banner1" },
  { src: "/assets/banner3.webp", alt: "banner2" },
];

export default function Banner() {
  return (
    <div className=" h-[70vh] grid grid-cols-1 md:grid-cols-8 gap-3">
      <div className="col-span-5 ">
        <SwiperBanner images={defaultMainBanners} />
      </div>
      <div className=" col-span-3 flex flex-col justify-between items-center gap-2">
        <div className="relative w-full h-1/2">
          <Image
            src={defaultSideBanners[0].src}
            alt={defaultSideBanners[0].alt}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full h-1/2  ">
          <Image
            src={defaultSideBanners[1].src}
            alt={defaultSideBanners[1].alt}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
