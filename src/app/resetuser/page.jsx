import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import ResetUserFromComponents from "../../components/resetUser";



const menu = [ 
  { name: "เข้าสู่ระบบ", rounte: "/login", status: "inactive"},
  { name: "รีเซ็ตรหัสผ่านผู้ใช้", rounte: "", status: "active"},
];

export default function ResetUser() {
  return (
    <main>
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
        <br /><br /> <br />
      <ResetUserFromComponents />
      <br/><br/><br/>
      </Container>
    </main>
  );
}