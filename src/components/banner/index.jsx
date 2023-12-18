"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./banner.module.scss";
import Child from "../../../public/Child.json";

import Lottie from "lottie-react";

const images = [
  "/first.png",
  "/second.jpg",
  "/third.jpg",
  // เพิ่มรูปภาพอื่น ๆ ตามต้องการ
];

export default function Page() {
  return (
    <section>
      <div>

        <Swiper
          autoHeight={true}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={1000}
                height={400}
                layout="responsive"
              />
              <div className={styled.overlay}>
          <div className={styled.logo}>
            <img src="/logo.png" alt="Logo" />
          </div>
          
          {/* <div className={styled.text}>
          <h1 className={styled.headingStyle}>องค์การบริหารส่วนตำบลบางเสาธง</h1>
            <h2 className={styled.headingStyle2}>Bangsaotong Subdistrict Administrative Organization</h2>
          </div> */}
        </div>
      
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex ">
          <div className="left-48" style={{ width: "20%" }}>
                  <Lottie loop={true} animationData={Child} />
          </div>
        </div>
      </div>
    </section>
  );
}
