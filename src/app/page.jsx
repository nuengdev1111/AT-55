import Background from "@/components/background";
import { Container } from "@mui/material";
// import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function Home() {
  return (
    <main>
      {/* <ReCaptchaProvider reCaptchaKey="[GTM-6Le2kjApAAAAAFbcnOI2OJMzVjp1PqFBv2SgvWGL]"> */}
        <Container>
          <Background />
        </Container>
      {/* </ReCaptchaProvider> */}
    </main>
  );
}
