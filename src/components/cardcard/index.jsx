"use client";
import { useState, useEffect } from "react";
// import { redirect } from "next/navigation";
// import styles from "./tablehome.module.scss";
import Head from 'next/head';
import ButtonUI from "../ui/button";
import YouTube from 'react-youtube';
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
  const [player, setPlayer] = useState(null);

  const opts = {
    height: '250',
    width: '440',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    setPlayer(event.target);
  };

  useEffect(() => {
    if (player) {
      player.pauseVideo();
    }
  }, [player]);

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
      <h1 style={{fontSize: 28}} className="w-[200px] translate-x-[28.5rem] translate-y-[-85rem] font-bold">แหล่งเรียนรู้</h1>
      <Card variant="outlined" style={{height: 400}} className="translate-x-[-6.6rem] translate-y-[-79.7rem]" sx={{ maxWidth: 1100, width: "100%" }}>
        {/* <div className="pb-9">
            <Breadcrumb menu={menu} />
        </div> */}
        <div className="pb-14">
        <Card style={{height: 400}} sx={{ minWidth: 275 }}>
            <CardContent className="flex gap-20 bg-gradient-to-t from-white to-blue-400">
                <YouTube className="translate-y-[2.7rem]" videoId="ZLxjih6ooXA?si=Jv969klX1IKS2WPC" opts={opts} onReady={onReady} />
                <div className="translate-y-[2rem]">
                    <Typography variant="h4" component="div">
                        การลงทะเบียนเพื่อสวัสดิการ
                    </Typography>
                    <Typography className="pb-9" variant="h4" component="div">
                        แห่งรัฐ สมุทรปราการ ปี 2565
                    </Typography>
                   <p className="text-center">เริ่มลงทะเบียน ตั้งเเต่วันที่ 5 กันยายน - 19 ตุลาคม 2565<br/> *โปรดตรวจสอบและเตรียมบัตรประจำตัวประชาชนตัวจริง<br/>แบบสมาร์ทการ์ดให้พร้อม</p>
                </div>
                {/* <Typography variant="h5" component="div">
                    ยินดีต้อนรับเข้าสู่ One Stop Service
                </Typography>
                <br />
                <Typography className="pb-5" variant="h8" component="div">
                    ครบทุกงานบริการประชาชน สะดวกรวดเร็วตลอด 24 ชม.
                </Typography> */}
            </CardContent>  
            </Card>
        </div>
      </Card>
    </Box>
  );
}
