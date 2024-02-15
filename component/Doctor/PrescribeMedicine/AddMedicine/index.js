import { Box,TextField,Button,Typography,Radio,FormControl,FormLabel,RadioGroup,FormControlLabel } from "@mui/material"
import { useState } from 'react';

export default function AddMedicine({medData}) {
    const [data, setData] = useState({
        prescriptionReason:'',medicineName:'',amount:'',frequency:'',startDate:'',endDate:'',administration:'',specialInstruction:'',recommendedTest:''
    });
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})
    }
    const showData=()=>{
        // console.log(data)
        medData(data)
    }
  return (
    <>
      <Box ml='1.0rem' mt="0.2rem" >
      <Typography variant="body2" fontSize="12px" sx={{color:'#c1c0c0'}}>Diagnosis:</Typography>
      <TextField
      variant="outlined"
      label="Prescription reason"
      name='prescriptionReason'
      size="small"
      sx={{ width:'94%',margin:'0.5rem'}}
      value={data.prescriptionReason}
      onChange={handleChange}/>
    </Box>
    <Box ml='1rem'>
    <Typography variant="body2" fontSize="12px" sx={{color:'#c1c0c0'}}>Prescribe Medicine:</Typography>
    <TextField
      variant="outlined"
      label="Medicine name"
      name='medicineName'
      size="small"
      fontSize="12px"
      sx={{ width:'62%',margin:'0.5rem'}}
      value={data.medicineName}
      onChange={handleChange}
      />
       <TextField
      variant="outlined"
      label="Amount(mg)"
      name='amount'
      size="small"
      sx={{ width:'30%',margin:'0.5rem'}}
      value={data.amount}
      onChange={handleChange}
      />
      <TextField
      variant="outlined"
      label="Frequency"
      helperText='Dosage per day'
      name='frequency'
      size="small"
      sx={{ width:'30%',margin:'0.5rem'}}
      value={data.frequency}
      onChange={handleChange}
      />
    <TextField
    variant='outlined'
    type='date'
    helperText="Start date"
    name='startDate'
    size="small"
    value={data.startDate}
    onChange={handleChange}
    sx={{margin:'0.5rem',width:'30%',height:'50px'}}/>
    {/* end date */}
    <TextField
    variant='outlined'
    type='date'
    helperText="End date"
    size="small"
    name='endDate'
    value={data.endDate}
    onChange={handleChange}
    sx={{margin:'0.5rem',width:'30%',height:'50px'}}/>
    </Box>
    {/* <Box m='1rem' sx={{display:'flex'}}> */}
      {/* start date */}
    {/* </Box> */}
    <Box m='1rem'>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize:'12px',color:'#c1c0c0'}}>Route of adminstration</FormLabel>
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
      <Typography variant="body2" fontSize="12px" sx={{color:'#c1c0c0'}}>Special Instructions</Typography>
      <TextField
      variant="outlined"
      label="Instructions"
      name='specialInstruction'
      size="small"
      sx={{ width:'46%',margin:'0.5rem'}}
      value={data.specialInstruction}
      onChange={handleChange}
      />
        <TextField
      variant="outlined"
      label="Recommended Tests"
      name='recommendedTest'
      size="small"
      sx={{ width:'46%',margin:'0.5rem'}}
      value={data.recommendedTest}
      onChange={handleChange}
      />
    </Box>
    <Box ml='1.7rem'>
    <Button onClick={showData} size="small" variant="contained" color="secondary" sx={{color:'white'}}>
      <Typography textTransform="none" variant="body2" fontSize="12px" >
      Add medicine
      </Typography>
      </Button>
      
    </Box>
    </>
  )
}
