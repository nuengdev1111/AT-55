import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import Footer from "@/components/footer2Bangsaotong";
import EngineerUnit from "../../../components/executiveboard/engineerunit/engineerunit";



const menu = [ 
  { name: "กองช่าง", rounte: "", status: "active"},
 
];

export default function engineerUnit() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <EngineerUnit/>
     
      </Container>
      <Footer/>
    </main>
  );
}
