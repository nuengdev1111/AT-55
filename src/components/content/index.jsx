"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#24caff',
  // borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));



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
            <h2 style={{fontSize: 40}} className="font-bold text-cyan-300 translate-x-[7.7rem] translate-y-[-75.4rem] pb-1">ประกาศประชุมสภา</h2>
            <br />
            <h4 style={{fontSize: 26}} className="font-bold text-black translate-x-[7.7rem] translate-y-[-77.4rem]">เทศบาลตำบลแพรกษา</h4>
          </div>
        </div>
        <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-76.8rem]">  
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
                  </div>
                  <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-75.4rem]">  
                    <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                    &nbsp;
                    <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-325px)"}} src="/prolit.webp"/>
                    <p className="translate-x-[-28.7rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
                  </div>
                  <div className="flex gap-40 translate-x-[-0.1rem] translate-y-[-74.7rem]">  
                    <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className="translate-x-[-8.7rem]">ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                    &nbsp;
                    <img style={{height: 87, width: 107, borderRadius: 12, transform: "translateX(-211px)"}} src="/prolit.webp"/>
                    <p className="translate-x-[-21.5rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
              <Stack spacing={2} direction="row">
                <BootstrapButton className="translate-x-[-65rem] translate-y-[8rem] bg-black" style={{height: 34, width: 100, borderRadius: 17}} variant="contained" disableRipple>
                  <p style={{fontSize: 13}}>
                    ดูทั้งหมด  
                  </p>
                </BootstrapButton>
                <BootstrapButton className="translate-x-[-30rem] translate-y-[8rem] bg-black" style={{height: 34, width: 100, borderRadius: 17}} variant="contained" disableRipple>
                  <p style={{fontSize: 13}}>
                    ดูทั้งหมด
                  </p>
                </BootstrapButton>
              </Stack>
        </div>
      </div>
    </section>
    // <section>
    //   


    // </section>
  );  
}
