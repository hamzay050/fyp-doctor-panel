import React from "react";
import PersonalInformation from "@/component/Doctor/SignupForm/PersonalInformation";
import Avatar from "@/component/Doctor/SignupForm/Avatar";
import ContactInformation from "@/component/Doctor/SignupForm/ContactInformation";
import { Container,Box, Divider,Button } from "@mui/material";

export default function index() {
  return (
    <>
    <Container maxWidth="md" sx={{marginTop:4,backgroundColor:'white',border:'1px solid white',borderRadius:'5px'}}>
      <Avatar />
      <PersonalInformation />
      <Box m='1rem 0 2rem 0'>
      <Divider/>
      </Box>
      <ContactInformation />
      <Button variant="contained" size="small" color="secondary" sx={{color:'white',width:'15%',margin:'0.4rem 0.4rem 1.4rem 0.4rem'}}>Save</Button>
    </Container>
    </>
  );
}
