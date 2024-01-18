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

      <Box sx={{ margin: { xs: "0rem", sm: "1rem 0" } }}>
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
            width: { xs: "100%", sm: "40%", md: "30%" },
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
            width: { xs: "100%", sm: "40%", md: "30%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="Street Address"
          name="street Address"
          size="small"
          value={data.streetAddress}
          onChange={(e) => {
            setData({ ...data, streetAddress: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <Box sx={{margin:'1rem 0'}}>
        <TextField
          variant="outlined"
          label="Street Address II"
          name="streetAddress2"
          size="small"
          value={data.streetAddress2}
          onChange={(e) => {
            setData({ ...data, streetAddress2: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%" },
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
            width: { xs: "100%", sm: "40%", md: "19%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="State"
          name="state"
          size="small"
          value={data.state}
          onChange={(e) => {
            setData({ ...data, state: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "19.5%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        <TextField
          variant="outlined"
          label="Country"
          name="country"
          size="small"
          value={data.country}
          onChange={(e) => {
            setData({ ...data, country: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "20%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
          }}
        />
        </Box>

      </Box>
    </>
  );
}
