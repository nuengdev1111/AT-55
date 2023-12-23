"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./tablehome.module.scss";
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

  const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '44rem',
    height: '34rem',
  };


  const myStyle = {
    borderCollapse: "collapse",
    width: "0px"
  };



  return (
    <Box className="mt-4 flex justify-center">
      <Card variant="outlined" className="xl:w-[750px] translate-x-[-2rem] translate-y-[-8.7rem] md:w-[550px]">
      {/* <Card variant="outlined" className="translate-x-[-2rem] translate-y-[-8.7rem]" sx={{ maxWidth: 800, width: "100%" }}> */}
        {/* <div className="pb-9">
            <Breadcrumb menu={menu} />
        </div> */}
        <div className="pb-14">
        <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200">
        {/* <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200" sx={{ minWidth: 275 }}> */}
        {/* <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200" sx={{ minWidth: 275 }}> */}
            <CardContent className="bg-gradient-to-r from-white-200 via-lightblue-200 to-blue-200">
                <div className="flex">
                    <img className="translate-x-[-2rem] translate-y-[-1rem]" src="/logoeservice.webp"/>
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
                <Typography className="pb-5" variant="h8" component="div">
                    ครบทุกงานบริการประชาชน สะดวกรวดเร็วตลอด 24 ชม.
                </Typography>
                <div className="pb-9">
                    <button class="bg-amber-300 text-white font-bold py-2 px-4 rounded w-47 h-12">
                        บริการยื่นคำร้องออนไลน์
                    </button>
                </div>
                <div className="flex justify-between">
                    <Typography className="pb-5" variant="h8" component="div">
                        บริการยื่นคำร้องออนไลน์รูปแบบใหม่
                    </Typography>
                    <img style={{height: 104, width: 190}} src="/service.webp"/>
                </div>
            </CardContent>  
            </Card>
        </div>
        <img src="/ss.jpg"/>
      </Card>
    </Box>
  );
}
