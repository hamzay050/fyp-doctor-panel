import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Typography, Grid, Card, Box } from "@mui/material";
import {GET} from "@/services/httpClient"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";

function index() {
  const [allFiles, setAllFiles] = useState([]);
  const router=useRouter()
  const {appointmentId}=router.query
  async function fetchAllFiles() {
    try {
      const response = await GET("/upload-file/by-appointment-id", {
        params: { appointmentId },
      });
      setAllFiles(response);
    } catch (error) {}
  }
  useEffect(() => {
    if (appointmentId) fetchAllFiles();
  }, [appointmentId]);
  return (
    <>
      <Box display="flex" justifyContent="center" mt={2}>
       {
        allFiles?.map((value)=>{
          <Card
          sx={{
            width: "80%",
            height: "50px",
            borderRadius: "10px",
            bgcolor: "seashell",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FileCopyIcon />{" "}
          <Typography>
            {value.fileName} <Grid container spacing={0}></Grid>
          </Typography>
        </Card>
        })
       }
      </Box>
    </>
  );
}

export default index;
