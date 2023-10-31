import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Image
              src="/Assests/signup.jpg"
              width={650}
              height={610}
              style={{  borderRadius: "4px",width:'100%',height:'95%' }}
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
              sx={{ width: "50%", margin: "0.9rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="standard"
              required
              sx={{ width: "50%", margin: "0.9rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="standard"
              required
              sx={{ width: "50%", margin: "0.9rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="standard"
              required
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
            <Link href="/doctor-signup/doctor-form" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ width: {xs:'150px',sm:'300px'}, margin: "2rem 0 1rem 0", fontSize: "1.098rem" }}
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
