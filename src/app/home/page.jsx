import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Image from 'next/image'
import styles from "./home.module.scss";
import TopNav from "../../components/navbar";

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

     
    <br />
    <TopNav>

    </TopNav>
    <br />

      


    </main>
  );
}
