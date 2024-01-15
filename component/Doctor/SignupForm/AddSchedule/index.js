import { Box, Checkbox, FormControl, FormGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function AddSchedule() {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



  return (
    <>
      <Box>
        {weekdays.map((value, index) => {
          return (
            <FormControl key={index}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name={value}
                    />
                  }
                  label={value}
                />
              </FormGroup>
            </FormControl>
          );
        })}
      </Box>
    </>
  );
}
