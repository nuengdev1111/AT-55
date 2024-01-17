"use client";
import styled from "./imgCamera.module.scss";
import Child from "../../../public/Child.json";
import Box from '@mui/material/Box';
import Lottie from "lottie-react";
import Grid from '@mui/material/Grid';




export default function ImageHome() {
    return (
      
            <Grid item xs={12} md={6} sm={2}>
                
                    <div className={styled.moveCamera}>
                        <img className={styled.camImg} src="/left_side.png"/>
                        <div className={styled.animationbox2}>
                            <img className={styled.leftCam} src="/left_camera.png"/>
                        </div>
                    </div>
                    <div className={styled.moveCamera2}>
                        <img className={styled.camImg2} src="/right_side.png"/>
                        <div className={styled.animationbox2}>
                            <img className={styled.leftCam2} src="/right_camera.png"/>
                        </div>
                    </div>
                
                {/* <div className={styled.imgmain}>
                    <Lottie className={styled.img} loop={true} animationData={Child} />
                </div> */}
            </Grid>
    
    );
}
