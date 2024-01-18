import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useEffect } from "react";

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

export default function VerticalTabs() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("🚀 ~ handleChange ~ newValue:", newValue);
    setValue(newValue);
    router.push(`/doctor/doctor-form/${newValue}`);
  };
  useEffect(() => {
    if (router.pathname.includes("personal-information"))
      setValue("personal-information");
    else if (router.pathname.includes("education")) setValue("education");
    else if (router.pathname.includes("certificates")) setValue("certificates");
    else if (router.pathname.includes("scheduled")) setValue("scheduled");
    else if (router.pathname.includes("work-experience"))
      setValue("work-experience");
  }, []);
  return (
    <Box
      sx={{
        // flexGrow: 1,

        width: "250px",
        height: "100%",
        display: "flex",

        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Personal Information" value={"personal-information"} />
        <Tab label="Education" value={"education"} />
        <Tab label="Certifications" value={"certificates"} />
        <Tab label="Work Experience" value={"work-experience"} />
        <Tab label="Schedules" value={"scheduled"} />
      </Tabs>
    </Box>
  );
}
