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




  return (
    <Box className="mt-4 flex justify-center pb-9">
    <Card variant="outlined" className="w-full md:max-w-2xl">
      <div className="pb-14">
        <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200">
          <CardContent className={styles.card1}>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img src="/logoeservice.webp" className="mb-4 md:mb-0 md:mr-4" />
              <div className="flex flex-col">
                <Typography variant="h6" component="div">
                  ช่วยลดการแพร่ระบาดของ COVID-19..
                </Typography>
                <Typography variant="h5" component="div" className="mt-2">
                  ยินดีต้อนรับเข้าสู่ One Stop Service
                </Typography>
                <Typography variant="h8" component="div" className="mt-2">
                  ครบทุกงานบริการประชาชน สะดวกรวดเร็วตลอด 24 ชม.
                </Typography>
                <div className="mt-4">
                  <button className="bg-amber-300 text-white font-bold py-2 px-4 rounded">
                    บริการยื่นคำร้องออนไลน์
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 md:mt-0">
              <Typography variant="h8" component="div">
                บริการยื่นคำร้องออนไลน์รูปแบบใหม่
              </Typography>
              <img
                style={{ height: 104, width: 190 }}
                src="/service.webp"
                className="hidden md:block"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <img src="/ss.jpg" className="w-full" />
    </Card>
  </Box>
  );
}
