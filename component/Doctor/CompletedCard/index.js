import React, { useContext, useEffect, useState } from "react";
import Avatarpatient from "../Avatar2";
import {
  Card,
  Link,
  Button,
  CardContent,
  Typography,
  Box,
  CardActions,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GET } from "@/services/httpClient";
import { useRouter } from "next/router";
import { ProfileContext } from "@/context/profileContext";
import { AppContext } from "@/context/appContext";

const PatientCard = () => {
  const router = useRouter();
  const {setIsLoading,setSnackbarState}=useContext(AppContext)
  const { profileData } = useContext(ProfileContext);
  const [appointments, setAppointments] = useState();
  const [allAppointmentData, setAllAppointmentData] = useState([])
  const totalwidth = 40;
  const totalheight = 40;
  useEffect(() => {
    if (profileData._id) fetchAllAppointments();
  }, [profileData._id]);
  async function fetchAllAppointments() {
    try {
      setIsLoading(true)
      const response = await GET("/appointment/by-doctor-id", {
        params: { id: profileData._id, status: "approved" },
      });
      setAppointments(response);
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

  async function getPatientDetails(){
    try {
      setIsLoading(true)
        const response= await GET(`/appointment/patient-completed-details/${profileData._id}`)
        setAllAppointmentData(response)
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
  console.log(allAppointmentData)
  useEffect(()=>{
         if(profileData._id){
          getPatientDetails();
         }
  },[profileData._id])
  return (
   <Box display='flex' justifyContent='center' mt='2rem'>
     <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'90%'
      }}
      flexWrap='wrap'
    >
      {allAppointmentData?.map((appointment) => (
        <Card sx={{ width: 270,margin:'0.7rem',padding:'0.3rem 0'}} key={appointment._id}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="0.5rem 0"
  
          >
            <Avatarpatient image={appointment?.patientsData[0]?.profilePicture} mwidth={totalwidth} mheight={totalheight} />
            <Typography
              sx={{ fontWeight: 600, color: "#393a3a", fontSize: "13px" }}
              variant="body1"
              component="div"
            >
        {appointment?.patientsData[0]?.firstName + " " + appointment?.patientsData[0]?.lastName}

            </Typography>
          </Box>
          <CardContent>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  color: "#757676",
                  fontSize: "13px",
                }}
              >
                Contact number:
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "inline", color: "#515454" }}
              >
                {" "}
                {appointment?.patientsData[0]?.contactNumber}{" "}
              </Typography>
            </Box>
            <Box >
              <Typography
                variant="body1"
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  color: "#757676",
                  fontSize: "13px",
                }}
              >
                Gmail:
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "inline", color: "#515454" }}
              >
                {" "}
                {appointment?.patientsData[0]?.email}{" "}
              </Typography>
            </Box>
            <Box >
              <Typography
                variant="body1"
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  color: "#757676",
                  fontSize: "13px",
                }}
              >
                Appointment Date:
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "inline", color: "#515454" }}
              >
                {" "}
                {new Date(appointment.date).toLocaleDateString()}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  color: "#757676",
                  fontSize: "13px",
                }}
              >
                Appointment Time:
              </Typography>
              <Typography variant="body2" sx={{ display: "inline" }}>
                {" "}
                {appointment?.slotsData[0]?.startTime + " - " + appointment?.slotsData[0]?.endTime}

              </Typography>
            </Box>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() =>
                router.push(
                  `/doctor/medicine/?appointmentId=${appointment._id}&&patientId=${appointment.patientId}`
                )
              }
              sx={{ display: "flex", justifyContent: "center",color:'white' }}
              variant="contained"
              size="small"
              color="secondary"
            >
              <Typography textTransform='none' fontSize='14px'>Prescribed Medicine</Typography>
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
   </Box>
  );
};

export default PatientCard;
