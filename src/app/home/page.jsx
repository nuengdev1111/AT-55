import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Image from 'next/image'
import styles from "./home.module.scss";

const menu = [
  { name: "หน้าแรก", rounte: "", status: "active"},
];


export default function Home() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <br />

      <Image
      className={styles.img}
      src="/pai.png"
      width={0}
      height={0}
      alt="Picture of the author"
    />
    <br />

      <Breadcrumb menu={menu} />


    </main>
  );
}
