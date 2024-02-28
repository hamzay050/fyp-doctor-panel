import React from "react";
import Avatarpatient from "../Avatar2";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "@/context/profileContext";
import { GET } from "@/services/httpClient";

const PatientCard = () => {
  const { profileData } = useContext(ProfileContext);
  const totalwidth = 40;
  const totalheight = 40;
  const [allAppointmentData, setAllAppointmentData] = useState([]);

  async function getPatientDetails() {
    try {
      const response = await GET(
        `/appointment/patient-rejected-details/${profileData._id}`
      );
      setAllAppointmentData(response);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(allAppointmentData);
  useEffect(() => {
    if (profileData._id) {
      getPatientDetails();
    }
  }, [profileData._id]);
  return (
    <Box display="flex" justifyContent="center" mt="2rem">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
      >
        {allAppointmentData?.map((appointment) => {
          return(
            <Card sx={{ width: 270, margin: "0.7rem", paddingTop: "0.8rem" }} key={appointment._id}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatarpatient mwidth={totalwidth} mheight={totalheight} />
              <Typography
                sx={{ fontWeight: 600, color: "#393a3a", fontSize: "13px" }}
                variant="body1"
                component="div"
              >
                {appointment.patientsData[0].firstName +
                  " " +
                  appointment.patientsData[0].lastName}
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
                  Contact No:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "inline", color: "#515454" }}
                >
                  {" "}
                  {appointment.patientsData[0].contactNumber}{" "}
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
                  Gmail:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "inline", color: "#515454" }}
                >
                  {" "}
                  {appointment.patientsData[0].email}{" "}
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
                  {appointment?.slotsData[0]?.startTime +
                    " - " +
                    appointment?.slotsData[0]?.endTime}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          )
        })}
      </Box>
    </Box>
  );
};

export default PatientCard;
