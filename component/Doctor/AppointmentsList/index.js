import { Box,Button,Tab,Tabs} from "@mui/material"
import { useRouter } from "next/router";
import { useEffect,useState } from "react";

const AppointmentsList = () => {
  const router= useRouter();
  const [value, setValue] = useState('/');

  const handleChange = (event, newValue) => {
    console.log("🚀 ~ handleChange ~ newValue:", newValue);
    setValue(newValue);
    router.push(`/doctor/appointments-list/${newValue}`)
  };
  useEffect(() => {
    if (router.pathname.includes("approved"))
      setValue("approved");
    else if (router.pathname.includes("rejected")) setValue("rejected");
    else if (router.pathname.includes("completed")) setValue("completed");

  }, []);
  return (
    <>
     <Box display='flex' justifyContent='center' m='2rem 0'>
     <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="Pending" value={"/"} />
        <Tab label="Approved" value={"approved"} />
        <Tab label="Completed" value={"completed"} />
        <Tab label="Rejected" value={"rejected"} />

      </Tabs>
     </Box>






    {/* <Box m='2rem 0 1rem 1rem'>
      <Link href='/doctor/appointments-list/' style={{textDecoration:'none',borderRight:'1px solid grey'}}><Button sx={{fontWeight:'700',color:'#95b3d1',fontSize:'0.777rem'}}>Waiting For Approval</Button></Link>
      <Link href='/doctor/appointments-list/approved' style={{textDecoration:'none',borderRight:'1px solid grey'}}><Button sx={{fontWeight:'700',color:'#95b3d1',fontSize:'0.777rem'}}>Approved</Button></Link>
      <Link href='/doctor/appointments-list/rejected' style={{textDecoration:'none'}}><Button sx={{fontWeight:'700',color:'#95b3d1',fontSize:'0.777rem'}}>Rejected</Button></Link>
      

    </Box> */}
    </>
  )
}

export default AppointmentsList