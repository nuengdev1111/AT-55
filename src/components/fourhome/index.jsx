"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Marquee from "react-fast-marquee";


export default function LoginForm({ data }) {
 

  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6"> 
        <button className="bg-blue-500 shadow-lg shadow-blue-700/50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full translate-x-[30rem] translate-y-[-20rem]">
            หน่วยงานที่เกี่ยวข้อง
        </button>
        <div className="translate-x-[-17rem] translate-y-[-17rem]">
            <Marquee style={{height: 60, width: 1700}}>
                <img src="/ee1.jpg" alt="Image 1" />
                <img src="/ee2.jpg" alt="Image 2" />
                <img src="/ee3.png" alt="Image 3" />
                <img src="/ee4.gif" alt="Image 3" />
                <img src="/ee5.png" alt="Image 3" />
                <img src="/ee6.gif" alt="Image 3" />
                <img src="/ee7.jpg" alt="Image 3" />
                <img src="/ee8.png" alt="Image 3" />
                <img src="/ee9.gif" alt="Image 3" />
            </Marquee>
        </div>
      </div>
    </section>
    // <section>
    //   


    // </section>
  );  
}
