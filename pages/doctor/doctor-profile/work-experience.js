import React from "react";
import WorkHistory from "@/component/Doctor/SignupForm/WorkHistory";
import PrivateRoute from "@/component/Doctor/SecurePage";

export default function index() {
  return(
    <>
    <PrivateRoute>
      <WorkHistory/>
    </PrivateRoute>
    </>
  ) 

}
