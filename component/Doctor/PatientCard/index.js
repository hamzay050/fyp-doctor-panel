import React, { useContext, useEffect, useState } from "react";
import Avatarpatient from "../Avatar2";
import {
  Button,
  CardActions,
  Card,
  CardContent,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { GET, UPDATE } from "@/services/httpClient";
import { ProfileContext } from "@/context/profileContext";
const PatientCard = () => {
  const { profileData } = useContext(ProfileContext);
  const [appointments, setAppointments] = useState();
  const router = useRouter();
  const totalwidth = 40;
  const totalheight = 40;
  async function fetchAllAppointments() {
    try {
      const response = await GET("/appointment/by-doctor-id", {
        params: { id: profileData._id, status: "pending" },
      });
      setAppointments(response);
    } catch (error) {}
  }
  useEffect(() => {
    if (profileData._id) fetchAllAppointments();
  }, [profileData._id]);
  async function updateAppointmentStatus(id, status) {
    try {
      const response = await UPDATE("/appointment/by-doctor-id", {
        id,
        status,
      });
      if (response) fetchAllAppointments();
    } catch (error) {}
  }
  return (
    <Box
      sx={{
        margin: "2rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {appointments?.map((appointment) => (
        <Card sx={{ width: 250 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            m="1rem 0 0.5rem 0"
          >
            <Avatarpatient mwidth={totalwidth} mheight={totalheight} />
            <Typography
              sx={{ fontWeight: 600, color: "#393a3a", fontSize: "13px" }}
              variant="body1"
              component="div"
            >
              nam yha ay ga
            </Typography>
          </Box>
          <CardContent>
            <Box m="0.4rem 0 ">
              <Typography
                variant="body1"
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  color: "#757676",
                  fontSize: "13px",
                }}
              >
                rabta nambar
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "inline", color: "#515454" }}
              >
                {" "}
                00000000{" "}
              </Typography>
            </Box>
            <Box m="0.4rem 0 ">
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
                none@gmail.com
              </Typography>
            </Box>
            <Box m="0.4rem 0 ">
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
                {appointment?.date}
              </Typography>
            </Box>
            <Box m="0.4rem 0 ">
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
                slot id k sath join or start or end time
              </Typography>
            </Box>
          </CardContent>

          <CardActions
            sx={{
              margin: "0.5rem",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                updateAppointmentStatus(appointment._id, "approved")
              }
            >
              Approve
            </Button>

            <Button
              color="secondary"
              sx={{
                color: "#fff",
              }}
              variant="contained"
              size="small"
              onClick={() =>
                updateAppointmentStatus(appointment._id, "cancelled")
              }
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default PatientCard;
