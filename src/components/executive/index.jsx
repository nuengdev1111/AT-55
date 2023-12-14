/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Card, Grid, Typography, CardMedia } from "@mui/material";
import Image from "next/image";
import styled from "./executive.module.scss";

const getTextForMember = (member) => {
  switch (member) {
    case 1:
      return `นายสุวรรณ ภูมิสวัสดิ์\n รองนายก อบต.2\n โทร: 02 7071673 ต่อ 110`;
    case 2:
      return `นางสาวกลอยใจ แซ่ลี้\n รองนายก อบต.1\n โทร: 02 7071673 ต่อ 110`;
    case 3:
      return `นายชิน อ่ำชิต\n เลขานุการ นายก \n โทร: 02-7071673 ต่อ 777`;
    default:
      return "";
  }
};

export default function executive() {
  return (
    <Box sx={{ padding:'60px 0'}}>
      <Card sx={{ padding:'100px 0'}}>
        <Typography className={styled.executives} variant="h4" component="h1">
          คณะผู้บริหาร
        </Typography>
        <Box sx={{ p: { xs: 1, md: 1, mt: 1 } }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/nayok.png"
              alt="nayokImage"
              style={{
                width: "150px",
                height: "180px",
                border: "8px solid white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                objectFit: "cover",
              }}
            />
          </Box>
          <br />
          <Typography className={styled.executive} variant="body1">
            นายเกษม แซ่ลี้
            <br />
            นายก อบต.
            <br />
            โทร: 02 7071673 ต่อ 110
          </Typography>
          
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop:"100px"}}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item style={{ margin: "0 60px" }}>
              <CardMedia
                component="img"
                style={{
                  width: 150,
                  height: 180,
                  border: "8px solid white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                image={`/rongnayok1.png`}
              />
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "10px" }}
              >
                นายสุวรรณ ภูมิสวัสดิ์
                <br />
                รองนายก อบต.2
                <br />
                โทร: 02 7071673 ต่อ 110
              </Typography>
            </Grid>
            <Grid item style={{ margin: "0 60px" }}>
              <CardMedia
                component="img"
                style={{
                  width: 150,
                  height: 180,
                  border: "8px solid white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                image={`/rongnayok2.png`}
              />
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "10px" }}
              >
                นางสาวกลอยใจ แซ่ลี้
                <br />
                รองนายก อบต.1
                <br />
                โทร: 02 7071673 ต่อ 110
              </Typography>
            </Grid>
            <Grid item style={{ margin: "0 60px" }}>
              <CardMedia
                component="img"
                style={{
                  width: 150,
                  height: 180,
                  border: "8px solid white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                image={`/rongnayok3.png`}
              />
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "10px" }}
              >
                นายชิน อ่ำชิต
                <br />
                เลขานุการ นายก <br />
                โทร: 02-7071673 ต่อ 777
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* <Box sx={{ display: "flex", justifyContent: "center"}}>
          {[1, 2, 3].map((member) => (
            <Grid
              container
              direction="column"
              alignItems="center"
              key={member}
            
            >
              <Box className="mt-1">
                <CardMedia
                  component="img" 
                  style={{
                    width: 150,
                    height: 180,
                    border: "8px solid white",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                   
                  }}
                  image={`/rongnayok${member}.png`}
                  alt={`default ${member}`}
                />
              </Box>

              <Typography
                variant="body2"
                align="center"
                mt={2}
                sx={{ whiteSpace: "pre-line" }}
                mb={10}
              >
                {getTextForMember(member)}
              </Typography>
            </Grid>
          ))}
        </Box> */}
      </Card>
    </Box>
  );
}
