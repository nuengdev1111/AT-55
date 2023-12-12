import Background from "@/components/background";
import { Container } from "@mui/material";
import Header from "@/components/header";
import Breadcrumbs from "../components/breadcrumb";
import btnintro from "../../public/btnintro.png"
import Image from "next/image";
const menu = [
  { name: "", rounte: "", status: "active"},
];

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumbs menu={menu} />
      <Container maxWidth="lg">
        <Background />
        <div className="box-btn" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <a href="/home">
          <Image
          src="/btnintro.png"
          alt="btn-intro"
          width={200}
          height={200}
          
          />
          </a>
        </div>
      </Container>
    </main>
  );
}
