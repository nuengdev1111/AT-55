/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Card, Grid, Typography, CardMedia } from "@mui/material";

const data = [
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
  {
    name: "",
    position: "",
    phone: "",
    image: "/default.jpg",
  },
];

export default function publicHealthEnv() {
  return (
    <Box sx={{ padding: "60px 0" }}>
      <Card sx={{ padding: "80px 0" }}>
        <Typography       
          variant="h4"
          component="h1"
          sx={{ 
            textAlign: "center", 
            marginBottom:"60px",
          }}
        >
          กองสาธารณะสุขและสิ่งแวดล้อม
        </Typography>
        <Grid container justifyContent="center">
          <Box sx={{ p: { xs: 1, md: 1, mt: 1 }, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={data[0].image}
                alt={`image0`}
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
            <Typography variant="body1">
              {data[0].name}
              <br />
              {data[0].position}
              <br />
              {/* โทร:  */}
              {data[0].phone}
            </Typography>
          </Box>
          <Grid
            container
            item
            spacing={15}
            justifyContent="center"
            sx={{ mt: -10 }}
          >
            {data.slice(1).map((item, index) => (
              <Grid item key={index}>
                <CardMedia
                  component="img"
                  style={{
                    width: 150,
                    height: 180,
                    border: "8px solid white",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  image={item.image}
                />
                <Typography
                  variant="body2"
                  align="center"
                  style={{ marginTop: "10px" }}
                >
                  {item.name}
                  <br />
                  {item.position}
                  <br />
                  {/* โทร:  */}
                  {item.phone}
                </Typography>
              </Grid>
            ))}
          </Grid>
          
        </Grid>
      </Card>
    </Box>
  );
}
