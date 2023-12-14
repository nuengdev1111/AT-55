import {
  Container, Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody,Link
} from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Image from 'next/image';
import styles from "./hitstoryRequestStatus.module.scss"
import HitstoryRequestStatus from "../../components/history";
import Footer from "../../components/footer2Bangsaotong";
const menu = [
  { name: "ประวัติการยื่นคำร้อง", route: "", status: "active" },
];




export default function Hitstory() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
        <br />
      </Container>

      <Image
      className={styles.img}
      src="/header.jpg"
      width={0}
      height={0}
      alt="Picture of the author"
    />

      <Breadcrumb menu={menu} />
      <Container maxWidth="lg">
          <HitstoryRequestStatus/>
      </Container>
      <Container maxWidth="lg">
            <Footer/>
        </Container>
            </main>
  );
}
