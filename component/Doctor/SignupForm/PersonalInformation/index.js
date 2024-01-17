import {
  TextField,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

export default function PersonalInformation() {
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
  return (
    <>
      <Typography variant="body2" sx={{ margin: "1rem 0", color: "#646464" }}>
        Personal Information:{" "}
      </Typography>
      <Box
        sx={{
          margin: { xs: "0rem", sm: "0.4rem" },
        }}
      >
        <TextField
          variant="outlined"
          label="First Name"
          name="firstName"
          size="small"
          value={data.firstName}
          onChange={(e) => {
            setData({ ...data, firstName: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          name="lastName"
          size="small"
          value={data.lastName}
          onChange={(e) => {
            setData({ ...data, lastName: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="CNIC"
          name="nationalIdentityNumber"
          size="small"
          value={data.nationalIdentityNumber}
          onChange={(e) => {
            setData({ ...data, nationalIdentityNumber: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <ToggleButtonGroup
          color="primary"
          value={data.gender}
          exclusive
          onChange={(event, newAlignment) => {
            setData({ ...data, gender: newAlignment });
          }}
          sx={{ margin: { xs: "0.4rem 0", sm: "0.4rem", md: "1rem 0.4rem" } }}
        >
          <ToggleButton
            value="male"
            size="small"
            color="secondary"
            sx={{ width: { xs: "100px", sm: "130px", lg: "170px" } }}
          >
            Male
          </ToggleButton>
          <ToggleButton
            value="female"
            size="small"
            color="secondary"
            sx={{ width: { xs: "100px", sm: "130px", lg: "170px" } }}
          >
            Female
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}
