import { Box,Grid,TextField,InputAdornment,Button,Typography, Divider,Modal} from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MedicationIcon from '@mui/icons-material/Medication';
import DeleteIcon from '@mui/icons-material/Delete';
import AddMedicine from "./AddMedicine";
import PatientDetail from "./PatientDetail";
import ClearIcon from '@mui/icons-material/Clear';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 780,
  height:550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border:'1px solid #f1d4a975',
  borderRadius:'10px',
};

export default function PrescribeMedicine() {
  const [medicineData, setMedicineData] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // callback to fetch data from child component about medicine
    const medData=(data)=>{
      setMedicineData(data)
    }
    const deleteMedicine=()=>{
      setMedicineData(null)
    }
  return (
    <>
    <Box m='1.5rem 0 0 0' sx={{backgroundColor:'white',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
    {/* <TextField
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
      /> */}
      <Button onClick={handleOpen} variant="contained" sx={{height:'40px',margin:'0 2rem'}}>Add Medicine</Button>
    </Box>
      <Grid container>
        <Grid item xs={3.5} sx={{display:'flex',flexDirection:'column',backgroundColor:'white',margin:'1rem 1rem 0 1.5rem',height:'450px',border:'1px solid white',borderRadius:'10px'}}>
            <PatientDetail/>
        </Grid>
        <Grid item xs={7.9} sx={{backgroundColor:'white',overflowY:'scroll',height:'450px',margin:'1rem 0 0 0',border:'1px solid white',borderRadius:'10px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#26a69a',height:'45px',alignItems:'center',borderRadius:'10px 10px 0px 0px'}}>
                <Typography  variant='body1' sx={{color:'white',margin:'0 1rem'}}>Medicine Prescribed</Typography>
                <SearchIcon sx={{color:'white',margin:'0 1rem'}}/>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0.7rem'}}>
                <Box  sx={{display:'flex',alignItems:'center'}}>
                    <MedicationIcon sx={{color:'#c1c0c0'}}/> 
                    <Typography variant="body2" sx={{color:'#7f8180'}}>Medication</Typography>
                </Box>
                <Typography variant="body2" sx={{color:'#7f8180'}}>Dosage</Typography>
                <Typography variant="body2" sx={{color:'#7f8180'}}>Amount</Typography>
                <Typography variant="body2" sx={{color:'#7f8180',margin:'0 2rem'}}>Date</Typography>
                <Typography variant="body2" sx={{color:'#7f8180',margin:'0 2rem'}}>Action</Typography>
                  
                </Box>
                <Divider/>
      { medicineData===null?"Nothing to show":  
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0.7rem'}}>
                    <Box  sx={{display:'flex',alignItems:'center'}}>
                        <VaccinesIcon sx={{color:'#c1c0c0'}}/> 
                        <Box m='0 0.3rem'>
                        <Typography variant="body1" sx={{fontWeight:'600',color:'#383c3c'}}>{medicineData.medicineName}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="subtitle2" sx={{fontWeight:'570',color:'#383c3c'}} >{medicineData.frequency}</Typography>
                    <Typography variant="subtitle2" sx={{fontWeight:'570',color:'#383c3c'}} >{medicineData.amount}</Typography>
                    <Typography variant="subtitle2" sx={{fontWeight:'570',color:'#383c3c'}} >{medicineData.startDate}</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                      <Button variant="contained" color='secondary' sx={{padding:'0.1rem',color:'#fff'}}>View</Button>
                      <DeleteIcon onClick={deleteMedicine} sx={{color:'#c1c0c0'}}/>
                    </Box>
                </Box>
}
      {medicineData===null?'':  <Divider/> }  
        </Grid>
      </Grid>
      <Modal
       open={open}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
>
 <Grid container sx={style}>
  <Grid item xs={12}>
    <Box sx={{display:'flex',justifyContent:'end',margin:'0.5rem 0 0 2rem',cursor:'pointer'}}>
   <ClearIcon sx={{margin:'0 1rem'}} onClick={handleClose}/>
    </Box>
  <AddMedicine medData={medData}/>
  </Grid>
 </Grid>
      </Modal>
    </>
  )
}
