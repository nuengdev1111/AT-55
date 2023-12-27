import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Banner from "../../components/banner";
import LoginForm from "../../components/login";
import styles from "./homepagenew.module.scss";
import Image from 'next/image'
import Sidebar from "../../components/sidebar";
import Tablehome from "../../components/tablehome";
import Pool from "../../components/pool";
import MiddleH from "../../components/middlehome";
import Content from "../../components/content";
import Cardcard from "../../components/cardcard";
import Gallery from "../../components/gallery";
import Gallery2 from "../../components/gallery2";
import Gallery3 from "../../components/gallery3";
import Tablefoot from "../../components/tablefoot";
import Fourhome from "../../components/fourhome";
import Gallery4 from "../../components/gallery4";
import Formbutt from "../../components/formbutt";
import Googlemap from "../../components/googlemap";
import Bannergrid from "../../components/bannergrid";

const menu = [
  { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
];

export default function Login() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
        <Bannergrid />
        <Sidebar />
        <Pool />
      </Container>
      
      
      {/* <Breadcrumb menu={menu} /> */}

      {/* <Container maxWidth="lg"> */}
        {/* <LoginForm /> */}
      {/* </Container> */}
    </main>
  );
}
