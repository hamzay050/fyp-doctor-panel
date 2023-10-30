import { Box,Grid,TextField,InputAdornment,Button,Typography, Divider,Modal} from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MedicationIcon from '@mui/icons-material/Medication';
import DeleteIcon from '@mui/icons-material/Delete';
import AddMedicine from "./AddMedicine";
import PatientDetail from "./PatientDetail";
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height:550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border:'1px solid #f1d4a975',
  borderRadius:'10px',
  overflowY:'scroll'
};

export default function PrescribeMedicine() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <Box m='1.5rem 0 0 0' sx={{backgroundColor:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <TextField
        variant="outlined"
        id="input-with-icon-textfield"
        sx={{width:'340px',margin:'0 1.5rem',borderColor:'white'}}
        placeholder='Search'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" sx={{height:'40px',margin:'0 2rem'}}>New Patient</Button>
    </Box>
      <Grid container>
        <Grid item xs={3.5} sx={{display:'flex',flexDirection:'column',justifyContent:'center',backgroundColor:'white',margin:'1rem 1rem 0 1.5rem',height:'450px',border:'1px solid white',borderRadius:'10px'}}>
            <PatientDetail/>
        </Grid>
        <Grid item xs={7.9} sx={{backgroundColor:'white',overflowY:'scroll',height:'450px',margin:'1rem 0 0 0',border:'1px solid white',borderRadius:'10px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#26a69a',height:'45px',alignItems:'center',borderRadius:'10px 10px 0px 0px'}}>
                <Typography onClick={handleOpen} variant='body1' sx={{color:'white',margin:'0 1rem',cursor:'pointer'}}>Add medication</Typography>
                <SearchIcon sx={{color:'white',margin:'0 1rem'}}/>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0.7rem'}}>
                <Box  sx={{display:'flex',alignItems:'center'}}>
                    <MedicationIcon sx={{color:'#c1c0c0'}}/> 
                    <Typography variant="div" sx={{color:'#c1c0c0'}}>Medication</Typography>
                </Box>
                <Typography variant="div" sx={{color:'#c1c0c0'}}>Quantity per day</Typography>
                <Typography variant="div" sx={{color:'#c1c0c0'}}>Date</Typography>
                <Box sx={{margin:'0 1.4rem'}}></Box>
                </Box>
                <Divider/>
                <Box sx={{display:'flex',justifyContent:'space-between',margin:'0.7rem'}}>
                    <Box  sx={{width:'200px',display:'flex',alignItems:'center'}}>
                        <MedicationIcon sx={{color:'#c1c0c0'}}/> 
                        <Box m='0 0.3rem'>
                        <Typography variant="body1" sx={{fontWeight:'600'}}>Piodine</Typography>
                        <Typography variant="caption" sx={{textAlign:'start',color:'#959393'}}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit <Typography variant="caption" sx={{color:'blue',textDecoration:'underline'}}>Read more</Typography> </Typography>
                        </Box>
                    </Box>
                    <Typography variant="subtitle2" sx={{marginRight:'7rem',fontWeight:'570'}}>2</Typography>
                    <Typography variant="subtitle2" sx={{fontWeight:'570'}} >02-02-2000</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                      <Button variant="contained" color='secondary' sx={{padding:'0.1rem',color:'#fff'}}>Edit</Button>
                      <DeleteIcon sx={{color:'#c1c0c0'}}/>
                    </Box>
                </Box>
                <Divider/>
        </Grid>
      </Grid>
      <Modal
       open={open}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
>
 <Grid container sx={style}>
  <Grid item xs={4.5} sx={{borderRight:'1px solid #efc591ad'}}> 
  <Typography color='primary' variant="body1" sx={{textAlign:'center',margin:'1rem 0',fontWeight:'600'}}>Preview</Typography>
  </Grid>
  <Grid item xs={7.5}>
    <Box sx={{display:'flex',justifyContent:'end',margin:'0.5rem',cursor:'pointer'}}>
   <ClearIcon onClick={handleClose}/>
    </Box>
  <AddMedicine/>
  </Grid>
 </Grid>
      </Modal>
    </>
  )
}
