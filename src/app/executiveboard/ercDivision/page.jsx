import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import ErcDivision from "../../../components/executiveboard/ercDivision";
import Footer from "@/components/footer2Bangsaotong";


const menu = [ 
  { name: "กองการศึกษา ศาสนาและวัฒนธรรม", rounte: "", status: "active"},
 
];

export default function executive() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <ErcDivision />
     
      </Container>
      <Footer/>
    </main>
  );
}
