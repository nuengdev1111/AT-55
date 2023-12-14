import { Container } from "@mui/material";
import Header from "../../../components/header";
import Breadcrumb from "../../../components/breadcrumb";
import ResetPassword from "../../../components/executive";



const menu = [ 
  { name: "คณะผู้บริหาร", rounte: "", status: "active"},
 
];

export default function ResetPass() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <ResetPassword />
      </Container>
    </main>
  );
}
