// components/PrivateRoute.js

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import cookies from "cookie";
import { ProfileContext } from "@/context/profileContext";

const PrivateRoute = ({ children }) => {
  const { profileData } = useContext(ProfileContext);
  const router = useRouter();

  useEffect(() => {
    const cookiesData = cookies.parse(document.cookie);
    console.log("🚀 ~ useEffect ~ cookiesData:", cookiesData);
    const token = cookiesData["accessToken"];

    if (!token) {
      router.push("/");
      return;
    }

    try {
      const decoded = jwt.verify(token, "mysecret%$sha256/!alpha$%$bang.etae");

      if (decoded) {
        return;
      }
    } catch (error) {
      console.log("🚀 ~ file: SecurePage.js:33 ~ useEffect ~ error:", error);

      router.push("/");
    }
  }, [router]);

  return  children ;
};

export default PrivateRoute;
