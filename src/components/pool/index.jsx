"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styled from "./pool.module.scss";
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
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <div className={styled.allcard}>
          <div className="grid grid-cols-1 mx-auto gap-6">
            <div className={styled.card1}>
              <img className={styled.pool1} src="/pool1.jpg" />
            </div>
            <div className={styled.card2}>
              <img className={styled.pool2} src="/pool2.jpg" />
            </div>
            <div className={styled.card3}>
              <img className={styled.pool3} src="/pool3.jpg" />
            </div>
            <div className={styled.card4}>
              <img className={styled.pool4} src="/pool4.jpg" />
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={styled.allcard2}>
          <div className="grid grid-cols-1 mx-auto gap-6 w-full">
            <div className={styled.card5}>
              <img className={styled.pool5} src="/pool5.jpg" />
            </div>
            <div className={styled.card6}>
              <img className={styled.pool6} src="/pool6.jpg" />
            </div>
            <div className={styled.card7}>
              <img className={styled.pool7} src="/pool7.jpg" />
            </div>
            <div className={styled.card8}>
              <img className={styled.pool8} src="/pool9.jpg" />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </Box>
  
  );  
}
