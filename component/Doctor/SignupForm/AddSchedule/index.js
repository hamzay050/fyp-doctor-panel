import { Box, Typography, TextField, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function AddSchedule() {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [loading, setLoading] = useState({
    isMonday: false,
    isTuesday: false,
    isWednesday: false,
    isThursday: false,
    isFriday: false,
    isSaturday: false,
    isSunday: false,
  });

  const handleSwitchChange = (day) => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      [day]: !prevLoading[day],
    }));
  };

  console.log(loading);

  const handleClick = () => {

  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {weekdays.map((value, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "1px solid #80808063",
            margin: "1rem 1rem 0 1rem",
            borderRadius: "2px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ margin: "0 0.3rem" }}>{value}</Typography>
            <Switch checked={loading[`is${value}`]} onChange={() => handleSwitchChange(`is${value}`)} sx={{ margin: "0 0.2rem" }} />
          </Box>
          <Box sx={{ borderTop: "1px solid #d7c5c54f" }}>
            {loading[`is${value}`] && (
              <Box sx={{ margin: "2rem 1rem", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <TextField variant="outlined" size="small" type="time" helperText="Start Time" sx={{ margin: "0 0.2rem" }} />
                  <TextField variant="outlined" size="small" type="time" helperText="End Time" sx={{ margin: "0 0.2rem" }} />
                </Box>
                <Box sx={{ margin: "1.2rem 0 0 0" }}>
                  <Button color="secondary" size="small" sx={{ color: "white" }} variant="contained" onClick={handleClick}>
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
