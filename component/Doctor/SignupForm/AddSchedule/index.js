import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Switch, TextField, Button } from "@mui/material";
import { GET, POST } from "@/services/httpClient";
import { ProfileContext } from "@/context/profileContext";
import { AppContext } from "@/context/appContext";

const WeekScheduleForm = () => {
  const {setIsLoading,setSnackbarState}=useContext(AppContext)
  const { profileData } = useContext(ProfileContext);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [schedule, setSchedule] = useState({});

  const handleSwitchChange = (day) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        isAvailable: !prevSchedule[day]?.isAvailable || false,
      },
    }));
  };

  const handleTimeChange = (day, field) => (e) => {
    const value = e.target.value;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value,
      },
    }));
  };

  const handleSave = async () => {
    console.log(schedule);
    let body = {};
    body.timeSlots = schedule;
    body.doctorId = profileData._id;
    try {
      setIsLoading(true)
      const response = await POST("/timeSlot", body);
      setIsLoading(false)
      if(response){
        setSnackbarState({
          severity: "success",
          open: true,
          message: "Saved successfully",
        })
      }
    } catch (error) {
      setIsLoading(false)
      setSnackbarState({
        severity: "error",
        open: true,
        message: "Failed to fetch,try again",
      })
    }
  };
  async function fetchTimeSlots() {
    try {
      setIsLoading(true)
      const response = await GET("/timeSlot", {
        params: { doctorId: profileData._id },
      });
      console.log("🚀 ~ fetchTimeSlots ~ response:", response);
      setSchedule(response);
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
  useEffect(() => {
    if (profileData._id) fetchTimeSlots();
  }, [profileData._id]);

  return (
    <Box
      height="80vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="8px"
    >
      {days.map((day) => (
        <Box
          width="80%"
          key={day}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
        >
          <Box width="60px">
            <Typography>{day}</Typography>
          </Box>
          <Switch
            checked={schedule[day] || false}
            onChange={() => handleSwitchChange(day)}
            sx={{ margin: "0 0.2rem" }}
          />

          <Box display="flex" gap="20px">
            <TextField
              variant="outlined"
              size="small"
              type="time"
              value={schedule[day]?.startTime || ""}
              onChange={handleTimeChange(day, "startTime")}
              disabled={!schedule[day]}
            />
            <Typography>To</Typography>
            <TextField
              variant="outlined"
              size="small"
              type="time"
              value={schedule[day]?.endTime || ""}
              onChange={handleTimeChange(day, "endTime")}
              disabled={!schedule[day]}
            />
          </Box>
        </Box>
      ))}
      <Box width="80%" display="flex" justifyContent="flex-end">
        <Button size="small" variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default WeekScheduleForm;
