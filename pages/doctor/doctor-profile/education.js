import React from "react";
import EducationDetails from "@/component/Doctor/SignupForm/EducationDetails";
import { Container } from "@mui/material";
import PrivateRoute from "@/component/Doctor/SecurePage";

export default function index() {
  return (
    <>
    <PrivateRoute>
      <EducationDetails />;
    </PrivateRoute>
    </>
  );
}
