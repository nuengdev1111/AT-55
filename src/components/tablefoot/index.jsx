// "use client";
// import { useState } from "react";
// // import { redirect } from "next/navigation";
// // import styles from "./tablehome.module.scss";
// import Head from 'next/head';
// import ButtonUI from "../ui/button";
// import {
//   Box,
//   // Button,
//   Card,
//   Table,
//   TextField,
//   Link,
//   Typography,
//   OutlinedInput,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { FaSignInAlt } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import styled from "./tablefoot.module.scss";
// import { permanentRedirect, redirect } from "next/navigation";
// // import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Breadcrumb from "../../components/breadcrumb";
// // import Link from '@mui/material/Link';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// import {Grid, Button} from '@mui/material';
// // import Typography from '@mui/material/Typography';



// const menu = [
//   { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
// ];

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
      
//     </Box>
//   );


// const selectType = [
//   {
//     name: "ผู้ใช้งานเว็บบอร์ด",
//     value: "0",
//   },
//   {
//     name: "ร้านค้า O-top",
//     value: "1",
//   },
// ];

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }


// export default function LoginForm({ data }) {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (event) => {
//   };

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (e) => {
//     e.preventDefault();
//   };


//   // const height = 44

//   const commonStyles = {
//     bgcolor: 'background.paper',
//     m: 1,
//     border: 1,
//     width: '44rem',
//     height: '34rem',
//   };


//   const myStyle = {
//     borderCollapse: "collapse",
//     width: "0px"
//   };



//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//         <Box className="mt-4 justify-center">
//          <h1 className={styled.text1}>สำหรับเจ้าหน้าที่</h1>
//            <div className={styled.content}>
          
//                     <Card variant="outlined" className={styled.card1}>
//                     {/* <Card variant="outlined" className="" sx={{ maxHeight: 160,maxWidth: 300, width: "100%" }}> */}
//                         {/* <div className="pb-9">
//                             <Breadcrumb menu={menu} />
//                         </div> */}
                        
//                         <div className="pb-14">
                          
//                         {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
//                             <CardContent className="bg-gradient-to-t from-white to-blue-400">
                              
//                                 <div className="flex">
                                    
//                                     {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                     Word of the Day
//                                     </Typography> */}
//                                     <img style={{height: 94}} src="/gi1.png"/>
//                                     <Typography className="font-bold" variant="h10" component="div">
//                                         สำหรับเจ้าหน้าที่ระบบบริการออนไลน์
//                                     </Typography>
//                                     {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                                     adjective
//                                     </Typography>
//                                     <Typography variant="body2">
//                                     well meaning and kindly.
//                                     <br />
//                                     {'"a benevolent smile"'}
//                                     </Typography> */}
//                                 </div>
                            
                            
//                             </CardContent>  
//                             {/* </Card> */}
//                         </div>
//                     </Card>
//                     <Card variant="outlined" className={styled.card2}>
//                         {/* <div className="pb-9">
//                             <Breadcrumb menu={menu} />
//                         </div> */}
//                         <div className="pb-14">
//                         {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
//                             <CardContent className="bg-gradient-to-t from-white to-blue-400">
//                                 <div className="flex">
//                                     {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                     Word of the Day
//                                     </Typography> */}
//                                     <img style={{height: 94}} src="/gi2.png"/>
//                                     <Typography className="font-bold" variant="h10" component="div">
//                                         สำหรับเจ้าหน้าที่ระบบ E-Office
//                                     </Typography>
//                                     {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                                     adjective
//                                     </Typography>
//                                     <Typography variant="body2">
//                                     well meaning and kindly.
//                                     <br />
//                                     {'"a benevolent smile"'}
//                                     </Typography> */}
//                                 </div>
                            
//                             </CardContent>  
//                             {/* </Card> */}
//                         </div>
//                     </Card>
//                     <Card variant="outlined" className={styled.card3}>
//                         {/* <div className="pb-9">
//                             <Breadcrumb menu={menu} />
//                         </div> */}
//                         <div className="pb-14">
//                         {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
//                             <CardContent className="bg-gradient-to-t from-white to-blue-400">
//                                 <div className="flex">
//                                     {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                     Word of the Day
//                                     </Typography> */}
//                                     <img style={{height: 94}} src="/gi3.png"/>
//                                     <Typography className="font-bold" variant="h10" component="div">
//                                     สำหรับเจ้าหน้าที่ระบบการบริหารและพัฒนาทรัพยากรบุคคล
//                                     </Typography>
//                                     {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                                     adjective
//                                     </Typography>
//                                     <Typography variant="body2">
//                                     well meaning and kindly.
//                                     <br />
//                                     {'"a benevolent smile"'}
//                                     </Typography> */}
//                                 </div>
                            
                            
//                             </CardContent>  
//                             {/* </Card> */}
//                         </div>
//                     </Card>
//       </div>
//       <br />
//       <Card variant="outlined" className={styled.card4} >
//         {/* <div className="pb-9">
//             <Breadcrumb menu={menu} />
//         </div> */}
//         <div className={styled.content2}>
//         {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
//             <CardContent className="bg-gradient-to-t from-white to-blue-400 rounded-xl translate-x-[3px] translate-y-[211px]">
//                 <div className="flex">
//                     {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                     Word of the Day
//                     </Typography> */}
//                     <img style={{height: 94}} src="/gi4.png"/>
//                     <Typography className="font-bold" variant="h10" component="div">
//                         สำหรับเจ้าหน้าที่จัดการเว็บไซต์
//                     </Typography>
//                     {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     adjective
//                     </Typography>
//                     <Typography variant="body2">
//                     well meaning and kindly.
//                     <br />
//                     {'"a benevolent smile"'}
//                     </Typography> */}
//                 </div>
               
               
//             </CardContent>  
//             {/* </Card> */}
//         </div>
//       </Card>
//     </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }









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
import styled from "./tablefoot.module.scss";
import { permanentRedirect, redirect } from "next/navigation";
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Breadcrumb from "../../components/breadcrumb";
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import {Grid, Button} from '@mui/material';
// import Typography from '@mui/material/Typography';



const menu = [
  { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
];

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Box className="mt-4 justify-center">
         <h1 style={{fontSize: 28}} className={styled.text1}>สำหรับเจ้าหน้าที่</h1>
           <div className={styled.content}>
          
                    <Card variant="outlined" className="" sx={{ maxHeight: 160,maxWidth: 300, width: "100%" }}>
                        {/* <div className="pb-9">
                            <Breadcrumb menu={menu} />
                        </div> */}
                        
                        <div className="pb-14">
                          
                        {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
                            <CardContent className="bg-gradient-to-t from-white to-blue-400">
                              
                                <div className="flex">
                                    
                                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                    </Typography> */}
                                    <img style={{height: 94}} src="/gi1.png"/>
                                    <Typography className={styled.font1} variant="h10" component="div">
                                        สำหรับเจ้าหน้าที่ระบบบริการออนไลน์
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
                            
                            
                            </CardContent>  
                            {/* </Card> */}
                        </div>
                    </Card>
                    <Card variant="outlined" className="" sx={{ maxHeight: 160,maxWidth: 300, width: "100%" }}>
                        {/* <div className="pb-9">
                            <Breadcrumb menu={menu} />
                        </div> */}
                        <div className="pb-14">
                        {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
                            <CardContent className="bg-gradient-to-t from-white to-blue-400">
                                <div className="flex">
                                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                    </Typography> */}
                                    <img style={{height: 94}} src="/gi2.png"/>
                                    <Typography className={styled.font2} variant="h10" component="div">
                                        สำหรับเจ้าหน้าที่ระบบ E-Office
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
                            
                            </CardContent>  
                            {/* </Card> */}
                        </div>
                    </Card>
                    <Card variant="outlined" className="" sx={{maxHeight: 160, maxWidth: 300, width: "100%" }}>
                        {/* <div className="pb-9">
                            <Breadcrumb menu={menu} />
                        </div> */}
                        <div className="pb-14">
                        {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
                            <CardContent className="bg-gradient-to-t from-white to-blue-400">
                                <div className="flex">
                                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                    </Typography> */}
                                    <img style={{height: 94}} src="/gi3.png"/>
                                    <Typography className={styled.font3} variant="h10" component="div">
                                    สำหรับเจ้าหน้าที่ระบบการบริหารและพัฒนาทรัพยากรบุคคล
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
                            
                            
                            </CardContent>  
                            {/* </Card> */}
                        </div>
                    </Card>
      </div>
      <br />
      <Card variant="outlined" className="rounded-xl" sx={{ maxHeight: 160,maxWidth: 300, width: "100%" }}>
        {/* <div className="pb-9">
            <Breadcrumb menu={menu} />
        </div> */}
        <div className={styled.content2}>
        {/* <Card className="bg-gradient-to-t from-white to-blue-400" sx={{ minWidth: 275 }}> */}
            <CardContent className="bg-gradient-to-t from-white to-blue-400 rounded-xl translate-x-[3px] translate-y-[211px]">
                <div className="flex">
                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography> */}
                    <img style={{height: 94}} src="/gi4.png"/>
                    <Typography className={styled.font4} variant="h10" component="div">
                        สำหรับเจ้าหน้าที่จัดการเว็บไซต์
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
               
               
            </CardContent>  
            {/* </Card> */}
        </div>
      </Card>
    </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

