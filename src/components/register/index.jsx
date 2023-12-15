"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./register.module.scss";
import ButtonUI from "../ui/button";
import {
  Grid,
  Stack,
  Box,
  Button,
  Card,
  TextField,
  Link,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { permanentRedirect, redirect } from "next/navigation";

const selectType = [
  {
    name: "ผู้ใช้งานเว็บบอร์ด",
    value: "0",
  },
  {
    name: "ร้านค้า O-top",
    value: "1",
  },
];

export default function RegisterForm({ data }) {
  const [value, setValue] = useState("female");

  const [file, setFile] = useState(null);

  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClickImageUpload = () => { };

  const processFile = (event, documentType) => {
    console.log("processFile", documentType);

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // const file = URL.createObjectURL(file);

      // console.log("file", file);

      setFile(file);

      // ปรับ processFile เพื่อให้สอดคล้องกับ EmployeeDocuments

      // setfileDoc((prevState) => {
      //   console.log("prevState >>>>>", prevState[documentType]);

      //   const result = {
      //     ...prevState,
      //     [documentType]:
      //       documentType === "etcDocuments"
      //         ? [...prevState[documentType], file]
      //         : file,
      //   };
      //   return result;
      // });
    }
  };

  return (
    <Box className="my-4 flex justify-center">
      <Card variant="outlined" sx={{ maxWidth: 600, width: "100%" }}>
        <Box sx={{ p: { xs: 2, md: 5 } }}>
          <Typography className="text-center pb-10" variant="h5">
            <strong>สมัครสมาชิก</strong>
          </Typography>

          <FormControl sx={{ pb: 2 }}>
            <FormLabel>ประเภทเลขที่</FormLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="เลขประจำตัวประชาชน"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="เลขที่พาสปอร์ต"
              />
            </RadioGroup>
          </FormControl>

          <div className="pb-4">
            <FormLabel>เลขประจำตัวประชาชน</FormLabel>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <FormControl sx={{ pb: 2 }}>
            <FormLabel>เพศ</FormLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="ชาย" />
              <FormControlLabel value="2" control={<Radio />} label="หญิง" />
            </RadioGroup>
          </FormControl>

          <div className="pb-4">
            <FormLabel>ชื่อ</FormLabel>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            <FormLabel>นามสกุล</FormLabel>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            <FormLabel>อายุ</FormLabel>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            <FormLabel>ที่อยู่</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="บ้านเลขที่"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="หมู่ที่"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="ตรอก/ซอย"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="ถนน"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="แขวง/ตำบล"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="เขต/อำเภอ"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="จังหวัด"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  fullWidth
                  size="small"
                  value=""
                  name="name"
                  placeholder="รหัสไปรษณีย์"
                />
              </Grid>
            </Grid>
          </div>

          <div className="pb-4">
            <FormLabel>เบอร์โทร</FormLabel>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <input
            accept=".png,.jpg,.jpeg"
            style={{ display: "none" }}
            id="preview-asset-image"
            type="file"
            onChange={processFile}
          />

          <Stack flexDirection={"column"}>
            {file && (
              <Box
                sx={{ height: 200, width: "50%" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {file.type.includes("image") ? (
                  <Image
                    alt="file uploader preview"
                    src={file}
                    style={{ maxHeight: "200px", width: "auto" }}
                  />
                ) : (
                  <embed
                    src={file}
                    type="application/pdf"
                    style={{
                      maxHeight: "200px",
                      width: "auto",
                    }}
                  />
                )}
              </Box>
            )}
            {file ? (
              <Box
                sx={{ width: "50%" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!file}
                  startIcon={<FaEye />}
                  onClick={handleDeleteImage}
                  sx={{ mt: 2 }}
                >
                  ยกเลิก
                </Button>
              </Box>
            ) : (
              <Button startIcon={<FaEye />} onClick={handleClickImageUpload}>
                คลิกเพื่อเลือกไฟล์หรือรูปภาพ
              </Button>
            )}
          </Stack>

          <div className="pb-4">
            <FormLabel>อีเมล</FormLabel>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            <FormLabel>รหัสผ่าน</FormLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              sx={{ width: "100%" }}
            />
          </div>

          <div className="pb-4">
            <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              sx={{ width: "100%" }}
            />
          </div>

          <div className="px-10">
            <Typography variant="caption" color="error">
              หมายเหตุ
              <br />
              1. รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร
              <br />
              2. รหัสผ่านต้องประกอบด้วยตัวอักษรผสมกับตัวเลขและอักขระพิเศษ
              ตัวอย่างของอักขระพิเศษ เช่น @ # $ % ! + -
              <br />
              3. ตัวอักษรตัวเดียวกัน ตัวพิมพ์เล็กและตัวพิมใหญ่จะต่างกันเช่น a
              และ A จะถูกมองเป็นคนละตัวกัน ดังนั้นกรุณาจำรหัสผ่านเป็นพิเศษ
              หากใช้ตัวอักษรตัวเล็กตัวใหญ่ผสมกัน
              <br />
              4. ห้ามใช้ช่องว่าง (space) หรืออักขระที่ไม่ใช่ภาษาอังกฤษ
              (Non-English characters)
              <br />
              5. รหัสผ่านควรคาดเดาได้ยากและจดจำได้
              <br />
              6. รหัสผ่านควรเปลี่ยนทุก 3 เดือน เพื่อรักษาความปลอดภัยของข้อมูล
            </Typography>
          </div>

          <div className="text-center mt-7">
            <div>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                size="small"
                inputProps={{ "aria-label": "controlled" }}
                sx={{ p: 0 }}
              />
              <Typography variant="caption">
                ยอมรับเงื่อนไขการใช้งานเว็บไซต์
              </Typography>
            </div>

            <Link variant="overline" underline="hover" href="">
              ( เงื่อนไขการใช้งานเว็บไซต์ )
            </Link>
          </div>

          {/* className, text, isIconStart, variant, width, iconStart, isIconEnd, iconEnd, submit */}
          <div className="text-center mt-4">
            <ButtonUI
              text="ลงทะเบียน"
              color="warning"
              width="75"
              isBorderRadius={true}
              isIconStart={true}
              iconStart={<FaWpforms />}
              submit={() => { }}
            ></ButtonUI>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
