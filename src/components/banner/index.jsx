"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { images } from "../../../lib/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./banner.module.scss";

export default function Page() {
  return (
    <section>
      <div>
      <Swiper
  navigation
  pagination={{ type: "fraction" }}
  modules={[Navigation, Pagination]}
  onSwiper={(swiper) => console.log(swiper)}
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className={styled.swiperimagecontainer}>
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>


    </section>
  );
}
