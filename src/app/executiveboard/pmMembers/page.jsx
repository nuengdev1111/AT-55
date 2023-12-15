import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import PmMember from "../../../components/executiveboard/pmMembers";
import Footer from "@/components/footer2Bangsaotong";


const menu = [ 
  { name: "สมาชิกสภา", rounte: "", status: "active"},
 
];

export default function pmMember() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <PmMember/>
     
      </Container>
      <Footer/>
    </main>
  );
}
