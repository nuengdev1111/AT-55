"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./pool.module.scss";
import { Container } from "@mui/material";




export default function LoginForm({ data }) {
 

  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6"> 
          <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
          {/* <div className="flex p-12"> */}
            <div className="flex">
              <img style={{height: 130}} className="xl: w-[350px] md: w-[110px] translate-x-[2rem] translate-y-[-64rem]" src="/pool.webp"/>
                <img style={{height: 50,width: 65}} className="translate-x-[-17.6rem] translate-y-[-62.3em] relative z-20" src="/ico1.webp"/>
                <h2 className="translate-x-[-15.6rem] translate-y-[-62.4rem] text-white font-bold">แจ้งเรื่อง<br />ร้องเรียนร้องทุกข์</h2>
            </div>
            <div className="flex translate-x-[-11rem]">
              <img style={{height: 130,width: 350}} className="translate-x-[35rem] translate-y-[-73.5rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[15.4rem] translate-y-[-71.6em]" src="/ico2.webp"/>
              <h2 className="translate-x-[16.6rem] translate-y-[-71.9rem] text-white font-bold">รับเรื่องร้องเรียนการ<br />ทุจริตประพฤติมิชอบ</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
          {/* <div className="flex p-12"> */}
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[2rem] translate-y-[-73rem]" src="/pool.webp"/>
              <h2 className="translate-x-[-11.4rem] translate-y-[-70.4rem] text-white font-bold">คู่มือประชาชน</h2>
              <img style={{height: 50,width: 65}} className="translate-x-[-23.9rem] translate-y-[-71.1rem]" src="/ico3.png"/>
            </div>
            <img style={{height: 130,width: 350}} className="translate-x-[24rem] translate-y-[-82.6rem]" src="/pool.webp"/>
            <h2 className="translate-x-[31.5rem] translate-y-[-89.4rem] text-white font-bold">เบี้ยยังชีพผู้สูงอายุ</h2>
            <img style={{height: 50,width: 65}} className="translate-x-[26.4rem] translate-y-[-93.6rem]" src="/rrt.webp"/>
          </div>
          <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
          {/* <div className="flex p-12"> */}
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[2rem] translate-y-[-90rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[-17.6rem] translate-y-[-88.2rem]" src="/jib.webp"/>
              <h2 className="translate-x-[-16.6rem] translate-y-[-87.4rem] text-white font-bold">แบบสอบถามความพึงพอใจ</h2>
            </div>
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[24rem] translate-y-[-99.6rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[4.4rem] translate-y-[-97.7rem]" src="/hjk.webp"/>
              <h2 className="translate-x-[5.4rem] text-white translate-y-[-97rem] font-bold">เบี้ยยังชีพคนพิการ</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
          {/* <div className="flex p-12"> */}
          <div className="flex">
            <img style={{height: 130,width: 350}} className="translate-x-[2rem] translate-y-[-99.7rem]" src="/pool.webp"/>
            <img style={{height: 50,width: 65}} className="translate-x-[-17.6rem] translate-y-[-98rem]" src="/ipe.webp"/>
            <h2 className="translate-x-[-16.5rem] translate-y-[-98rem] text-white font-bold">ระบบสารสนเทศสนับสนุน<br/>การบริหารจัดการ</h2>
          </div>
          <div className="flex">
            <img style={{height: 130,width: 350}} className="translate-x-[23.9rem] translate-y-[-109.4rem]" src="/pool.webp"/>
            <img style={{height: 50,width: 65}} className="translate-x-[4.2rem] translate-y-[-107.8rem]" src="/iiu.webp"/>
            <h2 className="translate-x-[5.2rem] translate-y-[-106.7rem] text-white font-bold">One&nbsp;Stop&nbsp;Service</h2>
          </div>
          </div>
      </div>
    </section>
  );  
}
