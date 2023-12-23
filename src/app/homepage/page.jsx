import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
// import LoginForm from "../../components/login";
import styles from "./homepage.module.scss";
import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tablehome from "../../components/tablehome";
import Banner from "../../components/banner";
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
      {/* <Image
      style={{paddingBottom: 180}}
      className={styles.image}
      src="/banner.jpg"
      width={0}
      height={0}
      alt="Picture of the author"
      /> */}
      <Banner/>

        {/* <Breadcrumb menu={menu} /> */}
            <div className="translate-x-[14rem] pb-35">
                <Box sx={{ '& button': { m: 1 } }}>
                    <div className="d-flex relative">
                        
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        คณะผู้บริหารและบุคลากร
                        <img style={{height: 49, width: 48, transform: "translateX(23px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        แผนพัฒนาท้องถิ่น<img style={{height: 49, width: 48, transform: "translateX(23px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        ข้อมูลพื้นฐาน<img style={{height: 49, width: 48, transform: "translateX(37px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22, width: 185, height: 46}} variant="contained" size="medium">
                        รายงานผลการดำเนินการ<img style={{height: 49, width: 48, transform: "translateX(24px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]"  style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        จัดซื้อ-จัดจ้าง<img style={{height: 49, width: 48, transform: "translateX(36px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        การใช้จ่ายงบประมาณ<img style={{height: 49, width: 48, transform: "translateX(23px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]"  style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        กฏหมายที่เกี่ยวข้อง<img style={{height: 49, width: 48, transform: "translateX(24px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        การควบคุมภายใน<img style={{height: 49, width: 48, transform: "translateX(25px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        คู่มือมาตรฐานการให้บริการ<img style={{height: 49, width: 48, transform: "translateX(24px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22, height: 46}} variant="contained" size="medium">
                        <p style={{fontSize: 8, transform: "translateY(73px)"}}>ประกาศ กำหนดจำนวนครั้งการลาและ<br />การมาทำงานสายในการปฏิบัติหน้าที่
                ราชการ<br /> ประจำปีงบประมาณ พ.ศ. 2565<img style={{height: 49, width: 48, marginBottom: 188,transform: "translateX(122px)"}} src="/iconbut.webp"/></p>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        การบริหารทรัพยากรบุคคล<img style={{height: 49, width: 48, transform: "translateX(24px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        การให้บริการ<img style={{height: 49, width: 48, transform: "translateX(39px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>  
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        กิจการสภา<img style={{height: 49, width: 48, transform: "translateX(45px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                            <p style={{fontSize: 9}}>ประกาศสภาองค์การ<br />บริหารส่วนตำบลบางเสาธง</p><img style={{height: 49, width: 48, transform: "translateX(27px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        เกี่ยวกับ อบต.<img style={{height: 49, width: 48, transform: "translateX(36px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                            <p style={{fontSize: 9}}>แบบเสนอปัญหาและ<br />ความต้องการของประชาชน</p><img style={{height: 49, width: 48, transform: "translateX(28px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    <div>
                        <Button className="xl: w-[180px] sm: w-[110px]" style={{borderRadius: 22,  height: 46}} variant="contained" size="medium">
                        นโยบาย No Gift Policy<img style={{height: 49, width: 48, transform: "translateX(22px)"}} src="/iconbut.webp"/>
                        </Button>
                    </div>
                    </Box>
                    <div className="translate-y-[-57.5rem]">
                        {/* <Dropcon /> */}
                        <Tablehome />
                    </div>
                    <Pool />
                    <div className="translate-x-[28.5rem] translate-y-[-74rem]">
                        <MiddleH />
                    </div>
                    <div className="translate-x-[4rem] translate-y-[14rem]">
                        <Content />
                    </div>
                    <h1 style={{fontSize: 28}} className="translate-x-[2rem] translate-y-[-53rem] font-bold">แหล่งเรียนรู้</h1>
                    <div className="translate-x-[4rem] translate-y-[-44rem] pb-11">
                        <Cardcard />
                    </div>
                    <h1 style={{fontSize: 28}} className="translate-x-[2rem] translate-y-[-53rem] font-bold">กิจกรรม อบต.</h1>
                    <div className="translate-y-[-1rem]">
                        <Gallery />
                    </div>
                    <h1 style={{fontSize: 28}} className="translate-x-[2rem] translate-y-[-49rem] font-bold">แหล่งท่องเที่ยวที่สำคัญ</h1>
                    <div className="translate-y-[4rem]">
                        <Gallery2/>
                    </div>
                    <h1 style={{fontSize: 28}} className="translate-x-[2rem] translate-y-[-40rem] font-bold">หนึ่งตำบลหนึ่งผลิตภัณฑ์</h1>
                    <div className="translate-y-[12rem]">
                        <Gallery3/>
                    </div>
                    <h1 style={{fontSize: 28}} className="flex justify-center translate-x-[-13rem] translate-y-[-30rem] font-bold">สำหรับเจ้าหน้าที่</h1>
                    <div className=" translate-y-[-7rem]">
                        <Tablefoot />
                    </div>
                    <div className=" translate-y-[0.3rem]">
                        <Fourhome />
                    </div>
                    <div className=" translate-y-[40.3rem]">
                        <Gallery4 />
                    </div>
                    <div className=" translate-y-[-1rem]">
                        <Formbutt />
                    </div>
                    <h1 style={{fontSize: 28}} className="flex justify-center translate-x-[-13rem] translate-y-[-30rem] font-bold">แผนที่</h1>
                    <div className="translate-x-[15rem]"><Googlemap /></div>
                    
            </div>  
    

      {/* <Breadcrumb menu={menu} /> */}
      {/* <br /><br />
      <Container maxWidth="lg">
      <Tableflow />
      </Container> */}
    </main>
  );
}
