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
    <div className="h-[36vh] md:h-[75vh] grid grid-cols-1 md:grid-cols-8 md:gap-3">
      {/* Main Banner Swiper */}
      <div className="md:col-span-5 h-[23vh] md:h-full mb-1 md:mb-0">
        <SwiperBanner images={defaultMainBanners} />
      </div>

      {/* Side Banners - Horizontal on mobile, Vertical on desktop */}
      <div className="md:col-span-3 h-[13vh] md:h-full flex flex-row md:flex-col justify-between gap-1 md:gap-3">
        <div className="relative w-full h-full">
          <Image
            src={defaultSideBanners[0].src}
            alt={defaultSideBanners[0].alt}
            fill
            className="object-cover rounded-lg md:rounded-xl"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={defaultSideBanners[1].src}
            alt={defaultSideBanners[1].alt}
            fill
            className="object-cover rounded-lg md:rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}