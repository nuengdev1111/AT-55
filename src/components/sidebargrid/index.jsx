// import { Container } from "@mui/material";
// import Header from "../../components/header";
// import Breadcrumb from "../../components/breadcrumb";
// import LoginForm from "../../components/login";
// import styles from "./sidebar.module.scss";
// import Image from 'next/image'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tablehome from "../../components/tablehome";
// import Banner from "../../components/banner";
// import styled from "./sidebar.module.scss";
// import Pool from "../../components/pool";
// import Content from "../../components/content";
// import MiddleH from "../../components/middlehome";
// import Cardcard from "../../components/cardcard";
// import Gallery from "../../components/gallery";
// import Gallery2 from "../../components/gallery2";
// import Gallery3 from "../../components/gallery3";
// import Gallery4 from "../../components/gallery4";
// import Tablefoot from "../../components/tablefoot";
// import Fourhome from "../../components/fourhome";
// import Formbutt from "../../components/formbutt";
// import Googlemap from "../../components/googlemap";
// import Dropcon from "../../components/dropcon";
// import pool2 from "../../components/pool2";
// import Grid from '@mui/material/Grid';
// import CardContent from '@mui/material/CardContent';
// import {
//     Button,
//     Card,
//     Table,
//     TextField,
//     Link,
//     Typography,
//     OutlinedInput,
//     InputAdornment,
//     IconButton,
// } from "@mui/material";



// export default function Sidebar({ children }) {
//     return (

//         <Box className={styles.boxSidebar}>

//         <Grid container spacing={2}>
      
//           <Grid item xs={12} sm={3}>
//             <div className="space-y-[24px]">
           

//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         คณะผู้บริหารและบุคลากร
//                                         <img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" />
//                                     </Button>
                               
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         แผนพัฒนาท้องถิ่น<img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" />
//                                     </Button>
                                
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         ข้อมูลพื้นฐาน<img style={{ height: 49, width: 48, transform: "translateX(37px)" }} src="/iconbut.webp" />
//                                     </Button>
                                  
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, width: 185, height: 46 }} variant="contained" size="medium">
//                                         รายงานผลการดำเนินการ<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
//                                     </Button>
                              
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         จัดซื้อ-จัดจ้าง<img style={{ height: 49, width: 48, transform: "translateX(36px)" }} src="/iconbut.webp" />
//                                     </Button>
                                 
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         การใช้จ่ายงบประมาณ<img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" />
//                                     </Button>
                                   
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         กฏหมายที่เกี่ยวข้อง<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
//                                     </Button>
                                  
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         การควบคุมภายใน<img style={{ height: 49, width: 48, transform: "translateX(25px)" }} src="/iconbut.webp" />
//                                     </Button>
                                   
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         คู่มือมาตรฐานการให้บริการ<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
//                                     </Button>
                                   
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         <p style={{ fontSize: 8, transform: "translateY(73px)" }}>ประกาศ กำหนดจำนวนครั้งการลาและ<br />การมาทำงานสายในการปฏิบัติหน้าที่
//                                             ราชการ<br /> ประจำปีงบประมาณ พ.ศ. 2565<img style={{ height: 49, width: 48, marginBottom: 188, transform: "translateX(122px)" }} src="/iconbut.webp" /></p>
//                                     </Button>
                                 
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         การบริหารทรัพยากรบุคคล<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
//                                     </Button>
                                    
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         การให้บริการ<img style={{ height: 49, width: 48, transform: "translateX(39px)" }} src="/iconbut.webp" />
//                                     </Button>
                                 
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         กิจการสภา<img style={{ height: 49, width: 48, transform: "translateX(45px)" }} src="/iconbut.webp" />
//                                     </Button>
                               
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         <p style={{ fontSize: 9 }}>ประกาศสภาองค์การ<br />บริหารส่วนตำบลบางเสาธง</p><img style={{ height: 49, width: 48, transform: "translateX(27px)" }} src="/iconbut.webp" />
//                                     </Button>
                                 
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         เกี่ยวกับ อบต.<img style={{ height: 49, width: 48, transform: "translateX(36px)" }} src="/iconbut.webp" />
//                                     </Button>
                                 
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         <p style={{ fontSize: 9 }}>แบบเสนอปัญหาและ<br />ความต้องการของประชาชน</p><img style={{ height: 49, width: 48, transform: "translateX(28px)" }} src="/iconbut.webp" />
//                                     </Button>
                             
//                                     <Button className="xl: w-[180px] sm: w-[110px]" style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
//                                         นโยบาย No Gift Policy<img style={{ height: 49, width: 48, transform: "translateX(22px)" }} src="/iconbut.webp" />
//                                     </Button>

//             </div>
//           </Grid>
      
//           <Grid item xs={12} sm={9}>
//             {children}
//           </Grid>
      
//         </Grid>
      
//       </Box>
      

//     );
// }








