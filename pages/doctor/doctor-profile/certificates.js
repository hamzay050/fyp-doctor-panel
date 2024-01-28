import React from "react";
import Certifications from "@/component/Doctor/SignupForm/Certifications";
import { Container } from "@mui/material";
import PrivateRoute from "@/component/Doctor/SecurePage";

export default function index() {
  return(
    <>
    <PrivateRoute>
    <Container maxWidth="md" sx={{marginTop:3,backgroundColor:'white',border:'1px solid white',borderRadius:'5px'}}>
  <Certifications />
  </Container>
    </PrivateRoute>
    </>
  )
  
}
