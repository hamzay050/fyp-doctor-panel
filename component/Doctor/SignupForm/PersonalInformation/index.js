import { AppContext } from "@/context/appContext";
import { ProfileContext } from "@/context/profileContext";
import { GET, UPDATE } from "@/services/httpClient";
import {
  TextField,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function PersonalInformation() {
  const { profileData } = useContext(ProfileContext);

  const [userId, setUserId] = useState();
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
    speciality:""
  });

  async function handleUpdate() {
    try {
      const response = await UPDATE(`/profile/${profileData._id}`, data);
    } catch (error) {
      console.log("🚀 ~ handleUpdate ~ error:", error);
    }
    console.log(data);
  }
  // async function fetchUserData(userId) {
  //   console.log("🚀 ~ fetchUserData ~ userData:", userId);
  //   const response = await GET(`/profile/${userId}`);
  //   try {
  //   } catch (error) {}
  // }
  // useEffect(() => {
  //   if (userId) fetchUserData(userId);
  // }, [userId]);
  useEffect(() => {
    console.log("🚀🚀🚀🚀🚀 ~ PersonalInformation ~ profileData:", profileData);
    if (!profileData) return;
    setData({
      profileImage: profileData.profileImage,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      nationalIdentityNumber: profileData.nationalIdentityNumber,
      gender: profileData.gender,
      email: profileData.email,
      contactNumber: profileData.contactNumber,
      streetAddress: profileData.streetAddress,
      streetAddress2: profileData.streetAddress2,
      city: profileData.city,
      medicalLicenseNumber: profileData.medicalLicenseNumber,
      state: profileData.state,
      country: profileData.country,
      speciality:profileData.speciality
    });
  }, [profileData]);
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
            sx={{ width: { xs: "100px", sm: "130px", lg: "120px" } }}
          >
            Male
          </ToggleButton>
          <ToggleButton
            value="female"
            size="small"
            color="secondary"
            sx={{ width: { xs: "100px", sm: "130px", lg: "120px" } }}
          >
            Female
          </ToggleButton>
        </ToggleButtonGroup>
        <TextField
          variant="outlined"
          label="Medical license number(PMDC)"
          name="medicalLicenseNumber"
          size="small"
          fullWidth
          type="medicalLicenseNumber"
          value={data.medicalLicenseNumber}
          onChange={(e) => {
            setData({ ...data, medicalLicenseNumber: e.target.value });
          }}
          sx={{
            width: { xs: "100%", sm: "40%", md: "27%" },
            margin: { xs: "0.4rem 0", sm: "0.4rem", md: "1rem 0.4rem" },
          }}
        />
         <TextField
              variant="outlined"
              label="speciality"
              name="speciality"
              size="small"
              value={data.speciality}
              onChange={(e) => {
                setData({ ...data, speciality: e.target.value });
              }}
              sx={{
                width: { xs: "100%", sm: "40%", md: "30%" },
                margin: { xs: "0.4rem 0", sm: "0.4rem", md: "1rem 0.4rem" },
              }}
            />
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
          <Box sx={{ margin: "1rem 0" }}>
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
          <Button
            onClick={handleUpdate}
            variant="contained"
            size="small"
            color="secondary"
            sx={{
              color: "white",
              width: "15%",
              margin: "0.4rem 0.4rem 1.4rem 0.4rem",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}
