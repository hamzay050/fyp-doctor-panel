import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  PersonAdd,
  Settings,
  Logout,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect, useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import Notification from "./Notification";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { ProfileContext } from "../../../context/profileContext";
import { ClearAllCookies } from "@/component/Common/clearCookies";
console.log(">>>>>>>>>>>>>>>" + ProfileContext);
const Navbar = () => {
  const { profileData, setUserData, setProfileData } =
    useContext(ProfileContext);
  const router = useRouter();
  const menu = useRef();
  const [Setting, setSetting] = useState(false);
  const toggleMenu = () => {
    setSetting(!Setting);
  };
  useEffect(() => {
    let handler = (e) => {
      if (menu.current && !menu.current.contains(e.target)) {
        setSetting(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);
  const handleLogout = () => {
    setUserData(null);
    setProfileData(null);
    ClearAllCookies();

    router.push("/");
  };
  return (
    <Box>
      <AppBar position="static" sx={{ height: "57px" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MenuIcon sx={{ display: { xs: "initial", lg: "none" } }} />
            <Image
              src="/Assests/mlogo.png"
              width={70}
              height={60}
              style={{ margin: "0", maxWidth: "70x", minWidth: "40px" }}
              alt="Logo Image"
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", fontSize: { xs: "0.8rem", sm: "" } }}
            >
              HEALTH EASE
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "3rem",
              display: { xs: "none", lg: "initial" },
              width: { sx: "100px" },
            }}
          >
            <Link
              href="/doctor/home"
              className="links"
              style={{ margin: "0 0.7rem", textDecoration: "none" }}
            >
              <Button
                sx={{
                  color: "white",
                  fontSize: "0.898rem",
                  letterSpacing: "1px",
                }}
              >
                <Typography textTransform='none'>Home</Typography>
              </Button>
            </Link>
            {/* <Link
              href="/doctor/medicine"
              style={{ margin: "0 0.7rem", textDecoration: "none" }}
            >
              {" "}
              <Button
                sx={{
                  color: "white",
                  fontSize: "0.898rem",
                  letterSpacing: "1px",
                }}
              >
                Medicine
              </Button>{" "}
            </Link> */}
            <Link
              href="/doctor/appointments-list"
              style={{ margin: "0 0.7rem", textDecoration: "none" }}
            >
              {" "}
              <Button
                sx={{
                  color: "white",
                  fontSize: "0.898rem",
                  letterSpacing: "1px",
                }}
              >
                <Typography textTransform='none'>Appointments</Typography>
              </Button>{" "}
            </Link>
          </Box>
          <Notification />
          <Box
            ref={menu}
            sx={{
              position: "absolute",
              left: { xs: "70%", sm: "76%", md: "80%", lg: "90%" },
            }}
          >
            <Tooltip title="Profile">
              <Avatar
                size="medium"
                onClick={toggleMenu}
                sx={{ cursor: "pointer", border: "1px solid #d7c2c29e" }}
                src={
                  profileData?.profilePicture
                    ? process.env.NEXT_PUBLIC_BASE_URL +
                      profileData.profilePicture
                    : "/Assests/hero1.png"
                }
              >
                M
              </Avatar>
            </Tooltip>
            {Setting && (
              <Box
                sx={{
                  position: "absolute",
                  right: "20%",
                  width: "190px",
                  height: "auto",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                  border: "1px solid #d7c2c29e",
                  borderRadius: "5px",
                  zIndex: "1",
                }}
              >
                <Link
                  href="/doctor/doctor-profile"
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    // fontWeight:"500",
                    margin: "0.7rem",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <AccountCircleIcon
                    sx={{ margin: "0 0.4rem", color: "#999898" }}
                  />{" "}
                  Profile
                </Link>
                {/* <Link
                  href="/doctor/avialibility"
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    // fontWeight:"500",
                    margin: "0.7rem",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <InsertInvitationIcon
                    sx={{ margin: "0 0.4rem", color: "#999898" }}
                  />
                  Set Availibility
                </Link> */}
                <Button
                  onClick={handleLogout}
                  color="secondary"
                  sx={{ margin: "0rem 0 0.4rem 1rem" }}
                  startIcon={<LogoutIcon />}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      // fontWeight:"500"
                    }}
                  >
                    {" "}
                    Logout
                  </Typography>
                </Button>{" "}
              </Box>
            )}
            <Button
              variant="text"
              onClick={toggleMenu}
              sx={{
                color: "white",
                position: "absolute",
                left: "100%",
                top: "5%",
              }}
            >
              <Typography textTransform="none">
                {profileData?.firstName}
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
