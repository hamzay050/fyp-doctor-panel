import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import jwt from "jsonwebtoken";
import cookies from "cookie";
import { GET } from "@/services/httpClient";
import { AppContext } from "./appContext";
import { useRouter } from "next/router";
import { ClearAllCookies } from "@/component/Common/clearCookies";
export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const router = useRouter();
  const { setSnackbarState } = useContext(AppContext);
  const [userData, setUserData] = useState(false);
  const [profileData, setProfileData] = useState(false);

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const cookiesData = cookies.parse(document.cookie);
    const token = cookiesData["accessToken"];

    try {
      if (token) {
        const decoded = jwt.verify(
          token,
          "mysecret%$sha256/!alpha$%$bang.etae"
        );

        if (decoded && decoded.role == "doctor") {
          setUserData(decoded);
          console.log("decode",decoded)
          return;
        } else {
          setUserData(null);
          setProfileData(null);
          ClearAllCookies();
        }
      }
    } catch (error) {
      setSnackbarState({
        severity: "error",
        open: true,
        message: "Token Validation Failed",
      });
      router.push("/");
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
    fetchProfileData
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
