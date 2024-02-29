import { Box, Typography } from "@mui/material";
import React from "react";

function index({patientData}) {
  return (
    <Box mt='2rem'>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Contact Number:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.contactNumber}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Date of birth:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {new Date(patientData?.profileDetails[0]?.dateOfBirth).toLocaleDateString()}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Blood group:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.bloodGroup}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Gender:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.gender}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Height:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.height}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Weight:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.weight}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>Allergy reaction:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.allergyReaction}</Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight:'bold',fontSize:'14px',display:'inline'}}>General health:</Typography>
        <Typography sx={{fontSize:'14px',display:'inline'}}> {patientData?.profileDetails[0]?.generalHealth}</Typography>
      </Box>
    </Box>
  );
}

export default index;
