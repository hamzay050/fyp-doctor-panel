import * as React from 'react';
import Card from '@mui/material/Card';
import Avatarpatient from './avatar/avatar'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider, Grid } from '@mui/material';

export default function ApprovedCard() {
    const totalwidth=30;
  const totalheight=30;
  return (
    <Box  >
    
    <Card sx={{ maxWidth: 820 , marginLeft:"50px", marginTop:"50px", border:"1px solid black"}}> 
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
           <span style={{color:"Red"}}>Rejected</span> at jan 22, 2023 10:30 PM
          </Typography>
          <Typography>
            <span style={{fontWeight:"600"}}>Reason</span> : It might be related to a message informing a healthcare facility that a patient has rejected or declined a scheduled appointment.
          </Typography>
        </CardContent>
        </Grid>
        </Grid>
      </CardActionArea>
    </Card>
    </Box>
  );
}