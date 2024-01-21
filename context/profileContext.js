import React, { createContext, useEffect, useRef, useState } from "react";
import jwt from "jsonwebtoken";
import cookies from "cookie";
import { GET } from "@/services/httpClient";
export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(false);
  const [profileData, setProfileData] = useState(false);

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const cookiesData = cookies.parse(document.cookie);
    const token = cookiesData["accessToken"];

    if (token) {
      const decoded = jwt.verify(token, "mysecret%$sha256/!alpha$%$bang.etae");
      console.log(
        "🚀 ~ file: profileContext.js:18 ~ useEffect ~ decoded:",
        decoded
      );

      if (decoded) {
        setUserData(decoded);
        return;
      }
    }
  }, [isUpdated]);

  async function fetchProfileData() {
    const response = await GET(`/profile/${userData.userId}`);
    setProfileData(response);
  }
  useEffect(() => {
    if (!userData) return;
    fetchProfileData();
  }, [userData]);

  const value = {
    userData,
    setUserData,
    isUpdated,
    setIsUpdated,
    profileData,
    setProfileData,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
