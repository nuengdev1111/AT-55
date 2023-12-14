import {
    Box, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, Link, Button
} from "@mui/material";

const DiscussionBoardTable = () => {
    const data = [
        { number: '1', image: 'file1.png', title: 'ไฟดับ', read: '200', comment: '129', date: '2023-01-01', time: '10:00', post: '' },
        { number: '2', image: 'file1.png', title: '', read: '55', comment: '19', date: '2023-01-02', time: '14:30', post: '' },
    ];

    return (
        <Table sx={{ maxWidth: 800, width: "100%", margin: "auto" }}>
            <TableHead>
                <TableRow sx={{ borderBottom: '2px solid black' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>ลำดับที่</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>รูปภาพ</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>หัวข้อกระทู้</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>อ่าน</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>ความคิดเห็น</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>วันที่</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>โพสต์โดย</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell sx={{ textAlign: 'center' }}>{row.number}</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>
                            <Link href={`/path/to/pdf/${row.file}`} target="_blank" rel="noopener noreferrer">
                                {row.image}
                            </Link>
                        </TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>{row.title}</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>{row.read}</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>{row.comment}</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>{row.time}</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>{row.post}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default function DiscussionBoard() {
    return (
        <main className="">
            <Box className="mt-2 flex justify-center" sx={{ marginTop: '3rem', marginBottom: '5rem' }}>
                <Box sx={{ p: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card variant="outlined" sx={{ maxWidth: '100%', width: '100%', backgroundColor: '#f0f0f0', border: 'none', margin: 'auto', marginTop: '10px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: { xs: 2, md: 5 } }}>
                            <Typography variant="h5">
                                <strong>กระดานสนทนา</strong>
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                                <Button variant="contained" color="success">
                                    ตั้งกระทู้
                                </Button>
                                <Button variant="contained" color="warning">
                                    ดูทั้งหมด
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ p: { xs: 2, md: 5 } }}>
                            <DiscussionBoardTable />
                        </Box>
                    </Card>
                </Box>
            </Box>

        </main>
    );
}
