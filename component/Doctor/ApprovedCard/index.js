import React from "react";
import Avatarpatient from '../Avatar2'
import {
  Card,
  Link,
  Button,
  CardContent,
  Typography,
  Box,
  CardActions,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PatientCard = () => {
  const totalwidth=40;
  const totalheight=40;
  return (
    <Box
      sx={{
        margin:'2rem 0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} 
    >

      <Card sx={{ width: 270  }}>

      <Box sx={{display:'flex',justifyContent:'end',margin:'0.8rem 1rem'}}>
            <CheckCircleIcon fontSize='small' color='primary'/>
            <Typography variant='caption' color='primary'>Approved</Typography>
        </Box>
     
        <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center" m='1rem 0 0.5rem 0' >
        <Avatarpatient mwidth={totalwidth} mheight={totalheight}   />
            <Typography sx={{fontWeight:600,color:'#393a3a',fontSize:"13px"}} variant="body2" component="div">
              Kashif  Nadeem
            </Typography>
        </Box>
          <CardContent>
        <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:700,color:'#757676',fontSize:"13px"}}>Contact No:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> 00000000 </Typography>
         </Box>
         <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:700,color:'#757676',fontSize:"13px"}}>Gmail:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> none@gmail.com</Typography>
         </Box>
        <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:700,color:'#757676',fontSize:"13px"}}>Appointment Date:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> 00-00-0000 </Typography>
         </Box>
         <Box m='0.4rem 0 '>
         <Typography variant='body1' sx={{display:'inline',fontWeight:700,color:'#757676',fontSize:"13px"}}>Appointment Time:</Typography>
         <Typography variant='body2' sx={{display:'inline',color:'#515454'}}> 00-00 AM </Typography>
         </Box>

        
          </CardContent >
          <CardActions sx={{display:'flex',justifyContent:'space-evenly'}}>
          <Link    href="/doctor/medicine" style={{ textDecoration: "none", marginBottom:"8px"}}>
            <Button
             sx={{display:"flex",justifyContent:"center"}}
              variant="contained"
              size="small"
            >
              Medicine
            </Button>
          </Link>
          </CardActions>
        
      </Card>
      
    </Box>
  );
};

export default PatientCard;
