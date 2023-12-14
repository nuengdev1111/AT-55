import {
  Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, Link
} from "@mui/material";

const RequestTable = () => {
  const data = [
    { request: '1', file: 'file1.png', date: '2023-01-01', time: '10:00', status: '' },

  ];

  return (
    <Table sx={{ maxWidth: 800, width: "100%", margin: "auto" }}>
      <TableHead>
        <TableRow sx={{ borderBottom: '2px solid black' }}>
          <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>คำร้อง</TableCell>
          <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>ไฟล์คำร้อง</TableCell>
          <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>วันที่</TableCell>
          <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>เวลา</TableCell>
          <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>สถานะ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell sx={{ textAlign: 'center' }}>{row.request}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Link href={`/path/to/pdf/${row.file}`} target="_blank" rel="noopener noreferrer">
                {row.file}
              </Link>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{row.date}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{row.time}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default function RequestStatus() {
  return (
    <main className="">
      <Box className="mt-2 flex justify-center" sx={{ marginTop: '3rem', marginBottom: '5rem' }}>
        <Card variant="outlined" sx={{ maxWidth: '100%', width: '80%', backgroundColor: 'transparent', border: '1px solid black' }}>
          <Box sx={{ p: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column' }}>
            <Typography className="text-center pb-10" variant="h5">
              <strong>สถานะคำร้อง</strong>
            </Typography>

            <Card variant="outlined" sx={{ maxWidth: '100%', width: '100%', backgroundColor: '#f0f0f0', border: 'none', margin: 'auto', marginTop: '10px' }}>

              <Box sx={{ p: { xs: 2, md: 5 } }}>
                <RequestTable />
              </Box>
            </Card>
          </Box>
        </Card>
      </Box>
    </main>
  );
}
