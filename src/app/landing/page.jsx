import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
// import LoginForm from "../../components/login";
import styles from "./landing.module.scss";
import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tableflow from "../../components/tableflow";


const menu = [
  { name: "เข้าสู่ระบบ", rounte: "", status: "active"},
];

export default function Login() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
    <br />
        
      

      </Container>
    <br />
      <Image
      className={styles.image}
      src="/banner.jpg"
      width={0}
      height={0}
      alt="Picture of the author"
      />

<Breadcrumb menu={menu} />
    <div className="d-flex top-9">
        <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                คณะผู้บริหารและบุคลากร
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                แผนพัฒนาท้องถิ่น
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                ข้อมูลพื้นฐาน
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                รายงานผลการดำเนินการ
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                จัดซื้อ-จัดจ้าง
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                การใช้จ่ายงบประมาณ
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                กฏหมายที่เกี่ยวข้อง
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                การควบคุมภายใน
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                คู่มือมาตรฐานการให้บริการ
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                <p style={{fontSize: 8}}>ประกาศ กำหนดจำนวนครั้งการลาและ<br />การมาทำงานสายในการปฏิบัติหน้าที่
        ราชการ<br /> ประจำปีงบประมาณ พ.ศ. 2565</p>
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                การบริหารทรัพยากรบุคคล
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                การให้บริการ
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                กิจการสภา
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                ประกาศสภาองค์การ
        บริหารส่วนตำบลบางเสาธง
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                เกี่ยวกับ อบต.
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                แบบเสนอปัญหาและ
        ความต้องการของประชาชน
                </Button>
            </div>
            <div>
                <Button style={{borderRadius: 18,}} variant="contained" size="medium">
                นโยบาย No Gift Policy
                </Button>
            </div>
            </Box>
            <div className="translate-y-[-50rem]">
                <Tableflow />
            </div>
                
    </div>
    

      {/* <Breadcrumb menu={menu} /> */}
      <br /><br />
      <Container maxWidth="lg">
      <Tableflow />
      </Container>
    </main>
  );
}
