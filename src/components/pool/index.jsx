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
            </div>
            <div className="flex translate-x-[-4rem]">
              <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-64rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[0.4rem] translate-y-[-62.3em]" src="/ico2.webp"/>
            </div>
          </div>
          <div className="flex p-12">
            <div>
              <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-70rem]" src="/pool.webp"/>
              <img style={{height: 50,width: 65}} className="translate-x-[22.3rem] translate-y-[-76.5rem]" src="/ico3.png"/>
            </div>
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-70rem]" src="/pool.webp"/>
            <img style={{height: 50,width: 65}} className="translate-x-[-4rem] translate-y-[-70rem]" />
          </div>
          <div className="flex p-12">
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-76rem]" src="/pool.webp"/>
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-76rem]" src="/pool.webp"/>
          </div>
          <div className="flex p-12">
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-81rem]" src="/pool.webp"/>
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-81rem]" src="/pool.webp"/>
          </div>
          <div className="flex p-12">
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-87rem]" src="/pool.webp"/>
            <img style={{height: 130,width: 350}} className="translate-x-[20rem] translate-y-[-87rem]" src="/pool.webp"/>
          </div>
      </div>
    </section>
  );  
}
