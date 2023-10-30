import AvatarBox from "@/component/Doctor/Avatar2";
import { Box,Typography, Divider} from "@mui/material"

export default function PatientDetail() {
    const width=70;
    const height=70;
  return (
    <>
        <Box m='2rem 1rem' sx={{display:'flex',alignItems:'center'}}>
                <AvatarBox mheight={height} mwidth={width}/>
                <Box m='0 1rem'>
                <Typography variant='body1' sx={{fontWeight:'570'}}>John Doe</Typography>
                <Typography variant='body2'>Khusra,02-02-1999</Typography>
                </Box>
              </Box>
              <Divider/>
              <Box m='1rem 0 0 0'>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                    <Typography variant="div" sx={{margin:'0.3rem',color:'#c1c0c0'}}>Provider:</Typography>
                    <Typography variant="body2" sx={{margin:'0.3rem'}}>Private Hospital</Typography>
                </Box>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                    <Typography variant="div" sx={{margin:'0.3rem',color:'#c1c0c0'}}>Location:</Typography>
                    <Typography variant="body2" sx={{margin:'0.3rem'}}>Lahore,Pakistan</Typography>
                </Box>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                <Typography variant="div" sx={{margin:'0.3rem ',color:'#c1c0c0'}}>Address:</Typography>
                <Typography variant="body2" sx={{margin:'0.3rem'}}>H# C1 Block 2 DHA Phase 5</Typography>
                </Box>
                <Box sx={{display:'flex',margin:'0.2rem 0'}}>
                <Typography variant="div" sx={{margin:'0.3rem',color:'#c1c0c0'}}>Contact No:</Typography>
                <Typography variant="body2" sx={{margin:'0.3rem'}}>090078001</Typography>
                </Box>
              </Box>
    </>
  )
}
