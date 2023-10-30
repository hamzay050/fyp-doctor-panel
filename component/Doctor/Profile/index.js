import { Box,Grid,Typography,Divider,TextField,Button } from "@mui/material"
import { useState,useRef } from "react"
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Address from "./AddressInformation";
import Personal from "./PersonalInformation";
import Medical from "./MedicalInformation";

export default function Profile() {
  const [component, setComponent] = useState(null)
    const renderComonent=(component)=>{
            setComponent(component)
    }
    console.log(component)
  return (
    <>
    <Grid container>
      <Grid item xs={2.5} sx={{backgroundColor:'white',height:'460px',margin:'2rem 1rem 0 4rem',border:'1px solid white',borderRadius:'10px'}}> 
      
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',height:'100%'}}>
      <Typography variant="body1" sx={{color:'grey',cursor:'pointer',fontSize:'1.1rem',padding:'0.6rem 0.7rem',display:'flex',alignItems:'center'}} onClick={()=>{renderComonent('Personal')}}><PersonIcon sx={{margin:'0 0.4rem'}}/> Personal Information</Typography>
      <Typography variant='body1' sx={{color:'grey',cursor:'pointer',fontSize:'1.1rem',padding:'0.6rem 0.7rem',display:'flex',alignItems:'center'}} onClick={()=>{renderComonent('Address')}}><HomeIcon sx={{margin:'0 0.4rem'}}/>Address Information</Typography>
      <Typography variant='body1' sx={{color:'grey',cursor:'pointer',fontSize:'1.1rem',padding:'0.6rem 0.7em',display:'flex',alignItems:'center'}} onClick={()=>{renderComonent('Medical')}}><MedicalInformationIcon sx={{margin:'0 0.4rem'}}/> Medical Details</Typography>
      </Box>
      
      </Grid>
      <Grid item xs={8} sx={{backgroundColor:'white',margin:'2rem 0 0 0',height:'460px',border:'1px solid white',borderRadius:'10px'}}>
      <Box m='1rem'> 

      {component===null && <Personal/>}
      {component==='Personal' && <Personal/>}
      {component==='Address' && <Address/>}
      {component==='Medical' && <Medical/>}
      </Box>

      </Grid>
    </Grid>
    </>
  )
}
