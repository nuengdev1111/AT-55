import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import ResetPassword from "../../components/resetpassword";
import Banner from "../../components/banner";


const menu = [ 
  { name: "เข้าสู่ระบบ", rounte: "/login", status: "inactive"},
  { name: "รีเซ็ตรหัสผ่าน", rounte: "", status: "active"},
];

export default function ResetPass() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Banner />
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
      <ResetPassword />
      </Container>
    </main>
  );
}
