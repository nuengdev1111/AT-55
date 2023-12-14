"use client";
import { useState } from "react";
// import { redirect } from "next/navigation";
import styles from "./table.module.scss";
import Head from 'next/head';
import ButtonUI from "../ui/button";
import {
  Box,
  // Button,
  Card,
  Table,
  TextField,
  Link,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { permanentRedirect, redirect } from "next/navigation";
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Breadcrumb from "../../components/breadcrumb";
// import Link from '@mui/material/Link';



const menu = [
  { name: "เข้าสู่ระบบ", rounte: "", status: "active" },
];


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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function LoginForm({ data }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };


  // const height = 44

  const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '44rem',
    height: '34rem',
  };


  const myStyle = {
    borderCollapse: "collapse",
    width: "0px"
  };



  return (
    <Box className="mt-4 flex justify-center">
      <Card variant="outlined" className="translate-x-[-2rem] translate-y-[-8.7rem]" sx={{ maxWidth: 800, width: "100%" }}>
        <Breadcrumb menu={menu} />
        <Box sx={{ p: { xs: 2, md: 5 } }}>
          <img className="translate-x-[18rem] pb-7" style={{ height: 120, width: 120, left: 88 }} src="/logo-light.png" />
          <Typography className="text-center pb-10" variant="h5">
            <p>องค์การบริหารส่วนตำบลบางเสาธง</p>
            <p>ถ.เทพรัตน กม.26 ตำบลบางเสาธง อำเภอเสาธง <br />จังหวัดสมุทรปราการ 10570 <br />
              โทรศัพท์ : 02-7071671 แฟกซ์ : 02-7071674</p>
            {/* <strong>เข้าสู่ระบบ ทดสอบ 2</strong> */}
          </Typography>


          <div className="container mx-auto pb-12">
            {/* <Head>
                        <title>Students Table</title>
                      </Head> */}

            {/* <h3 className="text-2xl font-bold mb-4">Students Table</h3> */}
            <table className="w-full pb-8">
              <thead>
                <tr>
                  <th colSpan="3" className="border-2 border-black">
                    หมายเลขภายในของแต่ละหน่วยงาน
                  </th>
                </tr>
                <tr>
                  <th className="border-2 border-black">ชื่อหน่วยงาน</th>
                  <th className="border-2 border-black">หมายเลขโทรศัพท์</th>
                  {/* <th className="border-2 border-black">CITY</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td className="border-2 border-black">Tom</td> */}
                  {/* <td className="border-2 border-black">10</td> */}
                  {/* <td className="border-2 border-black">London</td> */}
                </tr>
                <tr>
                  {/* <td className="border-2 border-black">Jerry</td> */}
                  {/* <td className="border-2 border-black">8</td> */}
                  {/* <td className="border-2 border-black">London</td> */}
                </tr>
                <tr>
                  <td className="border-2 border-black">นายกเทศมนตรี<br />ปลัดเทศบาล<br />กองคลัง<br />กองช่าง<br />กองสาธารณสุขและสิ่งแวดล้อม<br />กองการศึกษา ศาสนาและวัฒนธรรม<br />กองสวัสดิการสังคม</td>
                  <td className="border-2 border-black">02-7071673 ต่อ 110<br />02-7071671-3 ต่อ 116<br />02 - 7071673 ต่อ 222<br />02 -7071673 ต่อ333<br />02-7071673 ต่อ 444<br />02-7071673 ต่อ 555<br />02-7071673 ต่อ 666</td>
                  {/* <td className="border-2 border-black">Wells</td> */}
                </tr>
              </tbody>
            </table>
          </div>

          {/* <Box sx={{ ...commonStyles, borderColor: 'text.primary',
              fontSize: 14,
              borderRadius: 0,
              border: 1,
              borderTop: 1,
              color: "#003665",
              "& .MuiDataGrid-row": {
                border: 1,
                borderTop: 1,
              },
              "& .MuiDataGrid-columnHeaders": {
                border: 1,
                borderTop: 1,
                borderBottom: 1,
                borderRadius: 0,
              },
              "& .MuiDataGrid-footerContainer": {
                border: 1,
              },
              "& .MuiTablePagination-selectLabel": {
                color: "rgba(0, 54, 101, 0.6)",
                border: 1,
                borderTop: 1,
              },
              "& .MuiSelect-select": {
                color: "#003665",
              },
              "& .MuiTablePagination-displayedRows": {
                color: "#003665",
              },
              "& .MuiSvgIcon-root": {
                color: "#003665",
              },}} /> */}

          <Typography className="translate-x-[19rem] pb-7">แผนที่</Typography>
          <Box className="w-full pb-12" sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <Box sx={{ ...commonStyles, borderColor: 'primary.main' }} />
      <Box sx={{ ...commonStyles, borderColor: 'secondary.main' }} />
      <Box sx={{ ...commonStyles, borderColor: 'error.main' }} />
      <Box sx={{ ...commonStyles, borderColor: 'grey.500' }} /> */}
            <Box style={{ height: 360, width: 686 }} sx={{ ...commonStyles, borderColor: 'text.primary' }} />
          </Box>


          <div className="pb-4">
            {/* <Typography>ประเภทการใช้งาน</Typography> */}
            <Typography className="translate-x-[18rem] pb-7">ติดต่อสอบถาม</Typography>
            {/* <Select
                        name="type"
                        value=""
                        size="small"
                        sx={{ width: "100%" }}
                        onChange={() => {}}
                        required
                      >
                        {selectType?.map(({ name, value }) => (
                          <MenuItem key={name} value={value}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select> */}
            <div className="pb-4">
              {/* <Typography>ชื่อผู้ใช้งาน</Typography> */}
              <TextField placeholder="ชื่อ-นามสกุล" fullWidth size="small" value="" name="name" />
            </div>
          </div>

          <div className="pb-4">
            {/* <Typography>ชื่อผู้ใช้งาน</Typography> */}
            <TextField placeholder="เบอร์โทร" fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            {/* <Typography>ชื่อผู้ใช้งาน</Typography> */}
            <TextField placeholder="อีเมล์" fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            {/* <Typography>รหัสผ่าน</Typography> */}
            {/* <OutlinedInput
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
                      /> */}
            <div className="pb-4">
              {/* <Typography>ชื่อผู้ใช้งาน</Typography> */}
              <TextField placeholder="เรื่องที่ต้องการติดต่อ" fullWidth size="small" value="" name="name" />
            </div>

            <div className="pb-4 placeholder:-translate-y-40">
              {/* <Typography>ชื่อผู้ใช้งาน</Typography> */}
              <TextField
                placeholder="รายละเอียด"
                inputProps={{
                  style: {
                    transform: "translateY(-82px)",
                    textAlign: 'match-parent',
                    height: "185px",
                  },
                }}
                fullWidth size="large" value="" name="name" />
            </div>
            {/* <Link variant="overline" underline="hover" href="">
                        ลืมรหัสผ่านใช่ไหมs
                      </Link> */}
          </div>

          {/* className, text, isIconStart, variant, width, iconStart, isIconEnd, iconEnd, submit */}
          <div className="text-center mt-4">
            {/* <ButtonUI
                        text="เข้าสู่ระบบ"
                        color="warning"
                        width="75"
                        isBorderRadius={true}
                        isIconStart={true}
                        iconStart={<FaSignInAlt />}
                        submit={() => {}}
                      ></ButtonUI> */}

            {/* <Typography className="py-4">หรือ</Typography> */}

            {/* <ButtonUI
                        
                        // className={styles.ButtonUI}
                        text="ลืมรหัสผ่าน"
                        // color="primary"
                        width="45"
                        isBorderRadius={true}
                        isIconStart={true}
                        // iconStart={<FaFacebook />}
                        submit={() => {}}
                      ></ButtonUI> */}

            <button class="bg-amber-400 w-80 text-slate-950 font-bold py-2 px-4 rounded-full">
              ส่งข้อมูล
            </button>

            {/* <ButtonUI
                        className="pb-4"
                        text="ดำเนินการต่อโดยใช้ Google"
                        color="white"
                        width="75"
                        isBorderRadius={true}
                        isIconStart={true}
                        iconStart={<FcGoogle />}
                        submit={() => {}}
                      ></ButtonUI> */}
          </div>
        </Box>
      </Card>
    </Box>
  );
}
