"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./middlehome.module.scss";
import { Box, Typography } from "@mui/material";




export default function LoginForm({ data }) {
 

  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6"> 
        <h2 style={{fontSize: 33}} className="text-black font-bold pb-4 translate-x-[10rem] translate-y-[-6rem]">E-Service</h2>
        <div className="translate-x-[-5rem] translate-y-[-4rem]">
          <div className="pb-2">
            <img style={{width: 670}} src="/ban2.jpg"/>
          </div>
            {/* <div className="flex gap-3">
              <img style={{width: 330}} src="/v1.jpg"/>
              <img style={{width: 330}} src="/v2.jpg"/>
            </div> */}
        </div>
      </div>
      
    </section>
    // <section>
    //   
    

    // </section>
  );  
}


