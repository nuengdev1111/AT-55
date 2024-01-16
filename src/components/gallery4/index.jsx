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
          <Grid item xs={12}>
              <div className={styles.allgallery}> 
                  <div className={styles.imageone}>
                      <h3 className={styles.menuone}>Facebook Page</h3>
                      <img className={styles.imgone} src="/fbpage.png"/>
                  </div>
                  <div className={styles.imagetwo}>
                      <h3 className={styles.menutwo}>Line Official</h3>
                      <img className={styles.imgtwo} src="/linet.jpg"/>  
                  </div>
              </div>  
            </Grid>
        </Grid>
    </Box>
    // <section>
    //   


    // </section>
  );  
}
