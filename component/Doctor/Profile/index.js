import {
  Box,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import { useState, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import Address from "./AddressInformation";
import Personal from "./PersonalInformation";
import Medical from "./MedicalInformation";

export default function Profile() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={2.5}
          sx={{
            backgroundColor: "white",
            height: "460px",
            margin: "2rem 1rem 0 4rem",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
             
              value={value}
              onChange={handleChange}
            >
              <Tab
                label="Personal"
                icon={<PersonIcon />}
                sx={{
                 
                  fontSize: "0.8rem",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:'start'
                }}
                disableRipple
              />
              <Tab
                label="Address"
                icon={<HomeIcon />}
                sx={{
                  fontSize: "0.8rem",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:'start'

                }}
                disableRipple
              />
              <Tab
                label="Medical"
                icon={<MedicalInformationIcon />}
                sx={{
                  fontSize: "0.8rem",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:'start'

                }}
                disableRipple
              />
            </Tabs>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            backgroundColor: "white",
            margin: "2rem 0 0 0",
            height: "460px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <Box m="1rem">
            {value === 0 && <Personal />}
            {value === 1 && <Address />}
            {value === 2 && <Medical />}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
