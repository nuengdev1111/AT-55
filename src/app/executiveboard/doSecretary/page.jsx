import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import Footer from "@/components/footer2Bangsaotong";
import DoSecretary from "../../../components/executiveboard/dosecretary";
import Banner from "../../../components/banner"


const menu = [ 
  { name: "สำนักปลัด อบต.", rounte: "", status: "active"},
 
];

export default function executive() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Banner/>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <DoSecretary/>
     
      </Container>
      {/* <Footer/> */}
    </main>
  );
}
