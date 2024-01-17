import Profile from "@/component/Doctor/Profile";
import React from "react";
import SecurePage from "@/component/Doctor/SecurePage";
const index = (records) => {
  return (
    <SecurePage>
      <Profile />
    </SecurePage>
  );
};

export default index;
