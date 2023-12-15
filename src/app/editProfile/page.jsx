import {
    Container, TextField, Button, Grid, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Box, Input, Card, OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import EditProfileForm from "../../components/editProfile";

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
            <Container maxWidth="lg">
                <EditProfileForm/>
            </Container>


        </main>
    );
}
