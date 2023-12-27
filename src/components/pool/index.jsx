"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styled from "./pool.module.scss";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import {
  // Button,
  Card,
  Table,
  TextField,
  Link,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";




export default function LoginForm({ data }) {
 

  return (
    <Box className="w-[1200px] translate-x-[-145px]" sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {/* <Grid item xs={3}>
        
        </Grid> */}
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
          <Grid item xs={6}>
                <div className={styled.allcard}> 
                <div className="grid grid-cols-1  mx-auto gap-6">

                {/* <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"> */}
                {/* <div className="flex p-12"> */}
                  <div className={styled.card1}>
                    <img className={styled.pool1} src="/pool.webp"/>
                      <img className={styled.ico1} src="/ico1.webp"/>
                      <h2 className={styled.font1}>แจ้งเรื่อง<br />ร้องเรียนร้องทุกข์</h2>
                  </div>
                  <div className={styled.card2}>
                    <img className={styled.pool2} src="/pool.webp"/>
                    <img className={styled.ico2} src="/ico2.webp"/>
                    <h2 className={styled.font3}>รับเรื่องร้องเรียนการ<br />ทุจริตประพฤติมิชอบ</h2>
                  </div>
                {/* </div> */}
                {/* <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"> */}
                {/* <div className="flex p-12"> */}
                  <div className={styled.card3}>
                    <img className={styled.pool3} src="/pool.webp"/>
                    <h2 className={styled.font7}>คู่มือประชาชน</h2>
                    <img className={styled.ico3} src="/ico3.png"/>
                  </div>
                  <div className={styled.card4}>
                    <img className={styled.pool4} src="/pool.webp"/>
                      <h2 className={styled.font5}>เบี้ยยังชีพผู้สูงอายุ</h2>
                    <img className={styled.ico4} src="/rrt.webp"/>
                  </div>
                </div>
                
            </div>
          </Grid>
          <Grid item xs={6}>
              <div className={styled.allcard2}> 
                  <div className="grid grid-cols-1 mx-auto gap-6">
                        {/* <div className="flex p-12"> */}
                          <div className={styled.card5}>
                            <img className={styled.pool5} src="/pool.webp"/>
                            <img className={styled.ico5} src="/jib.webp"/>
                            <h4 className={styled.font2}>แบบสอบถามความพึงพอใจ</h4>
                          </div>
                          <div className={styled.card6}>
                            <img className={styled.pool6} src="/pool.webp"/>
                            <img className={styled.ico6} src="/hjk.webp"/>
                            <h2 className={styled.font8}>เบี้ยยังชีพคนพิการ</h2>
                          </div>
                        {/* </div> */}
                          {/* <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"> */}
                            {/* <div className="flex p-12"> */}
                            <div className={styled.card7}>
                              <img className={styled.pool7} src="/pool.webp"/>
                              <img className={styled.ico7} src="/ipe.webp"/>
                              <h2 className={styled.font4}>ระบบสารสนเทศสนับสนุน<br/>การบริหารจัดการ</h2>
                            </div>
                            <div className={styled.card8}>
                              <img className={styled.pool8} src="/pool.webp"/>
                              <img className={styled.ico8} src="/iiu.webp"/>
                              <h2 className=" text-black font-bold">One&nbsp;Stop&nbsp;Service</h2>
                          </div>
                        </div>
                    </div>
          </Grid>
        {/* </Grid> */}
      </Grid>
    </Box>
  );  
}
