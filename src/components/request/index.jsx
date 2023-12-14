"use client";
import {
  Container,
  FormRow,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Input,
  Card,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import React, { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";   


const menu = [{ name: "แก้ไขข้อมูลส่วนตัว", rounte: "", status: "active" }];

export default function Request() {

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <main>
      <Box
        className="mt-2 flex justify-center"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: 1000, width: "100%" }}>
          <Box sx={{ p: { xs: 2, md: 5 } }}>
            <Typography className="text-center pb-10" variant="h5">
              <strong>คำร้องทั่วไป</strong>
            </Typography>
            <Grid container spacing={2}>
            <div className="d-flex">
              <strong> ข้าพเจ้า </strong>
              {/* คำนำหน้าชื่อ */}
              <FormControl sx={{ width: "20%" }}>
                <InputLabel id="demo-simple-select-label">
                  เลือกคำนำหน้าชื่อ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedValue}
                  label="เลือกคำนำหน้าชื่อ"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>นาย</MenuItem>
                  <MenuItem value={20}>นาง</MenuItem>
                  <MenuItem value={30}>นางสาว</MenuItem>
                </Select>
              </FormControl>

              {/* ชื่อผู้ใช้ */}
              <TextField
                style={{ width: "calc(55% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue="ชื่อผู้ติดต่อ"
                size="small"
              />
              <strong> อายุ </strong>

              <TextField
                style={{ width: "calc(10% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />

              <strong>ปี</strong>
              <br />
              <strong> สัญชาติ </strong>
              <TextField
                style={{ width: "calc(15% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />

              <strong> อยู่บ้านเลขที่ </strong>
              <TextField
                style={{ width: "calc(10% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />

              <strong> หมู่ที่ </strong>
              <TextField
                style={{ width: "calc(10% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />

              <strong> ตรอก/ซอย </strong>
              <TextField
                style={{ width: "calc(30% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />
              <strong> ถนน </strong>
              <TextField
                style={{ width: "calc(17% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />
              <strong> จังหวัด </strong>
              <TextField
                style={{ width: "calc(17% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />
              <strong> เขต/อำเภอ </strong>
              <TextField
                style={{ width: "calc(17% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />
              <strong>แขวงตำบล</strong>
              <TextField
                style={{ width: "calc(17% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />

              <strong>              โทรศัพท์                </strong>
              <TextField
                style={{ width: "calc(30% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />

              <strong>              โทรสาร                </strong>
              <TextField
                style={{ width: "calc(30% - 0.8rem)" }}
                className="translate-y-[-0.4rem]"
                id="outlined-required"
                label=""
                defaultValue=""
                size="small"
              />
            </div>
            </Grid>
            <br /><br /><br /><br />
            <div> <strong> ขอยื่นคำร้องต่อนายกองค์การบริหารส่วนตำบลบางเสาธง โดยมีเอกสารประกอบดังนี้  </strong> </div>
            <br />
            <FormControlLabel value="s" control={<Radio />} label="สำเนาบัตรประชาชน" />
            <br />
            <FormControlLabel value="s" control={<Radio />} label="สำเนาทะเบียนบ้าน" />
            <br />
            <FormControlLabel value="s" control={<Radio />} label="อื่นๆ" />
<br />
           
<TextField
      style={{ width: 'calc(100% - 1rem)' }}
      id="outlined-multiline-flexible"
      label="หมายเหตุ"
      multiline
      rows={8} // ปรับจำนวนบรรทัดตามที่ต้องการแสดง
      defaultValue=""
      variant="outlined"
      size="small"
    />
           

            <br /><br />
            <strong>              ด้วยข้าพเจ้ามีความประสงค์                </strong>
            <TextField
      style={{ width: 'calc(100% - 1rem)' }}
      id="outlined-multiline-flexible"
      label="หมายเหตุ"
      multiline
      rows={8} // ปรับจำนวนบรรทัดตามที่ต้องการแสดง
      defaultValue=""
      variant="outlined"
      size="small"
    />
            <br />
            <strong>  จึงเรียนมาเพื่อโปรดพิจารณาดำเนินต่อไป </strong>
            
          <br /><br />

          
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Button
                variant="contained"
                color="success"
                style={{ width: "150px", fontWeight: "bold", borderRadius: "30px" }}
              >
                บันทึก
              </Button>
        <>    </>
              <Button
                variant="contained"
                color="error"
                style={{ width: "150px", fontWeight: "bold", borderRadius: "30px" }}
                
              >
                ยกเลิก
              </Button>
            </div>
          </Box>
        </Card>
      </Box>
    </main>
  );
}
