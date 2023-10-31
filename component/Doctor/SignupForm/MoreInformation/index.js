import { Box,TextField } from "@mui/material"
import { useState } from "react"

export default function MoreInformation() {
  const [address, setAddress] = useState({
    clinic:'',address:'',city:'',street:'',zip:'',state:''
  })
  const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setAddress({...address,[name]:value})
  }
  console.log(address)
  return (
    <>
      <Box m='1rem 0.2rem'>
         {/* Clinic Name */}
         <TextField
              id="filled-basic"
              label="Clinic Name"
              variant="standard"
              name="clinic"
              sx={{ margin: "0.5rem 1rem", width: "90%" }}
              value={address.clinic}
              onChange={handleChange}
              required
            />
            {/* ADDRESS */}
                    <TextField
              id="filled-basic"
              label="Address Line"
              variant="standard"
              name="address"
              sx={{ margin: "0.5rem 1rem", width: "90%" }}
              value={address.address}
              onChange={handleChange}
              required
            />
            <TextField
              id="filled-basic"
              label="City"
              name="city"
              variant="standard"
              sx={{ margin: "0.5rem 1rem", width: "90%" }}
              value={address.city}
              onChange={handleChange}
              required
            />
               <TextField
              id="filled-basic"
              label="Street No"
              name="street"
              variant="standard"
              sx={{ margin: "0.5rem 1rem", width: "90%" }}
              value={address.street}
              onChange={handleChange}
              required
            />
            <TextField
              id="filled-basic"
              label="Zip code"
              name="zip"
              variant="standard"
              sx={{ margin: "0.5rem 1rem", width: "150px" }}
              value={address.zip}
              onChange={handleChange}
              required
            />
              <TextField
              id="filled-basic"
              label="State"
              name="state"
              variant="standard"
              sx={{ margin: "0.5rem 1rem", width: "150px" }}
              value={address.state}
              onChange={handleChange}
              required
            />
      </Box>
    </>
  )
}
