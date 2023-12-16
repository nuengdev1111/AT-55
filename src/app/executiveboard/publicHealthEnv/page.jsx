import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import Footer from "@/components/footer2Bangsaotong";
import PublicHealthEnv from "../../../components/executiveboard/publicHealthEnv";


const menu = [ 
  { name: "กองสาธารณะสุขและสิ่งแวดล้อม", rounte: "", status: "active"},
 
];

export default function publicHealthEnv() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <PublicHealthEnv/>
     
      </Container>
      <Footer/>
    </main>
  );
}
