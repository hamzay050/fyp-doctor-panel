import { Box,Button} from "@mui/material"
import Link from "next/link"
const AppointmentsList = () => {
  return (
    <>
    <Box m='3rem 0 1rem 1rem'>
      <Link href='/doctor/appointments-list/' style={{textDecoration:'none',borderRight:'1px solid grey'}}><Button sx={{fontWeight:'700',color:'#95b3d1',fontSize:'0.777rem'}}>Waiting For Approval</Button></Link>
      <Link href='/doctor/appointments-list/approved' style={{textDecoration:'none',borderRight:'1px solid grey'}}><Button sx={{fontWeight:'700',color:'#95b3d1',fontSize:'0.777rem'}}>Approved</Button></Link>
      <Link href='/doctor/appointments-list/rejected' style={{textDecoration:'none'}}><Button sx={{fontWeight:'700',color:'#95b3d1',fontSize:'0.777rem'}}>Rejected</Button></Link>
      

    </Box>
    </>
  )
}

export default AppointmentsList