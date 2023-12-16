import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import SWD from "../../../components/executiveboard/swd";
import Footer from "@/components/footer2Bangsaotong";


const menu = [ 
  { name: "กองสวัสดิการสังคม", rounte: "", status: "active"},
 
];

export default function swd() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <SWD/>
     
      </Container>
      <Footer/>
    </main>
  );
}
