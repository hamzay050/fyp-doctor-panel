import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Avatar() {
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
  const fileInput = useRef(null);
  const handleInput = (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageURL = URL.createObjectURL(image);
      setData({ ...data, profileImage: imageURL });
    }
  };
  const chooseImg = () => {
    fileInput.current.click();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          type="file"
          onChange={handleInput}
          ref={fileInput}
          accept="image/*"
          style={{ display: "none" }}
        />
        <Image
          onClick={chooseImg}
          src={
            data.profileImage === ""
              ? "/Assests/docprofile.png"
              : data.profileImage
          }
          width={70}
          height={70}
          alt="Profile Image"
          style={{ borderRadius: "50%", margin: "0.4rem 0 0 0" }}
        />
        <Typography variant="body2">Select Profile Image</Typography>
      </Box>
    </>
  );
}
