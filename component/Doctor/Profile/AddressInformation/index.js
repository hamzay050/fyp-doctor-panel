import { useState } from "react";
import { Box,TextField,Typography,Button } from "@mui/material"

export default function Address() {
  const [data, setData] = useState({
    clinicName:'',addressLine:'',streetNo:'',city:'',zipCode:'',state:''
  })
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
    <Box m='3rem 1rem'>
      <Typography variant="body2" sx={{color:'#b9b7b7'}}>Address Infromation</Typography>
      <TextField
        variant="outlined"
        label='Clinic Name'
        name="clinicName"
        sx={{margin:'1rem 2rem 1rem 0',width:'370px'}}
        required
        value={data.clinicName}
        onChange={handleChange}/>
      <TextField
        variant="outlined"
        label='Address Line'
        name="addressLine"
        sx={{margin:'1rem 2rem 1rem 0',width:'370px'}}
        required
        value={data.addressLine}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Street No'
        name="streetNo"
        sx={{margin:'1rem 2rem 1rem 0',width:'370px'}}
        required
        value={data.streetNo}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='City'
        name="city"
        sx={{margin:'1rem 2rem 1rem 0',width:'370px'}}
        required
        value={data.city}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Zip code'
        name="zipCode"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.zipCode}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='State'
        name="state"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.state}
        onChange={handleChange}/>
        <br />
      <Button onClick={showData} variant='contained' color='secondary' sx={{margin:'1rem 0.1rem',color:'white'}}>Save Changes</Button>
      </Box>

    </>
  )
}
