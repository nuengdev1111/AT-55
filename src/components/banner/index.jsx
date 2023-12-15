'use client'

import Image from 'next/image'

import Child from "../../../public/Child.json";

import Lottie from "lottie-react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { images } from '../../../lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Page() {
  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          // pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-186 w-full rounded-lg'
        > 
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div style={{height: 650}} className='flex w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
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
  )
}
