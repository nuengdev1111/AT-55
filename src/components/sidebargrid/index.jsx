



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
                    <div className={styles.cardall2}>
                        <div className={styles.none}>
                                คณะผู้บริหารและบุคลากร
                        </div>
                        <div className={styles.none}>
                                แผนพัฒนาท้องถิ่น
                        </div>
                        <div className={styles.none}>
                                ข้อมูลพื้นฐาน
                        </div>
                        <div className={styles.none}>
                                รายงานผลการดำเนินการ
                        </div>
                        <div className={styles.none}>
                                จัดซื้อ-จัดจ้าง
                        </div>
                        <div className={styles.none}>
                                กฏหมายที่เกี่ยวข้อง
                        </div>
                        <div className={styles.none}>
                                การควบคุมภายใน
                        </div>
                        <div className={styles.none}>
                                คู่มือมาตรฐานการให้บริการ
                        </div>
                        <div className={styles.none}>
                                การบริหารทรัพยากรบุคคล
                        </div>
                        <div className={styles.none}>
                                การให้บริการ
                        </div>
                        <div className={styles.none}>
                                นโยบาย No Gift Policy
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




