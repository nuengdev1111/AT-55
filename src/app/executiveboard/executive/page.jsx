import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import Executive from "../../../components/executiveboard/executive";
import Footer from "@/components/footer2Bangsaotong";


const menu = [ 
  { name: "คณะผู้บริหาร", rounte: "", status: "active"},
 
];

export default function executive() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <Executive/>
     
      </Container>
      <Footer/>
    </main>
  );
}
