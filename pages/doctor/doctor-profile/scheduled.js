import React from "react";
import AddSchedule from "@/component/Doctor/SignupForm/AddSchedule";
import { Container } from "@mui/material";
import PrivateRoute from "@/component/Doctor/SecurePage";

export default function index() {
  return (
  <>
  <PrivateRoute>
  <Container maxWidth="md" sx={{marginTop:3,backgroundColor:'white',border:'1px solid white',borderRadius:'5px'}} >
  <AddSchedule />
  </Container>
  </PrivateRoute>
  </>
  )
}
