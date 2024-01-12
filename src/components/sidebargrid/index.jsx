



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

        <Container maxWidth="lg">

            <Grid container rowSpacing={{ xs: 12, sm: 12, md: 12 }} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>

                <Grid item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>

                    {/* <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={2}>
             <Grid item xs={3}> */}
                    <div className={styles.cardall2}>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                คณะผู้บริหารและบุคลากร
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" /> */}
                                {/* คณะผู้บริหารและบุคลากร<img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                แผนพัฒนาท้องถิ่น
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" /> */}
                                {/* แผนพัฒนาท้องถิ่น<img style={{ height: 49, width: 48, transform: "translateX(23px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                ข้อมูลพื้นฐาน
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(37px)" }} src="/iconbut.webp" /> */}
                                {/* ข้อมูลพื้นฐาน<img style={{ height: 49, width: 48, transform: "translateX(37px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                รายงานผลการดำเนินการ
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                                {/* รายงานผลการดำเนินการ<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                จัดซื้อ-จัดจ้าง
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(36px)" }} src="/iconbut.webp" /> */}
                                {/* จัดซื้อ-จัดจ้าง<img style={{ height: 49, width: 48, transform: "translateX(36px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                กฏหมายที่เกี่ยวข้อง
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                                {/* กฏหมายที่เกี่ยวข้อง<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                การควบคุมภายใน
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(25px)" }} src="/iconbut.webp" /> */}
                                {/* การควบคุมภายใน<img style={{ height: 49, width: 48, transform: "translateX(25px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                คู่มือมาตรฐานการให้บริการ
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                                {/* คู่มือมาตรฐานการให้บริการ<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                การบริหารทรัพยากรบุคคล
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                                {/* การบริหารทรัพยากรบุคคล<img style={{ height: 49, width: 48, transform: "translateX(24px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                การให้บริการ
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(39px)" }} src="/iconbut.webp" /> */}
                                {/* การให้บริการ<img style={{ height: 49, width: 48, transform: "translateX(39px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                        <div className={styles.none}>
                            {/* <Button className={styles.buttonmain} variant="contained" size="medium"> */}
                                นโยบาย No Gift Policy
                                {/* <img style={{ height: 49, width: 48, transform: "translateX(22px)" }} src="/iconbut.webp" /> */}
                                {/* นโยบาย No Gift Policy<img style={{ height: 49, width: 48, transform: "translateX(22px)" }} src="/iconbut.webp" /> */}
                            {/* </Button> */}
                        </div>
                    </div>



                </Grid>


                <Grid item xs={12} sm={9}>
                {/* <Grid item xs={12} sm={9}> */}

                    {children}

                </Grid>


            </Grid>





        </Container>




    );
}




