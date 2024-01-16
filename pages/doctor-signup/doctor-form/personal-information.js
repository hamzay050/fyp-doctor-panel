import React from "react";
import PersonalInformation from "@/component/Doctor/SignupForm/PersonalInformation";
import Avatar from "@/component/Doctor/SignupForm/Avatar";
import ContactInformation from "@/component/Doctor/SignupForm/ContactInformation";

export default function index() {
  return (
    <>
      <Avatar />
      <PersonalInformation />
      <ContactInformation />
    </>
  );
}
