import { Box,TextField,Button,Typography,Radio,FormControl,FormLabel,RadioGroup,FormControlLabel } from "@mui/material"
import { useState } from 'react';

export default function AddMedicine() {
    const [data, setData] = useState({
        prescriptionReason:'',medicineName:'',amount:'',frequency:'',startDate:'',endDate:'',administration:'',specialinstruction:''
    });
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})
    }
    const showData=()=>{
        console.log(data)
    }
  return (
    <>
      <Box m='1rem'>
      <Typography variant="body2" sx={{color:'#c1c0c0'}}>Diagnosis:</Typography>
      <TextField
      variant="outlined"
      label="Prescription reason"
      name='prescriptionReason'
      sx={{ width:'85%',margin:'0.5rem'}}
      value={data.prescriptionReason}
      onChange={handleChange}/>
    </Box>
    <Box m='1rem'>
    <Typography variant="body2" sx={{color:'#c1c0c0'}}>Prescribe Medicine:</Typography>
    <TextField
      variant="outlined"
      label="Medicine name"
      name='medicineName'
      sx={{ width:'53%',margin:'0.5rem'}}
      value={data.medicineName}
      onChange={handleChange}
      />
       <TextField
      variant="outlined"
      label="Amount(mg)"
      name='amount'
      sx={{ width:'30%',margin:'0.5rem'}}
      value={data.amount}
      onChange={handleChange}
      />
      <TextField
      variant="outlined"
      label="Frequency"
      helperText='Dosage per day'
      name='frequency'
      sx={{ width:'30%',margin:'0.5rem'}}
      value={data.frequency}
      onChange={handleChange}
      />
    </Box>
    <Box m='1rem' sx={{display:'flex'}}>
      {/* start date */}
    <TextField
    variant='outlined'
    type='date'
    helperText="Start date"
    name='startDate'
    value={data.startDate}
    onChange={handleChange}
    sx={{margin:'0 0.5rem',width:'200px',height:'50px'}}/>
    {/* end date */}
    <TextField
    variant='outlined'
    type='date'
    helperText="End date"
    name='endDate'
    value={data.endDate}
    onChange={handleChange}
    sx={{margin:'0 0.5rem',width:'200px',height:'50px'}}/>
    </Box>
    <Box m='3rem 1rem 1rem 1rem'>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize:'0.9rem',color:'#c1c0c0'}}>Route of adminstration</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="administration"
        sx={{display:'flex',flexDirection:'row',margin:'0 1rem',color:'#c1c0c0'}}
        value={data.administration}
        onChange={handleChange}
      >
        <FormControlLabel value="Oral" control={<Radio />} label="Oral" />
        <FormControlLabel value="Injection" control={<Radio />} label="Injection" />
      </RadioGroup>
    </FormControl>
    </Box>
    <Box m='1rem'>
      <Typography variant="body2" sx={{color:'#c1c0c0'}}>Special Instructions</Typography>
      <TextField
      variant="outlined"
      label="Instructions"
      name='specialinstruction'
      sx={{ width:'85%',margin:'0.5rem'}}
      value={data.specialinstruction}
      onChange={handleChange}
      />
    </Box>
    <Box m='0 1rem 1rem 1rem'>
    <Button onClick={showData} variant="contained" color="secondary" sx={{color:'white'}}>Add medicine</Button>
    </Box>
    </>
  )
}
