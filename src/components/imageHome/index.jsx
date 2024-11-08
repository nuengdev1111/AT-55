"use client";
import styled from "./image-home.module.scss";
import Child from "../../../public/Child.json";
import Box from '@mui/material/Box';
import Lottie from "lottie-react";
import Grid from '@mui/material/Grid';



export default function ImageHome() {
    return (
      
            <Grid item xs={12} md={6} sm={2}>
                <div className={styled.animationbox}>
                    <img className={styled.carA} src="/car_a.png"/>
                </div>
                {/* <div className={styled.imgmain}>
                    <Lottie className={styled.img} loop={true} animationData={Child} />
                </div> */}
            </Grid>
    
    );
}
