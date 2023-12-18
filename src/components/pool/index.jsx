"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./pool.module.scss";




export default function LoginForm({ data }) {
 

  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6"> 
          <div className="flex p-12">
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-64rem]" src="/pool.webp"/>
                <img style={{height: 50,width: 65}} className="translate-x-[0.4rem] translate-y-[-62.3em]" src="/ico1.webp"/>
                <h2 className="translate-x-[1.6rem] translate-y-[-62.4rem] text-white font-bold">แจ้งเรื่อง<br />ร้องเรียนร้องทุกข์</h2>
            </div>
            <div className="flex translate-x-[-11rem]">
              <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-64rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[0.4rem] translate-y-[-62.3em]" src="/ico2.webp"/>
              <h2 className="translate-x-[1.6rem] translate-y-[-62.4rem] text-white font-bold">รับเรื่องร้องเรียนการ<br />ทุจริตประพฤติมิชอบ</h2>
            </div>
          </div>
          <div className="flex p-12">
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-70rem]" src="/pool.webp"/>
              <h2 className="translate-x-[5.6rem] translate-y-[-67.4rem] text-white font-bold">คู่มือประชาชน</h2>
              <img style={{height: 50,width: 65}} className="translate-x-[-5.9rem] translate-y-[-68.4rem]" src="/ico3.png"/>
            </div>
            <img style={{height: 130,width: 350}} className="translate-x-[10.2rem] translate-y-[-70rem]" src="/pool.webp"/>
            <h2 className="translate-x-[-4.2rem] translate-y-[-67.4rem] text-white font-bold">เบี้ยยังชีพผู้สูงอายุ</h2>
            <img style={{height: 50,width: 65}} className="translate-x-[-17.4rem] translate-y-[-68.4rem]" src="/rrt.webp"/>
          </div>
          <div className="flex p-12">
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-76rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[0.4rem] translate-y-[-74.2rem]" src="/jib.webp"/>
              <h2 className="translate-x-[1.1rem] translate-y-[-73.4rem] text-white font-bold">แบบสอบถามความพึงพอใจ</h2>
            </div>
            <div className="flex">
              <img style={{height: 130,width: 350}} className="translate-x-[4.1rem] translate-y-[-76rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[-15.5rem] translate-y-[-74.2rem]" src="/hjk.webp"/>
              <h2 className="translate-x-[-14.7rem] text-white translate-y-[-73.4rem] font-bold">แบบสอบถามความพึงพอใจ</h2>
            </div>
          </div>
          <div className="flex p-12">
          <div className="flex">
            <img style={{height: 130,width: 350}} className="translate-x-[19.8rem] translate-y-[-81rem]" src="/pool.webp"/>
            <img style={{height: 50,width: 65}} className="translate-x-[0.2rem] translate-y-[-79.2rem]" src="/ipe.webp"/>
            <h2 className="translate-x-[1rem] translate-y-[-78.4rem] text-white font-bold">แบบสอบถามความพึงพอใจ</h2>
          </div>
          <div className="flex">
            <img style={{height: 130,width: 350}} className="translate-x-[3.8rem] translate-y-[-81rem]" src="/pool.webp"/>
            <img style={{height: 50,width: 65}} className="translate-x-[-15.7rem] translate-y-[-79.2rem]" src="/iiu.webp"/>
            <h2 className="translate-x-[-15rem] translate-y-[-78.4rem] text-white font-bold">One&nbsp;Stop&nbsp;Service</h2>
          </div>
          </div>
      </div>
    </section>
  );  
}
