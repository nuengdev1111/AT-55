import styles from "./footer2Bangsaotong.module.scss";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <Image
        className={styles.img}
        src="/logo.png"
        width={20}
        height={20}
        alt="Picture of the author"
      />
      <div className={styles.text}>
        <h6 style={{ color: 'black', fontWeight: 'bold', fontSize: '2rem', marginBottom: '10px', textAlign: 'left' }}>องค์การบริหารส่วนตำบลบางเสาธง</h6>
        <p style={{ color: 'black', marginBottom: '10px', textAlign: 'left' }}>ถ.เทพรัตน กม.26 ตำบลบางเสาธง อำเภอเสาธง จังหวัดสมุทรปราการ 10570</p>
        <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'left' }}>โทรศัพท์ : 02-7071671</p>
        <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'left' }}>แฟกซ์ : 02-7071674</p>

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
            {/* <Typography color="text.primary">ติดต่อ</Typography> */}
          </Breadcrumbs>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
