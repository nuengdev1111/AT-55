"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
import {Grid, Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Typography } from "@mui/material";


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
    // <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {/* <Grid container spacing={2}> */}
      <Grid item xs={12} sm={6}>
      <div className={styles.contentall}> 
        <div className="flex space-x-[143px]">
          <div>
              <h2 style={{fontSize: 40}} className="font-bold text-cyan-300 pb-1">ข่าวประชาสัมพันธ์</h2>
              <br />
              <h4 style={{fontSize: 26}} className="font-bold text-black ">เทศบาลตำบลแพรกษา</h4>
          </div>
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
          <div className={styles.header1}>
            <h2 style={{fontSize: 40}} className="font-bold text-cyan-300 pb-1">ประกาศประชุมสภา</h2>
            <br />
            <h4 style={{fontSize: 26}} className="font-bold text-black ">เทศบาลตำบลแพรกษา</h4>
          </div>
        </div>
        <div className="flex gap-40 ">
              <div className="pb-7">
                  <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                  <p className={styles.content5}>ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                  </div>  
                    
                    &nbsp;
                    {/* <div> */}
                    <div>
                  <img className={styles.img1} style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                  <p className={styles.content1}>ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา <br/>สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
              </div>
                  </div>
                  <div className="pb-7">
                    <div className="flex gap-40 ">  
                      <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                        <p className={styles.content6}>ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                      &nbsp;
                      <img className={styles.img2} style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className={styles.content2}>ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา <br/>สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
                    </div>
                  </div>
                 
                 <div className="pb-7">
                  <div className="flex gap-40 ">  
                      <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                        <p className={styles.content7}>ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                      &nbsp;
                      <img className={styles.img3} style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className={styles.content3}>ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา <br/>สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
                    </div>
                 </div>
                 
                  <div className="flex gap-40 ">  
                    <img style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                      <p className={styles.content8}>ประกาศรายชื่อการสรรหาพนักงานจ้าง 2566</p>
                    &nbsp;
                    <img className={styles.img4} style={{height: 87, width: 107, borderRadius: 12}} src="/prolit.webp"/>
                    <p className={styles.content4}>ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p>
              
        </div>
        <Stack  spacing={2} direction="row">
                <BootstrapButton className={styles.stack1} style={{height: 34, width: 100, borderRadius: 17}} variant="contained" disableRipple>
                  <p style={{fontSize: 13}}>
                    ดูทั้งหมด  
                  </p>
                </BootstrapButton>
                <BootstrapButton className={styles.stack2} style={{height: 34, width: 100, borderRadius: 17}} variant="contained" disableRipple>
                  <p style={{fontSize: 13}}>
                    ดูทั้งหมด
                  </p>
                </BootstrapButton>
              </Stack>
      </div>
      </Grid>
    </Grid>

  );  
}
