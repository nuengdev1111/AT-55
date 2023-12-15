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
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div
                className={styled.img}
                style={{
                  width: "100%",
                  height: "800px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={500}
                  height={0}
                />
              </div>
              <div style={{transform: "translateY(-191px)" }}>
                <div style={{transform: "translateX(1001px)" , width: "30%" }}>
                    <Lottie loop={true} animationData={Child} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
