import {
    Container, TextField, Button, Grid, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Box, Input, Card, OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";


const menu = [
    { name: "แก้ไขข้อมูลส่วนตัว", rounte: "", status: "active" },
];

export default function EditProfile() {
    return (
        <main>
            <Container maxWidth="lg">
                <Header />
            </Container>

            <Breadcrumb menu={menu} />


            <Box className="mt-2 flex justify-center" sx={{ marginTop: '3rem', marginBottom: '5rem' }}>
                <Card variant="outlined" sx={{ maxWidth: 1000, width: "100%" }}>
                    <Box sx={{ p: { xs: 2, md: 5 } }}>
                        <Typography className="text-center pb-10" variant="h5">
                            <strong>แก้ไขข้อมูลส่วนตัว</strong>

                        </Typography>



                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">เลขประจำตัวประชาชน</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl component="fieldset">
                                    <Typography variant="subtitle1">เพศ</Typography>
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender"
                                    >
                                        <FormControlLabel value="male" control={<Radio />} label="ชาย" />
                                        <FormControlLabel value="female" control={<Radio />} label="หญิง" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">ชื่อ</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">นามสกุล</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">อายุ</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">ที่อยู่</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="บ้านเลขที่"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="หมู่"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="ซอย"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="ถนน"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="แขวง/ตำบล"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="เขต/อำเภอ"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="จังหวัด"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="รหัสไปรษณีย์"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">เบอร์โทรศัพท์</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">รูปภาพโปรไฟล์</Typography>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    fullWidth
                                    margin="normal"
                                    disableUnderline
                                />
                            </Grid>
                        </Grid>
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <Button variant="contained" color="warning" style={{ width: '200px', fontWeight: 'bold' }}>
                                แก้ไขข้อมูลส่วนตัว
                            </Button>
                        </div>

                    </Box>
                </Card>
            </Box>
        </main>
    );
}
