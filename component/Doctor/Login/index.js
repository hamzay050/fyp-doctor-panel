import { AppContext } from "@/context/appContext";
import { POST } from "@/services/httpClient";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Login() {
  const router = useRouter();
  const { isLoading, setIsLoading, setSnackbarState } = useContext(AppContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    setIsLoading(true);
    const params = {
      email: userCredentials.email,
      password: userCredentials.password,
      role: "doctor",
    };

    try {
      const response = await POST("/auth/login", params);

      console.log(response);

      if (!response.error) {
        router.push("/doctor/patient-records");
      } else {
        console.log("Login failed");
        setSnackbarState({
          severity: "error",
          open: true,
          message: "Login failed",
        });
      }
    } catch (error) {
      console.log("🚀 ~ file: index.js:46 ~ handleLogin ~ error:", error);
      console.log("An error occurred:", error);
      setSnackbarState({
        severity: "error",
        open: true,
        message: "An error occurred",
      });
    }
    setIsLoading(false);
  };
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}>
            <Image
              src="/Assests/plogin.jpg"
              width={650}
              height={610}
              alt="Login Image"
              style={{ margin: "0.3rem", borderRadius: "4px" }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ marginTop: "3.5rem" }}
          >
            <Typography
              variant="h3"
              sx={{ margin: "2rem 0 1rem 0", color: "black" }}
            >
              Login
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="standard"
              type="email"
              required
              sx={{ width: "350px", margin: "1.1rem" }}
              onChange={(e) => {
                setUserCredentials({
                  ...userCredentials,
                  email: e.target.value,
                });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="standard"
              type="password"
              required
              onChange={(e) => {
                setUserCredentials({
                  ...userCredentials,
                  password: e.target.value,
                });
              }}
              sx={{ width: "350px", margin: "1.1rem" }}
            />

            <Link href="" style={{ margin: "0.5rem", color: "black" }}>
              Forget Password?
            </Link>
            <Link href="" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleLogin}
                variant="contained"
                sx={{ width: "350px", margin: "2rem 0", fontSize: "1.098rem" }}
              >
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
