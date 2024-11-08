"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./content.module.scss";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import styles from "./googlemap.module.scss";



export default function LoginForm({ data }) {
 

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>  
          {/* <Grid item xs={12}> */}
          
              <div className={styles.googleAll}>
                <h1 className="translate-x-[3.6rem] translate-y-[-3rem] text-xl font-bold">แผนที่</h1>
                {/* <h1 className="text-head">แผนที่</h1> */}
                    {/* <div>  */}
                      {/* <div> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                          width="600"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      {/* </div> */}
                    {/* </div> */}
              </div>
              

          {/* </Grid> */}
        </Grid>
      </Box>
    // <section>
    //   


    // </section>
  );  
}
