import { Container } from "@mui/material";
import Header from "../../components/header";
import BannerUI from "../../components/ui/banner";
import Breadcrumb from "../../components/breadcrumb";
import RegisterForm from "../../components/register";

const menu = [{ name: "สมัครสมาชิก", rounte: "", status: "active" }];

export default function Register() {
  return (
    <main>
      <Header />

      <BannerUI />
      <Breadcrumb menu={menu} />

      <Container maxWidth="lg">
        <RegisterForm />
      </Container>
    </main>
  );
}
