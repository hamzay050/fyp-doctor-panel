import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [open, setOpen] = useState( false);
    

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}>
            <Image
              src="/Assests/login.jpg"
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
              required
              sx={{ width: "350px", margin: "1.1rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="standard"
              required
              sx={{ width: "350px", margin: "1.1rem" }}
            />

            <Link href="" style={{ margin: "0.5rem", color: "black" }}>
              Forget Password?
            </Link>
            <Link href="/dhome" style={{ textDecoration: "none" }}>
            <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                // message="login Succcessfully"
                action={action}
                
              >
                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login successfully 
        </Alert>
              </Snackbar>
            </div>
              <Button onClick={handleClick} color="primary" size="small" 
                  variant="contained"
                  sx={{ width: "350px", margin: "2rem 0", fontSize: "1.098rem" }}
                >Login</Button>
             
            
              
               
                
              </Link> 
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Login;
