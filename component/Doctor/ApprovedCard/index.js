import * as React from 'react';
import Card from '@mui/material/Card';
import Avatarpatient from './Avatar/Avatar'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider, Grid } from '@mui/material';

export default function ApprovedCard() {
    const totalwidth=30;
  const totalheight=30;
  return (
    <Box  >
     {/* <Typography variant='h3' sx={{textAlign:"center"}}>
         Approved Appointments
     </Typography> */}
    {/* <Divider sx={{border:"0.5px solid black", marginTop:"10px"}}/> */}
    
    <Card sx={{ maxWidth: 720 , marginLeft:"50px", marginTop:"50px", border:"1px solid black"}}> 
      <CardActionArea>
        <Grid container sx={{display:"flex", justifyContent:"center", alignItems:"center" ,marginLeft:"40px"}}>
            <Grid item lg={2}>
        
        <Box  >
        <Avatarpatient mwidth={totalwidth} mheight={totalheight}   />
        </Box>
        
        </Grid>
        <Grid item lg={10}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kashif
          </Typography>
          <Typography variant="body1" fontWeight={700} color="text.secondary">
           <span style={{color:"green"}}>Approved</span> at jan 22, 2023 10:30 PM
          </Typography>
          <Typography>
            <span style={{fontWeight:"600"}}>Note</span> : Hi [Patient Name]! We are writing to remind you that you have an appointment with [Provider Name] on [Date] at [Time]. Please remember to bring [Important Document(s)] and arrive 15 minutes early
          </Typography>
        </CardContent>
        </Grid>
        </Grid>
      </CardActionArea>
    </Card>
    </Box>
  );
}