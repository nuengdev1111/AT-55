import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import Treasury from "../../../components/executiveboard/treasury";
import Footer from "@/components/footer2Bangsaotong";


const menu = [ 
  { name: "กองคลัง", rounte: "", status: "active"},
 
];

export default function pmMember() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <Treasury/>
     
      </Container>
      <Footer/>
    </main>
  );
}
