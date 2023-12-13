"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, TextField, Button } from '@mui/material';
import styled from "./resetpassword.module.scss"; 

const handleResetPassword = () => {
    alert('รีเซ็ตรหัสผ่านเรียบร้อยแล้ว!'); 
  };

const CardResetPassword = () => {
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
        <Typography variant="h5" gutterBottom className={styled.textemail} >
             
          E-Mail
        </Typography>
          <TextField className={styled.TextField}
            id="email"
            label="Enter email"
            variant="outlined"
           
          />
        </form>
        <div style={{ textAlign: 'center', marginTop: '60px' , marginBottom: '10px'}}>
        <Button
        variant="contained"
        color="error"
        sx={{
          width: '600px', 
          height: '50px',
          fontSize: '20px', 
          borderRadius: '30px',
          fontWeight: 'bold'
        }}
        onClick={handleResetPassword}
      >
        ส่งรีเซ็ตรหัสผ่าน
      </Button>
    </div>
      </CardContent>
    </Card>
  );
};

export default CardResetPassword;
