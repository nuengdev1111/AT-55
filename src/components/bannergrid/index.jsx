"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./bannergrid.module.scss";
import Child from "../../../public/Child.json";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageHome from '@/components/imageHome';


import Lottie from "lottie-react";

const images = [
  "/first.png",
  "/second.jpg",
  "/third.jpg",
  // เพิ่มรูปภาพอื่น ๆ ตามต้องการ
];

export default function Page() {
  return (
    <>
    <Box className={styled.mainBox}>
  
      <Box className={styled.boxBanner}>
  
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
                className={styled.img}
                layout="responsive"
              />
            </SwiperSlide>
          ))}
        </Swiper>
  
        <img className={styled.logo} src="/logo.png" alt="Logo" />
  
      </Box>
  
      <Box className={styled.imgHome}>
        <ImageHome />
      </Box>
  
    </Box>
  </>
  
  );
}
