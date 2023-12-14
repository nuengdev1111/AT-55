import {
    Container, Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody,Link
  } from "@mui/material";
  import Header from "../../components/header";
  import Breadcrumb from "../../components/breadcrumb";
  import Image from 'next/image';
  import styles from "./discussionBoard.module.scss"
  import DiscissionBoard from "../../components/discussionBoard";
  import Footer from "../../components/footer2Bangsaotong";
  const menu = [
    { name: "กระดานสนทนา", route: "", status: "active" },
  ];
  
  
  
  
  export default function BoardDiscussion() {
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
            <DiscissionBoard/>
        </Container>
        <Container maxWidth="lg">
              <Footer/>
          </Container>
              </main>
    );
  }

  