import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import LoginForm from "../../components/login";
import styles from "./sidebargrid.module.scss";
import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tablehome from "../../components/tablehome";
import Banner from "../../components/banner";
// import styled from "./sidebar.module.scss";
import Pool from "../../components/pool";
import Content from "../../components/content";
import MiddleH from "../../components/middlehome";
import Cardcard from "../../components/cardcard";
import Gallery from "../../components/gallery";
import Gallery2 from "../../components/gallery2";
import Gallery3 from "../../components/gallery3";
import Gallery4 from "../../components/gallery4";
import Tablefoot from "../../components/tablefoot";
import Fourhome from "../../components/fourhome";
import Formbutt from "../../components/formbutt";
import Googlemap from "../../components/googlemap";
import Dropcon from "../../components/dropcon";
import pool2 from "../../components/pool2";
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import {
    Button,
    Card,
    Table,
    TextField,
    Link,
    Typography,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";



export default function Sidebar({ children }) {
    return (

       

            <Grid container rowSpacing={{ xs: 12, sm: 12, md: 12 }} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>


                <Grid item xs={3} sm={4} md={3}>

                    {/* <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={2}>
             <Grid item xs={3}> */}
                    <div className="space-y-[24px]">
                        <div className="d-flex relative">

                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                คณะผู้บริหารและบุคลากร
                                <img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                แผนพัฒนาท้องถิ่น<img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                ข้อมูลพื้นฐาน<img style={{ height: 49, width: 48, transform: "translateX(37px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, width: 185, height: 46 }} variant="contained" size="medium">
                                รายงานผลการดำเนินการ<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                จัดซื้อ-จัดจ้าง<img style={{ height: 49, width: 48, transform: "translateX(36px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                การใช้จ่ายงบประมาณ<img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                กฏหมายที่เกี่ยวข้อง<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                การควบคุมภายใน<img style={{ height: 49, width: 48, transform: "translateX(25px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                คู่มือมาตรฐานการให้บริการ<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                <p style={{ fontSize: 8, transform: "translateY(73px)" }}>ประกาศ กำหนดจำนวนครั้งการลาและ<br />การมาทำงานสายในการปฏิบัติหน้าที่
                                    ราชการ<br /> ประจำปีงบประมาณ พ.ศ. 2565<img style={{ height: 49, width: 48, marginBottom: 188, transform: "translateX(122px)" }} src="/iconbut.webp" /></p>
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                การบริหารทรัพยากรบุคคล<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                การให้บริการ<img style={{ height: 49, width: 48, transform: "translateX(39px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                กิจการสภา<img style={{ height: 49, width: 48, transform: "translateX(45px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                <p style={{ fontSize: 9 }}>ประกาศสภาองค์การ<br />บริหารส่วนตำบลบางเสาธง</p><img style={{ height: 49, width: 48, transform: "translateX(27px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                เกี่ยวกับ อบต.<img style={{ height: 49, width: 48, transform: "translateX(36px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                <p style={{ fontSize: 9 }}>แบบเสนอปัญหาและ<br />ความต้องการของประชาชน</p><img style={{ height: 49, width: 48, transform: "translateX(28px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                        <div>
                            <Button className={styles.buttonmain} style={{ borderRadius: 22, height: 46 }} variant="contained" size="medium">
                                นโยบาย No Gift Policy<img style={{ height: 49, width: 48, transform: "translateX(22px)" }} src="/iconbut.webp" />
                            </Button>
                        </div>
                    </div>


                    {/* </Grid>
             <Grid item xs={9}> */}




             
                    {/* <Box className=""> */}
                        {/* <Box className="mt-4 flex justify-center"> */}
                        {/* <Card variant="outlined" > */}
                            {/* <Card variant="outlined" className="translate-x-[-2rem] translate-y-[-8.7rem]" sx={{ maxWidth: 800, width: "100%" }}> */}
                            {/* <div className="pb-9">
                             <Breadcrumb menu={menu} />
                         </div> */}
                            {/* <div className={styled.cardmain}>
                                <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200"> */}
                                    {/* <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200" sx={{ minWidth: 275 }}> */}
                                    {/* <Card className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200" sx={{ minWidth: 275 }}> */}
                                    {/* <CardContent className="bg-gradient-to-r from-white-200 via-lightblue-200 to-blue-200">
                                        <div className="flex">
                                            <img src="/logoeservice.webp" /> */}
                                            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                     Word of the Day
                                     </Typography> */}
                                            {/* <Typography variant="h6" component="div">
                                                ช่วยลดการแพร่ระบาดของ COVID-19..
                                            </Typography> */}
                                            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                     adjective
                                     </Typography>
                                     <Typography variant="body2">
                                     well meaning and kindly.
                                     <br />
                                     {'"a benevolent smile"'}
                                     </Typography> */}
                                        {/* </div>
                                        <Typography variant="h5" component="div">
                                            ยินดีต้อนรับเข้าสู่ One Stop Service
                                        </Typography>
                                        <br />
                                        <Typography className="pb-5" variant="h8" component="div">
                                            ครบทุกงานบริการประชาชน สะดวกรวดเร็วตลอด 24 ชม.
                                        </Typography>
                                        <div className="pb-9">
                                            <button class="bg-amber-300 text-white font-bold py-2 px-4 rounded">
                                                บริการยื่นคำร้องออนไลน์
                                            </button>
                                        </div>
                                        <div className="flex justify-between">
                                            <Typography className="pb-5" variant="h8" component="div">
                                                บริการยื่นคำร้องออนไลน์รูปแบบใหม่
                                            </Typography>
                                            <img style={{ height: 104, width: 190 }} src="/service.webp" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                        </Card>
                    </Box> */}




                    {/* </Grid>
             <Grid item xs={9}>
                 <div className={styled.cardsecons}>
                     <img className="" src="/ss.jpg"/>
                 </div>
             </Grid>
             </Grid> */}
                    {/* </Box> */}


                </Grid>


                <Grid item xs={9}>

                    {children}

                </Grid>


            </Grid>


    







    );
}




