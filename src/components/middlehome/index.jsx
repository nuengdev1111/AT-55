"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styled from "./middlehome.module.scss";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';




export default function LoginForm({ data }) {
 

  return (

    <Grid container rowSpacing={{ xs: 12, sm: 4, md: 6 }}>
    {/* <Grid container spacing={2}> */}
      <Grid item xs={12} md={9} sm={4}>
        <h2 className={styled.fonte}>E-Service</h2>
        {/* <h2 style={{fontSize: 33}} className="text-black font-bold pb-4 ">E-Service</h2> */}
        <div className={styled.eservice}> 
        
          {/* <div className=""> */}
            <div className="ml-[150px] mb-[-176px]">
              <img className={styled.serimg} src="/ban2.jpg"/>
              {/* <img style={{width: 670}} src="/ban2.jpg"/> */}
            </div>
              {/* <div className="flex gap-3">
                <img style={{width: 330}} src="/v1.jpg"/>
                <img style={{width: 330}} src="/v2.jpg"/>
              </div> */}
          {/* </div> */}
        </div>
      </Grid>
    </Grid>

  );  
}


