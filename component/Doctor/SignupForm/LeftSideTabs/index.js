import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
export default function VerticalTabs() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("🚀 ~ handleChange ~ newValue:", newValue);
    setValue(newValue);
    router.push(`/doctor/doctor-profile/${newValue}`);
  };
  useEffect(() => {
    if (router.pathname.includes("personal-information"))
      setValue("personal-information");
    else if (router.pathname.includes("education")) setValue("education");
    else if (router.pathname.includes("certificates")) setValue("certificates");
    else if (router.pathname.includes("specialization")) setValue("specialization")
    else if (router.pathname.includes("scheduled")) setValue("scheduled");
    else if (router.pathname.includes("work-experience")) setValue("work-experience");
    else if (router.pathname.includes("about")) setValue("about");
  }, []);
  return (
    <Box
      sx={{
        // flexGrow: 1,

        width: "100%",

        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Personal Information" value={"personal-information"} />
        <Tab label="Education" value={"education"} />
        <Tab label="Specialization" value={"specialization"} />
        <Tab label="Certifications" value={"certificates"} />
        <Tab label="Work Experience" value={"work-experience"} />
        <Tab label="Schedules" value={"scheduled"} />
        <Tab label="About" value={"about"} />
      </Tabs>
    </Box>
  );
}
