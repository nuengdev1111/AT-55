import styles from "./footer2Bangsaotong.module.scss";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, Grid } from '@mui/material';

const Footer2Bangsaotong = () => {
  return (
    <>
      <div className={styles.secondfoot}>
      {/* <div className="translate-y-[3670px]"> */}
      {/* <div className="w-[1433px] translate-x-[-145px] translate-y-[4537px]"> */}
                      <Grid className={styles.bg} container spacing={2}>


                <Grid item xs={3}>
                  <Box className={styles.boxImg}>
                    <Image
                      className={styles.imgLogo}
                      src="/logo.png"
                      width={0}
                      height={0}
                      alt="Picture of the author"
                    />
                  </Box>

                </Grid>



                <Grid item xs={9}>

                  <div className={styles.text}>
                    <h6 style={{ color: 'black', fontWeight: 'bold', fontSize: '2rem', marginBottom: '10px', textAlign: 'left' }}>องค์การบริหารส่วนตำบลบางเสาธง</h6>
                    <p style={{ color: 'black', marginBottom: '10px', textAlign: 'left' }}>ถ.เทพรัตน กม.26 ตำบลบางเสาธง อำเภอเสาธง จังหวัดสมุทรปราการ 10570</p>
                    <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'left' }}>โทรศัพท์ : 02-7071671</p>
                    <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'left' }}>แฟกซ์ : 02-7071674</p>
                  </div>

                  <div className={styles.menu}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    หน้าแรก
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                  >
                    กระดานกระทู้
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                  >
                    ติดต่อ
                  </Link>
                </Breadcrumbs>
                </div>


                </Grid>



                </Grid>

               
      </div>
    </>
  );
};

export default Footer2Bangsaotong;
