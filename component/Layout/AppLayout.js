import { useRouter } from "next/router";
import React from "react";
import LeftSideTabs from "@/component/Doctor/SignupForm/LeftSideTabs";
import Navbar from "../Doctor/Navbar";
import { Box } from "@mui/material";
function AppLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {router.pathname.includes("doctor-form") ? (
        <Box width="100%" display="flex">
          <Box width="20%">
            <LeftSideTabs />
          </Box>
          <Box width="80%">{children}</Box>
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default AppLayout;
