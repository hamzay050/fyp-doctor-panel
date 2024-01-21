import React from "react";
import WorkHistory from "@/component/Doctor/SignupForm/WorkHistory";
import { Container } from "@mui/material";

export default function index() {
  return(
    <>
    <Container maxWidth="md" sx={{marginTop:3,backgroundColor:'white',border:'1px solid white',borderRadius:'5px'}}>
      <WorkHistory/>
   </Container>
    </>
  ) 

}
