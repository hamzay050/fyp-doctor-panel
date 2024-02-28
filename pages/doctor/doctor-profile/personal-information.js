import React from "react";
import PersonalInformation from "@/component/Doctor/SignupForm/PersonalInformation";
import Avatar from "@/component/Doctor/SignupForm/Avatar";
import { Container, Box, Divider, Button } from "@mui/material";
import PrivateRoute from "@/component/Doctor/SecurePage";

export default function index() {
  return (
    <>
    <PrivateRoute>
      <Container
        maxWidth="md"
        sx={{
          marginTop: 4,
          backgroundColor: "white",
          border: "1px solid white",
          borderRadius: "5px",
        }}
      >
        <PersonalInformation />
        <Box m="1rem 0 2rem 0">
          <Divider />
        </Box>
      </Container>
    </PrivateRoute>
    </>
  );
}
