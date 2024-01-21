import React, { useEffect } from "react";
import Docform from "@/component/Doctor/SignupForm";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/doctor/doctor-profile/personal-information");
  }, []);

  return <>No Page Found</>;
}
