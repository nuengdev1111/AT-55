import {
  Container, Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody,Link
} from "@mui/material";
import Header from "../../components/header";
import Breadcrumb from "../../components/breadcrumb";
import Image from 'next/image';
import styles from "./hitstoryRequestStatus.module.scss"


const menu = [
  { name: "ประวัติการยื่นคำร้อง", route: "", status: "active" },
];

const HistoryRequestTable = () => {
  const data = [
    { request: 'คำร้องที่ 1', file: 'file1.pdf', date: '2023-01-01', time: '10:00', status: 'รับเรื่องแล้ว' },
    { request: 'คำร้องที่ 2', file: 'file2.pdf', date: '2023-01-02', time: '14:30', status: 'รับเรื่องแล้ว' },
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>คำร้อง</TableCell>
          <TableCell>ไฟล์คำร้อง</TableCell>
          <TableCell>วันที่</TableCell>
          <TableCell>เวลา</TableCell>
          <TableCell>สถานะ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.request}</TableCell>
            <TableCell>
              <Link href={`/path/to/pdf/${row.file}`} target="_blank" rel="noopener noreferrer">
                {row.file}
              </Link>
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default function HitstoryRequestStatus() {
  return (
    <main className="">
      <Container maxWidth="lg">
        <Header />
        <br />
      </Container>

      <Image
      className={styles.img}
      src="/header.jpg"
      width={0}
      height={0}
      alt="Picture of the author"
    />

      <Breadcrumb menu={menu} />

      <Box className="mt-2 flex justify-center" sx={{ marginTop: '3rem', marginBottom: '5rem' }}>
        <Card variant="outlined" sx={{ maxWidth: 1000, width: "100%", backgroundColor: '#f0f0f0', border: 'none' }}>
          <Box sx={{ p: { xs: 2, md: 5 } }}>
            <Typography className="text-center pb-10" variant="h5">
              <strong>ประวัติการยื่นคำร้อง</strong>
            </Typography>

            <HistoryRequestTable />
          </Box>
        </Card>
      </Box>
    </main>
  );
}
