import AvatarBox from "@/component/Doctor/Avatar2";
import { Box,Typography, Divider} from "@mui/material"

export default function PatientDetail() {
    const width=70;
    const height=70;
  return (
    <>
        <Box m='3rem 0 2rem 0' sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <AvatarBox mheight={height} mwidth={width}/>
                <Typography variant='body1' sx={{fontWeight:'570',margin:'0.3rem 0'}}>John Doe</Typography>
                <Typography variant='body2'>Male,02-02-1999</Typography>
              </Box>
              <Divider/>
              <Box m='1.5rem 0 0 0'>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                    <Typography variant="div" sx={{margin:'0.3rem',color:'#3a3838'}}>Provider:</Typography>
                    <Typography variant="body2" sx={{margin:'0.3rem',color:'#7f8180'}}>Private Hospital</Typography>
                </Box>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                    <Typography variant="div" sx={{margin:'0.3rem',color:'#3a3838'}}>Location:</Typography>
                    <Typography variant="body2" sx={{margin:'0.3rem',color:'#7f8180'}}>Lahore,Pakistan</Typography>
                </Box>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                <Typography variant="div" sx={{margin:'0.3rem ',color:'#3a3838'}}>Address:</Typography>
                <Typography variant="body2" sx={{margin:'0.3rem',color:'#7f8180'}}>H# C1 Block 2 DHA Phase 5</Typography>
                </Box>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                <Typography variant="div" sx={{margin:'0.3rem',color:'#3a3838'}}>Contact No:</Typography>
                <Typography variant="body2" sx={{margin:'0.3rem',color:'#7f8180'}}>090078001</Typography>
                </Box>
              </Box>
    </>
  )
}
