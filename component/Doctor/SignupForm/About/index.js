import { Box, TextField,Button,Typography } from "@mui/material";
import { useState,useContext,useEffect } from "react";
import { ProfileContext } from "@/context/profileContext";
import {UPDATE,GET} from "@/services/httpClient"

export default function About() {
    const [doctorAbout, setDoctorAbout] = useState(null)
    const {profileData}= useContext(ProfileContext)
  const saveAbout= async ()=>{
    try {
        const response= await UPDATE(`/profile/${profileData?._id}`,{doctorAbout});

    } catch (error) {
        console.log(error)
    }
  }
  async function fetchRecords(){
    try {
        const response= await GET(`/profile/${profileData?._id}`)
        setDoctorAbout(response.doctorAbout)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    if(profileData._id){
        fetchRecords()
    }
  }, [profileData._id])
  
  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        height="80vh"
        position='relative'
      >
        <Box width="57%" height="auto" position='absolute' top='10%' sx={{ backgroundColor: "white",border:'1px solid #2528260a',borderRadius:'10px' }}>
          <Box
            display="flex"
            padding="0.8rem 0"
            flexDirection="column"
            width="100%"
            alignItems="center"
            maxHeight={440}
          >
            <TextField
              label="About yourself"
              size="small"
              variant="outlined"
              multiline
              minRows={8}
              maxRows={14}
              value={doctorAbout}
              autoFocus
              onChange={(e)=>setDoctorAbout(e.target.value)}
              sx={{ width: "85%", margin: "0.5rem 0" }}
            />
          <Box display='flex' justifyContent='end' width='85%' mb='0.4rem' >
            <Button variant="contained" onClick={saveAbout} size="small" color="secondary" sx={{color:'white'}}><Typography textTransform='none'>Save</Typography></Button>
          </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
}
