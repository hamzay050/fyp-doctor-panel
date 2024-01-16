import { Typography, Box, TextField } from "@mui/material";
import { useState } from "react";

export default function ContactInformation() {
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
      <Typography variant="body2" sx={{ margin: "0.4rem", color: "#646464" }}>
        Contact Information:{" "}
      </Typography>
      <Box sx={{ margin: { xs: "0rem", sm: "0.4rem" } }}>
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          size="small"
          type="email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "20%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="Contact Number"
          name="contactNumber"
          size="small"
          value={data.contactNumber}
          onChange={(e) => {
            setData({ ...data, contactNumber: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "20%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="Address Line"
          name="addressLine"
          size="small"
          value={data.addressLine}
          onChange={(e) => {
            setData({ ...data, addressLine: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "20%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="Street Number"
          name="streetNumber"
          size="small"
          value={data.streetNumber}
          onChange={(e) => {
            setData({ ...data, streetNumber: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "14%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="City"
          name="city"
          size="small"
          value={data.city}
          onChange={(e) => {
            setData({ ...data, city: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "13%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
      </Box>
    </>
  );
}
