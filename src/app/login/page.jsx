import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import LoginForm from "../../components/login";
import styles from "./login.module.scss";
import Image from 'next/image'

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
      src="/header.jpg"
      width={0}
      height={0}
      alt="Picture of the author"
      />

      

      <Breadcrumb menu={menu} />
      <br /><br />
      <Container maxWidth="lg">
      <LoginForm />
      </Container>
    </main>
  );
}
