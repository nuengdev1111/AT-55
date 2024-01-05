"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";
import {Grid, Button} from '@mui/material';
import styles from "./gallery4.module.scss";



export default function LoginForm({ data }) {
 

  return (
    


    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <div className={styles.allgallery}> 
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
                  {/* <div className="flex justify-center gap-7 translate-x-[9.1rem] translate-y-[-50.4rem]"> */}
                    <div>
                        <h3 className="translate-x-[-20.4rem] font-bold">Facebook Page</h3>
                        <img style={{height: 237, width: 347, transform: "translateX(-325px)"}} src="/fbpage.png"/>
                    </div>
                    <div>
                        <h3 className="translate-x-[-13.5rem] font-bold">Line Official</h3>
                        <img style={{height: 237, width: 347, transform: "translateX(-325px)"}} src="/linet.jpg"/>  
                        {/* <p className="translate-x-[-28.7rem]">ระเบียบวาระการประชุมสภาเทศบาลตำบลแพรกษา สมัยสามัญ สมัยที่ 3 ประจำปี พ.ศ.2566 ( ดู 1 ครั้ง )</p> */}
                    </div>
                  {/* </div> */}
      </div>  
        </Grid>
    </Box>
    // <section>
    //   


    // </section>
  );  
}
