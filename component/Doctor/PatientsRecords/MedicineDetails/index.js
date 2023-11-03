import React from 'react'
import { Box,Typography,Divider } from '@mui/material'

export default function MedicineDetails() {
  return (
    <>
               <Box m='0.5rem'>
          <Typography variant="body2" sx={{ color: "#c1c0c0" }}>
              Medicine Prescribed:
            </Typography>

            <Box m='1rem 1.3rem'>
            <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Medicine Name:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                   Panadol
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin:'0 0 0 3rem'
                  }}
                >
                  Dosage:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                   Twice per day
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin:'0 0 0 3rem'
                  }}
                >
                  Amount:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                   10mg
                </Typography>
            </Box>
                <Box m='0.6rem 1.3rem'>
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Start Date:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                   00-00-0000
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin:'0 0 0 4rem'
                  }}
                >
                  End Date:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                   00-00-0000
                </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                  <Divider sx={{width:'90%'}}/>
                </Box>
          </Box> 
    </>
  )
}
