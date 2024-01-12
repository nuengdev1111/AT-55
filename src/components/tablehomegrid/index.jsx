"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./tablehomegrid.module.scss";
import Head from 'next/head';
import ButtonUI from "../ui/button";
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
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Grid from '@mui/material/Grid';
import { FaFacebook } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { permanentRedirect, redirect } from "next/navigation";
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Breadcrumb from "../../components/breadcrumb";
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



const menu = [
  { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
];

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const selectType = [
  {
    name: "ผู้ใช้งานเว็บบอร์ด",
    value: "0",
  },
  {
    name: "ร้านค้า O-top",
    value: "1",
  },
];

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function LoginForm({ data }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };


  // const height = 44




  return (
    <Box className="mt-4 flex justify-center pb-9">
           <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
              {/* <Grid item xs={12} md={12}> */}
                  <div className={styles.movecard}>
                    <Card variant="outlined"  className={styles.cardmain}>
                    {/* <Card variant="outlined" className="translate-x-[-2rem] translate-y-[-8.7rem]" sx={{ maxWidth: 800, width: "100%" }}> */}
                      {/* <div className="pb-9">
                          <Breadcrumb menu={menu} />
                      </div> */}
                      <div className="pb-14">
                      <Card className={styles.card1}>
                      {/* <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200" sx={{ minWidth: 275 }}> */}
                      {/* <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200" sx={{ minWidth: 275 }}> */}
                          <CardContent className={styles.kard1}>
                              <div className="flex">
                                  <img  className={styles.logocard} src="/logoeservice.webp"/>
                                  {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                  Word of the Day
                                  </Typography> */}
                                  <Typography variant="h6" component="div">
                                      ช่วยลดการแพร่ระบาดของ COVID-19..
                                  </Typography>
                                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                  adjective
                                  </Typography>
                                  <Typography variant="body2">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                                  </Typography> */}
                              </div>
                              <Typography variant="h5" component="div">
                                  ยินดีต้อนรับเข้าสู่ One Stop Service
                              </Typography>
                              <br />
                              <Typography className={styles.textbott} variant="h8" component="div">
                                  ครบทุกงานบริการประชาชน สะดวกรวดเร็วตลอด 24 ชม.
                              </Typography>
                              <div className={styles.yellow}>
                                  <button class={styles.buttonyellow}>
                                      บริการยื่นคำร้องออนไลน์
                                  </button>
                              </div>
                              <div className="flex justify-between">
                                  <Typography className={styles.textunder} variant="h8" component="div">
                                      บริการยื่นคำร้องออนไลน์รูปแบบใหม่
                                  </Typography>
                                  <img className={styles.logocard2} src="/service.webp"/>
                              </div>
                          </CardContent>  
                          </Card>
                      </div>
                      <div className={styles.card2}>
                          <img className={styles.img2} src="/ss.jpg"/>
                      </div>
                    </Card>
                  </div>
              </Grid>
            </Grid>
    </Box>
  );
}
