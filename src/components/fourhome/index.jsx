"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './fourhome.module.scss';
import { purple } from '@mui/material/colors';
import Marquee from "react-fast-marquee";
import {
  Box,
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
import {Grid} from '@mui/material';


export default function LoginForm({ data }) {
 

  return (
    // <section className={`flex md:flex-row flex-col`}>
      
    // </section>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        {/* <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6">  */}
            <button className="flex absolute ml-[149px] bg-blue-500 shadow-lg shadow-blue-700/50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full translate-y-[1931px]">
                หน่วยงานที่เกี่ยวข้อง
            </button>
          
            <div className={styles.slider1}>
                {/* <Marquee> */}
                <Marquee style={{width: "75%", marginLeft: "180px"}}>
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
          {/* </div> */}
        </Grid>
      </Grid>
    </Box>
    // <section>
    //   


    // </section>
  );  
}
