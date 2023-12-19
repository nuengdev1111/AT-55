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
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6"> 
        <div className="flex">
         
        </div>
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
                  <div>
                    
                  </div>
                  <div className="flex justify-center gap-7 translate-x-[9.1rem] translate-y-[-50.4rem]">  
                    <img style={{height: 197, width: 347, transform: "translateX(-325px)"}} src="/oj.png"/>
                    <img style={{height: 197, width: 347, transform: "translateX(-325px)"}} src="/ggg.png"/>
                    <img style={{height: 197, width: 347, transform: "translateX(-325px)"}} src="/kol.png"/>
                    {/* <p className="translate-x-[-28.7rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p> */}
                  </div>
      </div>
    </section>
    // <section>
    //   


    // </section>
  );  
}
