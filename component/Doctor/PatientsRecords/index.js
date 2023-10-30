import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Divider, Typography } from '@mui/material';
import Link from 'next/link';

function createData(firsname, lastname, gender, age, cell,date,btn) {
  return {firsname, lastname, gender, age, cell,date,btn};
}
    
const rows = [
  createData('kashif',"Nadeen","Male","23","12345678","2023/03/03", <Link href=""><Button variant='contained' color="success" sx={{marginRight:"3px"}} >Edit </Button><Button variant='contained'>View</Button></Link>),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <>
    <Box >
    <Typography variant='h3' sx={{ textAlign:"center", margin:"20px 0 30px 0"}}>
      Patient Records
    </Typography>
    </Box>
    <Divider sx={{border:"1px solid black"}}></Divider>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right"> Age</TableCell>
            <TableCell align="right"> Contact No</TableCell>
            <TableCell  align="right"> Date Added</TableCell>
            <TableCell  align="right"> Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firsname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firsname}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.cell}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell  align="right">{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}