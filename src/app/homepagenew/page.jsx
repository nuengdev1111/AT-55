// import { Container, Box } from "@mui/material";
// import Header from "../../components/header";
// import Breadcrumb from "../../components/breadcrumb";
// import Banner from "../../components/banner";
// import LoginForm from "../../components/login";
// import styles from "./homepagenew.module.scss";
// import Image from 'next/image'
// import Sidebar from "../../components/sidebar";
// import Tablehome from "../../components/tablehome";
// import Pool from "../../components/pool";
// import MiddleH from "../../components/middlehome";
// import Content from "../../components/content";
// import Cardcard from "../../components/cardcard";
// import Gallery from "../../components/gallery";
// import Gallery2 from "../../components/gallery2";
// import Gallery3 from "../../components/gallery3";
// import Tablefoot from "../../components/tablefoot";
// import Fourhome from "../../components/fourhome";
// import Gallery4 from "../../components/gallery4";
// import Tablehomegrid from "../../components/tablehomegrid";
// import Formbutt from "../../components/formbutt";
// import Sidebargrid from "../../components/sidebargrid";
// import Googlemap from "../../components/googlemap";
// import Poolgrid from "../../components/poolgrid";
// import Bannergrid from "../../components/bannergrid";
// import FooterForm from "@/components/footer";
// import Footer2Bangsaotong from "@/components/footer2Bangsaotong";

// const menu = [
//   { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
// ];

// export default function Home() {
//   return (

//     <>





// <Container maxWidth="lg">
//         <Header />
//       </Container>

//       {/* <Bannergrid /> */}

//       <Sidebargrid>
//       <Tablehomegrid />
//               <Pool />
//               <MiddleH />
//               <Content />
//               <Tablefoot />
//               <Fourhome />
//               <Gallery4 />
//               <Formbutt />
//               <Googlemap />
//       </Sidebargrid>









//       {/* <Container maxWidth="lg">
//         <Header />
//       </Container>

//       <Bannergrid />




//       <Container maxWidth="lg">





//           <Sidebargrid>


        
//               <Tablehomegrid />
//               <Pool />
//               <MiddleH />
//               <Content />
//               <Tablefoot />
//               <Fourhome />
//               <Gallery4 />
//               <Formbutt />
//               <Googlemap />
         



//           </Sidebargrid>
   




//       </Container>
  
//       <Footer2Bangsaotong />
  


//       <FooterForm /> */}

//     </>
//   );
// }







import { Container, Box } from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Banner from "../../components/banner";
import LoginForm from "../../components/login";
import styles from "./homepagenew.module.scss";
import Image from 'next/image'
import Sidebar from "../../components/sidebar";
import Tablehome from "../../components/tablehome";
import Pool from "../../components/pool";
import MiddleH from "../../components/middlehome";
import Content from "../../components/content";
import Cardcard from "../../components/cardcard";
import Gallery from "../../components/gallery";
import Gallery2 from "../../components/gallery2";
import Gallery3 from "../../components/gallery3";
import Tablefoot from "../../components/tablefoot";
import Fourhome from "../../components/fourhome";
import Gallery4 from "../../components/gallery4";
import Tablehomegrid from "../../components/tablehomegrid";
import Formbutt from "../../components/formbutt";
import Sidebargrid from "../../components/sidebargrid";
import Googlemap from "../../components/googlemap";
import Poolgrid from "../../components/poolgrid";
import Bannergrid from "../../components/bannergrid";
import FooterForm from "@/components/footer";
import Footer2Bangsaotong from "@/components/footer2Bangsaotong";

const menu = [
  { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
];

export default function Home() {
  return (

    <>
       <Container maxWidth="lg">
            <Header />
       </Container>
  
        <Bannergrid />
 
    
    

      <Container maxWidth="lg">
      



<Box pt="350px">
    <Sidebargrid> 
   
   
    
 {/* <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div>
 <div>xxxxxxxxxxxxxxxxxxxxxx</div> */}
      <Container>
           <Tablehomegrid />
          <Pool />
          <MiddleH/>
           <Content/>
          <Tablefoot/>
          <Fourhome />
          <Gallery4 />
          <Formbutt />
          <Googlemap />
      </Container>
      
 
      
{/*      
      
      
      
      <Googlemap /> */}
   </Sidebargrid>
</Box>


       
{/* <Pool/> */}


    {/* <Pool />
          <MiddleH />
        <Content />
        <Tablefoot />
        <Fourhome /> */}
    
     
      
      
      {/* <Breadcrumb menu={menu} /> */}

      {/* <Container maxWidth="lg"> */}
        {/* <LoginForm /> */}
    {/* </Container> */}

   

 </Container>
 {/* <Container> */}
 {/* <Container maxWidth="xl"> */}
    <Footer2Bangsaotong />
 {/* </Container> */}


 <FooterForm />

 </>
  );
}

