import React from "react";
import Certifications from "@/component/Doctor/SignupForm/Certifications";
import PrivateRoute from "@/component/Doctor/SecurePage";

export default function index() {
  return(
    <>
    <PrivateRoute>
  <Certifications />
    </PrivateRoute>
    </>
  )
  
}
