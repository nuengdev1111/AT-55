"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, TextField, Button, Icon } from "@mui/material";
import styled from "./resetpassword.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SvgIcon from "@mui/material/SvgIcon";
const CardResetPassword = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleResetPassword = () => {
    setOpenDialog(true);
    setTimeout(handleCloseDialog, 5000);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Card className={styled.card}>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          className={styled.resetpasstext}
        >
          รีเซ็ตรหัสผ่าน
        </Typography>

        <form>
          <Typography variant="h5" gutterBottom className={styled.textemail}>
            E-Mail
          </Typography>
          <TextField
            className={styled.TextField}
            id="email"
            label="Enter email"
            variant="outlined"
          />
        </form>
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "10px",
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{
              width: "600px",
              height: "50px",
              fontSize: "20px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
            onClick={handleResetPassword}
          >
            ส่งรีเซ็ตรหัสผ่าน
          </Button>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            className={styled.dialog}
            PaperProps={{ sx: { borderRadius: "30px" } }}
          >
            <DialogContent className={styled.dialogcontent}>
              <SvgIcon
                component={CheckCircleOutlineIcon}
                style={{ fontSize: 90 }}
                className={styled.icon}
              />
              <Typography variant="h4" className={styled.success}>
                เรียบร้อย
              </Typography>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardResetPassword;
