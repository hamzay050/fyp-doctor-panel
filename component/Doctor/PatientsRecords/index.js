import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { Container,Button,Modal,Box,Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border:'1px solid #f1d4a975',
  borderRadius:'10px',
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('John Doe', 'Male', 16, 'Single'),
  createData('Jane Smith', 'Female', 24, 'Married'),
  createData('Michael Johnson', 'Male', 30, 'Married'),
  createData('Emily Brown', 'Female', 22, 'Single'),
  createData('William Davis', 'Male', 29, 'Single'),
  createData('Olivia Wilson', 'Female', 31, 'Married'),
  createData('James Lee', 'Male', 35, 'Married'),
  createData('Ava Moore', 'Female', 27, 'Single'),
  createData('Alexander Taylor', 'Male', 26, 'Single'),
  createData('Sophia Anderson', 'Female', 33, 'Married'),
  createData('David White', 'Male', 42, 'Married'),
  createData('Mia Garcia', 'Female', 28, 'Single'),
  createData('John Rodriguez', 'Male', 39, 'Married'),
  createData('Emma Martinez', 'Female', 29, 'Single'),
  createData('Daniel Hernandez', 'Male', 37, 'Married'),
  createData('Isabella Lopez', 'Female', 25, 'Single'),
  createData('Ethan Gonzalez', 'Male', 31, 'Single'),
  createData('Grace Young', 'Female', 26, 'Single'),
  createData('Jacob King', 'Male', 34, 'Married'),
  createData('Natalie Scott', 'Female', 30, 'Married'),
  createData('Liam Roberts', 'Male', 29, 'Single'),
  createData('Chloe Turner', 'Female', 32, 'Married'),
  createData('Noah Phillips', 'Male', 36, 'Married'),
  createData('Lily Evans', 'Female', 27, 'Single'),
  createData('Logan Parker', 'Male', 30, 'Married'),
  createData('Avery Wood', 'Female', 24, 'Single'),
  createData('Carter Price', 'Male', 38, 'Married'),
  createData('Harper Bennett', 'Female', 23, 'Single'),
  createData('Mason Foster', 'Male', 40, 'Married'),
  createData('Zoe Howard', 'Female', 31, 'Married')
]


export default function CustomizedTables() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Container>
    <TableContainer component={Paper} sx={{margin:'3rem 0'}}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:600}}>Patient Name</StyledTableCell>
            <StyledTableCell align="right" sx={{fontWeight:600}}>Gender</StyledTableCell>
            <StyledTableCell align="right" sx={{fontWeight:600}}>Age</StyledTableCell>
            <StyledTableCell align="right" sx={{fontWeight:600}}>Martial Status</StyledTableCell>
            <StyledTableCell align="right" sx={{fontWeight:600}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={handleOpen} variant='contained' color='secondary' fontSize='small' sx={{color:'#fff',padding:'0.1rem'}}>View</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{display:'flex',justifyContent:'end',margin:'0.5rem 0 0 2rem',cursor:'pointer'}}>
         <ClearIcon sx={{margin:'0 1rem'}} onClick={handleClose}/>
        </Box>
        <Box m='0.5rem'>
           <Typography variant="body2" sx={{color:'#c1c0c0'}}>Contact Information:</Typography>
           <Box m='1rem '>
         <Typography variant='body2' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Patient Name:</Typography>
         <Typography variant='body2' sx={{display:'inline'}}> John doe</Typography>
         </Box>
        </Box>
        </Box>
      </Modal>
    </>

    
  );
}