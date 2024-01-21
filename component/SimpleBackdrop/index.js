import React, { useContext, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { AppContext } from "@/context/appContext";

function LoaderBackdrop() {
  const { isLoading } = useContext(AppContext);

  return (
    <div>
      <Backdrop open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default LoaderBackdrop;
