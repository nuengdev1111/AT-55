"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";



export default function LoginForm({ data }) {
 

  return (
    


    <section className={`flex md:flex-row flex-col`}>
      <h1 style={{fontSize: 28, width: 2500}} className=" translate-x-[26.1rem] translate-y-[-62rem] font-bold">แหล่งท่องเที่ยวที่สำคัญ</h1>
      {/* <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6">  */}
        {/* <div className="flex">
         
        </div> */}
        {/* <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.8rem]">  
                    <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                    &nbsp;
                    <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-325px)"}} src="/prolit.webp"/>
                    <p className="translate-x-[-28.9rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
                  </div>
                  <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.2rem]">  
                    <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                    &nbsp;
                    <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-325px)"}} src="/prolit.webp"/>
                    <p className="translate-x-[-28.8rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
                  </div> */}
                  {/* <div>
                    
                  </div> */}
                  <div style={{width: 5000}} className="flex justify-center gap-7 translate-x-[15.4rem] translate-y-[-50.4rem]">  
                    <img style={{height: 197, width: 2400, transform: "translateX(-325px)"}} src="/gh.png"/>
                    <img style={{height: 197, width: 2400, transform: "translateX(-325px)"}} src="/ty.jpg"/>
                    <img style={{height: 197, width: 2400, transform: "translateX(-325px)"}} src="/iop.jpg"/>
                    {/* <p className="translate-x-[-28.7rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p> */}
                  </div>
      {/* </div> */}
    </section>
    // <section>
    //   


    // </section>
  );  
}
