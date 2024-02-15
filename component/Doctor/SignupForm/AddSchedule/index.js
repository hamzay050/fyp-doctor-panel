import { Box, Typography, TextField, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useState,useContext } from "react";
import { UPDATE } from "@/services/httpClient";
import { ProfileContext } from "@/context/profileContext";

export default function AddSchedule() {
  const {profileData}= useContext(ProfileContext)
  console.log(profileData)
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [value, setValue] = useState({startTime:null,endTime:null})

  const [loading, setLoading] = useState({
    isMonday: false,
    isTuesday: false,
    isWednesday: false,
    isThursday: false,
    isFriday: false,
    isSaturday: false,
    isSunday: false,
    mondayStartTime: null,
    mondayEndTime: null,
    tuesdayStartTime: null,
    tuesdayEndTime: null,
    wednesdayStartTime: null,
    wednesdayEndTime: null,
    thursdayStartTime: null,
    thursdayEndTime: null,
    fridayStartTime: null,
    fridayEndTime: null,
    saturdayStartTime: null,
    saturdayEndTime: null,
    sundayStartTime: null,
    sundayEndTime: null,
  });

  const handleSwitchChange = (day) => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      [day]: !prevLoading[day],
    }));
  };


  console.log(loading);


  const data={
    isMonday: loading.isMonday,
    isTuesday: loading.isTuesday,
    isWednesday: loading.isWednesday,
    isThursday: loading.isThursday,
    isFriday: loading.isFriday,
    isSaturday: loading.isSaturday,
    isSunday: loading.isSunday,
    mondayStartTime: loading.isMonday?value.startTime:null,
    mondayEndTime: loading.isMonday?value.endTime:null,
    tuesdayStartTime: loading.isTuesday?value.startTime:null,
    tuesdayEndTime: loading.isTuesday?value.endTime:null,
    wednesdayStartTime: loading.isWednesday?value.startTime:null,
    wednesdayEndTime: loading.isWednesday?value.endTime:null,
    thursdayStartTime: loading.isThursday?value.startTime:null,
    thursdayEndTime: loading.isThursday?value.endTime:null,
    fridayStartTime: loading.isFriday?value.startTime:null,
    fridayEndTime: loading.isFriday?value.endTime:null,
    saturdayStartTime: loading.isSaturday?value.startTime:null,
    saturdayEndTime: loading.isSaturday?value.endTime:null,
    sundayStartTime: loading.isSunday?value.startTime:null,
    sundayEndTime: loading.isSunday?value.endTime:null,
  }
  const saveSchedule = async () => {
    try {
      const response= await UPDATE(`/profile/${profileData?._id}`,data) 
    } catch (error) {
      console.log(error)
    }
  };
  const date=new Date();
console.log(value)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem 0 2rem 0",
      }}
    >
      {weekdays.map((value, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
            border: "1px solid #80808063",
            margin: "1rem 1rem 0 1rem",
            borderRadius: "2px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ padding: "0 0.3rem", fontWeight: 500 }}>
              {value}
            </Typography>
            <Switch
              checked={loading[`is${value}`]}
              onChange={() => handleSwitchChange(`is${value}`)}
              sx={{ margin: "0 0.2rem" }}
            />
          </Box>
          <Box sx={{ borderTop: "1px solid #d7c5c54f" }}>
            {loading[`is${value}`] && (
              <Box
                sx={{
                  margin: "2rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
<TextField
    variant="outlined"
    size="small"
    type="time"
    helperText="Start Time"
    value={loading[`${value.toLowerCase()}StartTime`]}
    onChange={(e) => {
        const stringTime = e.target.value;
        const splitTime = stringTime.split(':');
        const hours = parseInt(splitTime[0]);
        const minutes = parseInt(splitTime[1]);
        
        const updatedDate = new Date(); // Create a new Date object
        updatedDate.setHours(hours);
        updatedDate.setMinutes(minutes);
        updatedDate.setSeconds(0);

        setValue(prevValue => ({
            ...prevValue,
            startTime: updatedDate
        }));

        setLoading(prevLoading => ({
            ...prevLoading,
            [`${value.toLowerCase()}StartTime`]: e.target.value
        }));
    }}
/>
<TextField
    variant="outlined"
    size="small"
    type="time"
    helperText="End Time"
    value={loading[`${value.toLowerCase()}EndTime`]}
    onChange={(e) => {
        const stringTime = e.target.value;
        const splitTime = stringTime.split(':');
        const hours = parseInt(splitTime[0]);
        const minutes = parseInt(splitTime[1]);

        const updatedDate = new Date(); // Create a new Date object
        updatedDate.setHours(hours);
        updatedDate.setMinutes(minutes);
        updatedDate.setSeconds(0);

        setValue(prevValue => ({
            ...prevValue,
            endTime: updatedDate
        }));

        setLoading(prevLoading => ({
            ...prevLoading,
            [`${value.toLowerCase()}EndTime`]: e.target.value
        }));

        console.log(e.target.value);
    }}
/>

                </Box>
                <Box
                  sx={{
                    margin: "1.2rem 0 0 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    color="secondary"
                    size="small"
                    sx={{ color: "white", width: "55%" }}
                    variant="contained"
                    onClick={saveSchedule}
                    disabled={loading[`${value.toLowerCase()}StartTime`] === "" || loading[`${value.toLowerCase()}EndTime`] === ""}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
