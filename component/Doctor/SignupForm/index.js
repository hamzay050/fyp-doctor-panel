import { Box, Button } from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import Avatar from "./Avatar";
import ContactInformation from "./ContactInformation";
import ProfessionalDetails from "./ProfessionalDetails";
import EducationDetails from "./EducationDetails";
import WorkHistory from "./WorkHistory";
import { useState } from "react";
import AddSchedule from "./AddSchedule";
import LeftSideTabs from "./LeftSideTabs";
export default function SignupForm() {
  const [data, setData] = useState({
    profileImage: "",
    firstName: "",
    lastName: "",
    nationalIdentityNumber: "",
    gender: "",
    email: "",
    contactNumber: "",
    addressLine: "",
    streetNumber: "",
    city: "",
    medicalLicenseNumber: "",
    specialities: [],
    certificateTitle: [],
    certificateInstituteName: [],
    certificateStartDate: [],
    certificateEndDate: [],
    degreeTitle: [],
    educationInstituteName: [],
    degreeStartDate: [],
    degreeEndDate: [],
    designation: [],
    designationStartDate: [],
    designationEndDate: [],
    roleDetails: [],
  });
  const showData = () => {
    console.log(data);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <LeftSideTabs />{" "} */}
        <Box
          sx={{
            width: { md: "98%", lg: "90%" },
            backgroundColor: "white",
            border: "1px solid #89868636",
            height: "auto",
            marginTop: "0.056rem",
            borderRadius: "5px",
          }}
        >
          <Avatar data={data} setData={setData} />
          <PersonalInformation data={data} setData={setData} />
          <ContactInformation data={data} setData={setData} />
          <ProfessionalDetails data={data} setData={setData} />
          {/* <EducationDetails />
          <WorkHistory /> */}
          <AddSchedule />
          <Button
            variant="contained"
            onClick={showData}
            sx={{ margin: { xs: "1rem 0.4rem", sm: "0.4rem", md: "0 0.4rem" } }}
          >
            Submit
          </Button>
        </Box>{" "}
      </Box>
    </>
  );
}
