import { Box,Typography,Grid, Divider } from "@mui/material"
import React,{ useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute',
    top: '380%',
    left:'73%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    height:380,
    bgcolor: 'background.paper',
    borderRadius:'10px',
    boxShadow: 4,
    zIndex:20,
    overflowY:'scroll'
  };

export default function Notification() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{position:'absolute',left:'86%'}}>
         <NotificationsIcon fontSize="medium" sx={{cursor:'pointer'}} onClick={handleOpen}/>
      </Box>

       { open && <Box sx={style}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'#d3d3cb2e',borderRadius:'10px 0px 0 0',borderBottom:'1px solid black',borderColor:'#d3d3cb2e',height:'40px'}}>
                 <Typography variant="div" sx={{color:'#4448459e',fontSize:'1.1rem',fontWeight:500,margin:'0.5rem'}}>Notifications</Typography>
            </Box>
            <Grid container sx={{margin:'0.5rem 0',height:'40px'}}>
                <Grid item xs={1.5} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <FiberManualRecordIcon color="secondary" fontSize="small"/>   
                </Grid>
                <Grid item xs={10} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Typography variant="body2" sx={{color:'black',textAlign:'start',margin:'0 1rem'}}>Your Request has been fulfilled successfully</Typography>
                </Grid>
            </Grid>

                <Divider/>
        </Box>
       } 

    </>
  )
}
