import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Typography, Grid, Card, Box } from "@mui/material";
function index() {
  return (
    <>
      <Box display="flex" justifyContent="center" mt={2}>
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
            file name yha pa ay <Grid container spacing={0}></Grid>
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default index;
