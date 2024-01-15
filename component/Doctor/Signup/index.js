import { POST_WITHOUT_TOKEN } from "@/services/httpClient";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSignup() {
    // setIsLoading(true);
    const params = {
      email: signupData.email,
      password: signupData.password,
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      role: "doctor",
    };

    try {
      const response = await POST_WITHOUT_TOKEN("/auth/signup", params);
      console.log(
        "🚀 ~ file: index.js:28 ~ handleSignup ~ response:",
        response
      );

      if (response) {
        // setSnackbarState({
        //   severity: "error",
        //   open: true,
        //   message: "An  Error Occurred!",
        // });
        router.push("/doctor/doctor-profile");
      } else {
      }

      // localStorage.setItem("userData", JSON.stringify(response.data));
    } catch (error) {
      console.log("🚀 ~ file: index.js:34 ~ handleSignup ~ error:", error);
      console.log("An error occurred:", error);
      // setSnackbarState({
      //   severity: "error",
      //   open: true,
      //   message: error,
      // });
    }
    // setIsLoading(false);
  }
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} lg={6}>
          <Image
            src="/Assests/try2.jpg"
            width={650}
            height={610}
            style={{ borderRadius: "4px", minWidth: "100%", minHeight: "95%" }}
            alt="Doctor Image"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ marginTop: "2.4rem" }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ margin: "2rem 0 1rem 0", color: "black" }}
          >
            Sign Up
          </Typography>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="standard"
            required
            value={signupData.firstName}
            onChange={(e) => {
              setSignupData({ ...signupData, firstName: e.target.value });
            }}
            sx={{ width: "50%", margin: "0.9rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="standard"
            required
            value={signupData.lastName}
            onChange={(e) => {
              setSignupData({ ...signupData, lastName: e.target.value });
            }}
            sx={{ width: "50%", margin: "0.9rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="standard"
            required
            value={signupData.email}
            onChange={(e) => {
              setSignupData({ ...signupData, email: e.target.value });
            }}
            sx={{ width: "50%", margin: "0.9rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="standard"
            required
            value={signupData.password}
            onChange={(e) => {
              setSignupData({ ...signupData, password: e.target.value });
            }}
            sx={{ width: "50%", margin: "0.9rem" }}
          />
          <Typography>
            Already a member?{" "}
            <Link
              href="/doctor-login"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
                margin: "0.4rem 0",
              }}
            >
              Login
            </Link>
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: { xs: "150px", sm: "300px" },
              margin: "2rem 0 1rem 0",
              fontSize: "1.098rem",
            }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
