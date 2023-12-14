import {
    Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, Link, Button
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const QuestionAndAnswerTable = () => {
    const data = [
        { number: '1', question: '', date: '2023-01-01', time: '10:00', comment: '' },
        { number: '2', question: '', date: '2023-01-02', time: '14:30', comment: '' },
    ];

    return (
        <Table sx={{ maxWidth: 800, width: "100%", margin: "auto" }}>
            <TableHead>
                <TableRow sx={{ borderBottom: '2px solid black' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>ลำดับ</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>คำถาม</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>วันที่</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>เวลา</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>ความคิดเห็น</TableCell>
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

export default function QuestionAndAnswer() {
    return (
        <main className="">
            <Box className="mt-2 flex justify-center" sx={{ marginTop: '3rem', marginBottom: '5rem' }}>
                <Card variant="outlined" sx={{ maxWidth: '100%', width: '80%', backgroundColor: 'transparent', border: '1px solid black' }}>
                    <Box sx={{ p: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column' }}>
                        <Typography className="text-center pb-10" variant="h5">
                            <strong>Q&A</strong>
                        </Typography>

                        <Card variant="outlined" sx={{ maxWidth: '100%', width: '100%', backgroundColor: '#f0f0f0', border: 'none', margin: 'auto', marginTop: '10px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', marginRight: '10px' }}>
                                <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />}>
                                    เพิ่มคำถาม
                                </Button>
                            </Box>
                            <Box sx={{ p: { xs: 2, md: 5 } }}>
                                <QuestionAndAnswerTable />
                            </Box>
                        </Card>
                    </Box>
                </Card>
            </Box>
        </main>
    );
}
