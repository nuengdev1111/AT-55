import {
    Container, Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, Link
  } from "@mui/material";
  import Header from "../../components/header";
  import Breadcrumb from "../../components/breadcrumb";
  import Image from 'next/image';
  import styles from "./questionAndAnswer.module.scss"
 
  import Footer from "../../components/footer2Bangsaotong";
import QuestionAndAnswer from "../../components/q&a";
  const menu = [
    { name: "Q&A", route: "", status: "active" },
  ];
  
  
  
  
  export default function TableRequestStatus() {
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
          <QuestionAndAnswer />
        </Container>
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </main>
    );
  }
  