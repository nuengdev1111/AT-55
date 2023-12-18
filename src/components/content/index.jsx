"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./content.module.scss";




export default function LoginForm({ data }) {
 

  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6"> 
        <div className="flex">
          <div>
              <h2 style={{fontSize: 40}} className="font-bold text-cyan-300 translate-x-[-0.1rem] translate-y-[-75.4rem] pb-1">ข่าวประชาสัมพันธ์</h2>
              <br />
              <h4 style={{fontSize: 26}} className="font-bold text-black translate-x-[0.1rem] translate-y-[-77.4rem]">เทศบาลตำบลแพรกษา</h4>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <h2 style={{fontSize: 40}} className="font-bold text-cyan-300 translate-x-[10.7rem] translate-y-[-75.4rem] pb-1">ประกาศประชุมสภา</h2>
            <br />
            <h4 style={{fontSize: 26}} className="font-bold text-black translate-x-[10.7rem] translate-y-[-77.4rem]">เทศบาลตำบลแพรกษา</h4>
          </div>
        </div>
        <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.8rem]">  
              <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
              &nbsp;
              <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-277px)"}} src="/prolit.webp"/>
              <p className="translate-x-[-25.5rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
            </div>
            <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.8rem]">  
              <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
              &nbsp;
              <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-277px)"}} src="/prolit.webp"/>
              <p className="translate-x-[-25.5rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
            </div>
            <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.8rem]">  
              <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
              &nbsp;
              <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-277px)"}} src="/prolit.webp"/>
              <p className="translate-x-[-25.5rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
            </div>
            <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.8rem]">  
              <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
              &nbsp;
              <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-277px)"}} src="/prolit.webp"/>
              <p className="translate-x-[-25.5rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
        </div>
        
      </div>
    </section>
    // <section>
    //   


    // </section>
  );  
}
