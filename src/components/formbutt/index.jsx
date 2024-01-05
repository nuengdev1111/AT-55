"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";
import styles from './formbutt.module.scss';
import {Grid, Button} from '@mui/material';



export default function LoginForm({ data }) {
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
    
              <div className={styles.formAll}> 
                    <form
                    className="inline-flex items-center shadow-lg shadow-gray-500/20">
                    {/* <button
                        type="text"
                        className="bg-blue-100"
                        style={{width: 300,marginBottom:0,paddingLeft:0}}
                    >
                        </button> */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-4 px-6 whitespace-nowrap rounded-l-lg">
                            <p style={{fontSize: 8}}>จำนวน<br/>ผู้เข้าชมเว็บไซต์</p>
                        </button>
                        <button
                            style={{width: 300}}
                            type="submit"
                            className="bg-blue-100 text-white py-4 px-6 whitespace-nowrap">
                            <p className="text-black">ขณะนี้&nbsp;&nbsp;&nbsp;วันนี้&nbsp;&nbsp;&nbsp;สัปดาห์นี้&nbsp;&nbsp;&nbsp;เดือนนี้&nbsp;&nbsp;&nbsp;ปีนี้</p>
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-4 px-6 rounded-r-lg">
                            ทั้งหมด
                        </button>
                    </form>
              </div>

        </Grid>
      </Grid>
    </Box>
    // <section>
    //   


    // </section>
  );  
}
