import React from "react";
import Avatarpatient from '../Avatar2'
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const PatientCard = () => {
  const totalwidth=80;
  const totalheight=80;
  return (
    <Box
      sx={{
        margin:'2rem 0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} 
    >

      <Card sx={{ width: 340  }}>

      <Box sx={{display:'flex',justifyContent:'end',margin:'0.5rem 1rem'}}>
            <ClearIcon fontSize='small' color='secondary'/>
            <Typography variant='caption' color='secondary'>Rejected</Typography>
        </Box>
     
        <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center" m='1rem 0 0.5rem 0' >
        <Avatarpatient mwidth={totalwidth} mheight={totalheight}   />
            <Typography sx={{margin:'0.5rem 0',fontWeight:600,color:'#393a3a'}} variant="body1" component="div">
              Kashif  Nadeem
            </Typography>
        </Box>
          <CardContent>
        <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:600,color:'#757676'}}>Contact No:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> 00000000 </Typography>
         </Box>
         <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:600,color:'#757676'}}>Gmail:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> none@gmail.com</Typography>
         </Box>
        <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:600,color:'#757676'}}>Appointment Date:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> 00-00-0000 </Typography>
         </Box>
         <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:600,color:'#757676'}}>Appointment Time:</Typography>
         <Typography variant='body2' sx={{display:'inline'}}> 00-00 AM </Typography>
         </Box>
            
          </CardContent>
        
      </Card>
      
    </Box>
  );
};

export default PatientCard;
