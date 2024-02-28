import AvatarBox from "@/component/Doctor/Avatar2";
import { Box, Typography, Divider, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Profile from "./Profile";
import Chat from "./Chat";
import Reports from "./Reports";

export default function PatientDetail({ patientData }) {
  const width = 40;
  const height = 40;
  const [value, setValue] = useState("Profile");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box display="flex" alignItems="center" gap={1} p={2}>
        <AvatarBox image={patientData?.profileDetails[0]?.profilePicture} mheight={height} mwidth={width} />
        <Typography variant="body1" sx={{ fontWeight: "570" }}>
          {patientData?.profileDetails[0]?.firstName + " " + patientData?.profileDetails[0]?.lastName}
        </Typography>
        <Typography variant="body2">
          {patientData?.profileDetails[0]?.dateOfBirth ? new Date(patientData.profileDetails[0].dateOfBirth).toLocaleDateString() : null}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="Profile" label="Profile" />
          <Tab value="Reports" label="Reports" />
          <Tab value="Messages" label="Messages" />
        </Tabs>
      </Box>
      <Divider />
      <Box>
        {value == "Profile" ? (
          <Profile />
        ) : value == "Reports" ? (
          <Reports />
        ) : value == "Messages" ? (
          <Chat patientData={patientData} />
        ) : null}
      </Box>
    </>
  );
}
