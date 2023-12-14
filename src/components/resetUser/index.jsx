"use client";
import { useState } from "react";
import styles from "./resetuser.module.scss";
import ButtonUI from "../ui/button";
import { FaWpforms } from "react-icons/fa6";
import styled from "./resetuser.module.scss";
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
import FormLabel from "@mui/material/FormLabel";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import styled from "./resetpassword.module.scss";

export default function ResetUserFromComponents() {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <br />
    <div className={styled.reset}>
      <div className="bg-white text-back text-center text-sm py-5 text-4xl">
        <p> เปลี่ยนรหัสผ่าน </p>
      </div>
      <br /> <br />
    
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

          <div className="pb-4">
            <FormLabel>ยืนยันรหัสผ่านใหม่</FormLabel>
            <br />
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

          <div className="text-center mt-4">
            <ButtonUI
              text="แก้ไขรหัสผ่าน"
              color="warning"
              width="25"
              isBorderRadius={true}
              isIconStart={true}
              iconStart={<FaWpforms />}
              submit={() => { }}
            ></ButtonUI>
          </div>
    </div>
    </Card>
  )
}