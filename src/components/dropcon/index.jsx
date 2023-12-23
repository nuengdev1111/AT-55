"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
// import styles from "./tablehome.module.scss";
import Head from 'next/head';
import ButtonUI from "../ui/button";
import {
  Box,
  // Button,
  Card,
  Table,
  TextField,
  Link,
//   Typography,
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



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
    <div style={{width: 670}} className="translate-x-[24rem] translate-y-[-7rem]">
        {/* <Breadcrumb /> */}
        <h1 style={{fontSize: 30}}>ระบบบริการออนไลน์</h1>
        <div className="grid gap-5">
            <Accordion>
                <AccordionSummary
                    style={{background: "#7DA7E8"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>บริการให้คำปรึกษาด้านกฎหมายที่เกี่ยวข้องกับท้องถิ่น</Typography>
                </AccordionSummary>
                <AccordionDetails style={{background: "#7DA7E8"}}>
                <Typography>
                    ภาษีที่ดินและสิ่งก่อสร้าง
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    style={{background: "#7DA7E8"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>บริการขอข้อมูลข่าวสารขององต์การบริหารส่วนตำบล</Typography>
                </AccordionSummary>
                <AccordionDetails style={{background: "#7DA7E8"}}>
                <Typography>
                    ภาษีป้าย
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
