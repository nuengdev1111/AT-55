"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styled from "./poolgrid.module.scss";
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
    <Box className="" sx={{ flexGrow: 1 }}>
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 2 }} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
      <Grid item xs={12} md={6}>
        <div className={styled.allcard}>
          <div className="grid grid-cols-1 mx-auto gap-6">
            <div className={styled.card1}>
              <img className={styled.pool1} src="/pool.webp" />
              <img className={styled.ico1} src="/ico1.webp" />
              <h2 className={styled.font1}>แจ้งเรื่อง<br />ร้องเรียนร้องทุกข์</h2>
            </div>
            {/* <div className={styled.card1} style={{ position: 'relative' }}>
              <img className={styled.pool1} src="/pool.webp" style={{ position: 'relative', zIndex: '1' }} />
              <img className={styled.ico1} src="/ico1.webp" style={{ position: 'relative', zIndex: '2' }} />
              <h2 className={styled.font1} style={{ position: 'relative', zIndex: '3' }}>แจ้งเรื่อง<br />ร้องเรียนร้องทุกข์</h2>
            </div> */}
            <div className={styled.card2}>
              <img className={styled.pool2} src="/pool.webp" />
              <img className={styled.ico2} src="/ico2.webp" />
              <h2 className={styled.font2}>รับเรื่องร้องเรียนการ<br />ทุจริตประพฤติมิชอบ</h2>
            </div>
            <div className={styled.card3}>
              <img className={styled.pool3} src="/pool.webp" />
              <img className={styled.ico3} src="/ico3.png" />
              <h2 className={styled.font3}>คู่มือประชาชน</h2>
            </div>
            <div className={styled.card4}>
              <img className={styled.pool4} src="/pool.webp" />
              <img className={styled.ico4} src="/rrt.webp" />
              <h2 className={styled.font4}>เบี้ยยังชีพผู้สูงอายุ</h2>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={styled.allcard2}>
          <div className="grid grid-cols-1 mx-auto gap-6 w-full">
            <div className={styled.card5}>
              <img className={styled.pool5} src="/pool.webp" />
              <img className={styled.ico5} src="/jib.webp" />
              <h4 className={styled.font5}>แบบสอบถามความพึงพอใจ</h4>
            </div>
            <div className={styled.card6}>
              <img className={styled.pool6} src="/pool.webp" />
              <img className={styled.ico6} src="/hjk.webp" />
              <h2 className={styled.font6}>เบี้ยยังชีพคนพิการ</h2>
            </div>
            <div className={styled.card7}>
              <img className={styled.pool7} src="/pool.webp" />
              <img className={styled.ico7} src="/ipe.webp" />
              <h2 className={styled.font7}>ระบบสารสนเทศสนับสนุน<br />การบริหารจัดการ</h2>
            </div>
            <div className={styled.card8}>
              <img className={styled.pool8} src="/pool.webp" />
              <img className={styled.ico8} src="/iiu.webp" />
              <h2 className={styled.font8}>One&nbsp;Stop&nbsp;Service</h2>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </Box>
  
  );  
}
