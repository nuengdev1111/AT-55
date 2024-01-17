"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./bannergrid.module.scss";
import Child from "../../../public/Child.json";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageHome from '@/components/imageHome';
import ImageCam from '@/components/imgCamera';


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
            <img className={styled.topheader} src="/bg_tophead.png"/>
            <div className={styled.imgres}>
              {/* <Swiper
                autoHeight={true}
                spaceBetween={20}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className={styled.mySwiper}
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
              </Swiper> */}

                <Swiper
                  autoHeight={true}
                  spaceBetween={20}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }} // เพิ่ม autoplay prop ที่นี่
                  className={styled.mySwiper}
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

            </div>
        
        <img className={styled.logo} src="/logo.png" alt="Logo" />
        <span className={styled.topfonth}>องค์การบริหารส่วนตำบลบางเสาธง</span>
        <span className={styled.topfonten}>Bang Sao Thong district</span>
      </Box>
      
      <Box className={styled.imgHome}>
        <ImageHome />
      </Box>
      
      <Box className={styled.imgCamMain}>
        <ImageCam />
      </Box>
  
    </Box>
  </>
  
  );
}
