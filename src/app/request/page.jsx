import { Container } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Request from "../../components/request";

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
      <Breadcrumb menu={menu} />
     
      <Container maxWidth="lg">
        <br /><br />
      <Request/>
      <div className='formGroup'>
</div>
      </Container>
    </main>
  );
}
