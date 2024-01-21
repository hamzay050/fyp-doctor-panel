import { useRouter } from "next/router";
import React from "react";
import LeftSideTabs from "@/component/Doctor/SignupForm/LeftSideTabs";
import Navbar from "../Doctor/Navbar";
import { Box, Grid } from "@mui/material";
function AppLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {router.pathname.includes("doctor-profile") ? (
        <Box width="100%">
          <Grid container>
            <Grid
              item
              sm={12}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <LeftSideTabs />
            </Grid>{" "}
            <Grid
              item
              sm={12}
              md={9}
              display="flex"
              justifyContent="center"
              height="100%"
            >
              {children}
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default AppLayout;
