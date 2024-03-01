import React from 'react'
import Image from 'next/image'
import { Box, Grid, Typography,Avatar, Badge } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PiChart from "@/component/Chart"
import { ProfileContext } from '@/context/profileContext';
import { useContext,useEffect,useState } from 'react';
import { GET } from '@/services/httpClient';
import { AppContext } from "@/context/appContext";


const DHero = () => {
  const {setIsLoading,setSnackbarState}=useContext(AppContext)
  const [pendingCount, setPendingCount] = useState(0)
  const [approvedCount, setApprovedCount] = useState(0)
  const [appointments, setAppointments] = useState([])
  const [review, setReview] = useState([])
  const {profileData}=useContext(ProfileContext)
  async function fetchData(){
    try {
      setIsLoading(true)
      const response= await GET('/appointment/by-doctor-id',{params:{id:profileData?._id,status:'pending'}})
      const responseApproved= await GET('/appointment/by-doctor-id',{params:{id:profileData?._id,status:'approved'}})
       setPendingCount(response.length)
       setApprovedCount(responseApproved.length)
       setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
        setSnackbarState({
          severity: "error",
          open: true,
          message: "Failed to fetch,try again",
        })
    }
  }
  async function fetchAppointment(){
    try {
      setIsLoading(true)
      const response= await GET('/appointment/status/daily',{params:{id:profileData?._id}})
      setAppointments(response)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
        setSnackbarState({
          severity: "error",
          open: true,
          message: "Failed to fetch,try again",
        })
    }
  }
 
  useEffect(()=>{
    fetchData();
    fetchAppointment();
  },[profileData?._id])
  return (
    <div>
    <Grid container  sx={{marginTop:"20px",display:"flex" ,justifyContent:"space-around"}}  >
      <Grid item sm={5} >
        <Box height="130px" bgcolor="#eeeef4" color="#5e5d5d" boxShadow="1" borderRadius="7px" display="flex" alignItems="center"   >
       {/* < CalendarMonthIcon fontSize='large' /> */}
       <Image
              src="/Assests/docPic.svg"
              width={150}
              height={130}
              // layout='fill'
              alt="Login Image"
              style={{ margin: "0.3rem", borderRadius: "4px" }}
            />
  <Box>
  <Typography variant='body1' fontSize="17px" fontWeight="bold">
    Welcome , <span style={{ color:"#c24848" }}>Dr. {profileData?.firstName + " " + profileData?.lastName}</span>
  </Typography>
  <Typography variant='body2' fontSize="12px">
    Welcome to your dashboard, Dr.{profileData.firstName+" "+profileData?.lastName}. Here you can manage your appointments, review patient information, and provide exceptional care to your patients.
  </Typography>
</Box>


         </Box>
      </Grid>
      <Grid item sm={3}>
      <Box height="130px" bgcolor="#eeeef4" color="#5e5d5d" boxShadow="1" borderRadius="7px" display="flex" alignItems="center" justifyContent="center" gap="20px" >
       < PendingActionsIcon fontSize='large' />
       <Box textAlign="center" >
         <Typography variant='body1' fontSize="15px">Pending</Typography>
         <Typography variant='h5'>{pendingCount}</Typography>
         </Box>
         </Box>
      </Grid>
      <Grid item sm={3}>
      <Box height="130px" bgcolor="#eeeef4" color="#5e5d5d" boxShadow="1" borderRadius="7px" display="flex" alignItems="center" justifyContent="center" gap="20px" >
       < AssignmentTurnedInIcon fontSize='large' />
       <Box textAlign="center" >
         <Typography variant='body1' fontSize="15px">Approved</Typography>
         <Typography variant='h5'>{approvedCount}</Typography>
         </Box>
         </Box>
      </Grid>
      {/* <Grid item sm={2.5}>
      <Box height="100px" bgcolor="white" boxShadow="1" borderRadius="7px" display="flex" alignItems="center" justifyContent="center" gap="20px" >
       < ReviewsIcon fontSize='large' />
       <Box textAlign="center" >
         <Typography variant='body1' fontSize="15px">Reviews</Typography>
         <Typography variant='h5'>50</Typography>
         </Box>
         </Box>
      </Grid> */}

     </Grid>
     <Grid container   sx={{marginTop:"30px",display:"flex" ,justifyContent:"space-around"}}>
      <Grid item sm={7} >
       <Box height="350px" bgcolor="#eeeef4" boxShadow="1" borderRadius="7px" >
        <Typography variant='body2' fontSize="15px" pt="10px" pl="10px">Today Appointments</Typography> 
        <Box display="flex" justifyContent="space-between" mt="20px" mr="13px" pl="25px" pr="15px">
            <Typography>Name</Typography>
            <Typography>Date</Typography>
            <Typography>Status</Typography>
           
         </Box>
    {appointments && appointments?.slice(0,3).map((value)=>{
      return(
     <Box key={value._id} display="flex" justifyContent="space-between" bgcolor="white" alignItems="center" mt="20px" mr="13px" pl="10px" ml="8px" boxShadow="2" borderRadius="8px" height="60px">
        <Box display="flex" alignItems="center" gap="10px">  <Avatar sx={{width:"30px",height:"30px"}}></Avatar> <Typography> Johon</Typography></Box>
        <Typography>{new Date(value.date).toLocaleDateString()}</Typography>
        <Box width="110px" display="flex" alignItems="center" justifyContent="center" borderRadius="50px">
        <Badge badgeContent={value.status} color='primary' />
        </Box>
     </Box>
      )
    })}

       </Box>
      </Grid>
      <Grid item sm={4}>
      <Box height="350px" bgcolor="#eeeef4"  boxShadow="1" borderRadius="7px"  >
      <Typography variant='body1' pt="20px" pl="15px">
          Total Appointments
          
        </Typography>
      <Box height="280px" display="flex" alignItems="center"  gap="10px">
        <PiChart/>
        </Box>
         </Box>

</Grid>

     </Grid>

    </div>
  )
}

export default DHero