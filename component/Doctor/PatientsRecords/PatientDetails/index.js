import React from 'react'
import { Box,Typography } from '@mui/material'

export default function PatientDetails() {
  return (
    <>
                <Box m="0.5rem">
            <Typography variant="body2" sx={{ color: "#c1c0c0" }}>
              Contact Information:
            </Typography>
            <Box m="1.3rem 0">
              <Box m="1rem ">
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Patient Name:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                  John doe
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0 0 0 2rem",
                  }}
                >
                  Blood Group:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                  AB+
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0 0 0 2rem",
                  }}
                >
                  Height:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                  5'7
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0 0 0 2rem",
                  }}
                >
                  Weight:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                 
                  57
                </Typography>
              </Box>

              <Box m="1rem">
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Contact No:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {" "}
                  0000000
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    display: "inline",
                    color: "#333434fa",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0 0 0 3rem",
                  }}
                >
                  Gmail:
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  00000@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
    </>
  )
}
