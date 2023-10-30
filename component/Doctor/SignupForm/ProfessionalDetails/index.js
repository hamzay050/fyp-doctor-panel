import { Box,FormControl,InputLabel,Select,MenuItem,TextField } from "@mui/material"
import { FileUpload } from "@mui/icons-material"
import { useState } from "react"

export default function ProfessionalDetails() {
  const [data, setData] = useState({
    speciality:'',education:'',uploadLicense:'',experience:'',gender:'',dob:''
  })
  const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setData({...data,[name]:value})
  }
  console.log(data)
  return (
    <>
       <Box>           
            <TextField  
              name="speciality"
              id="standard-select-currency"
              label="Speciality"
              variant="standard"
              sx={{margin: "0.5rem 1rem", width: "400px"}}
              value={data.speciality}
              onChange={handleChange}
              required
            />
             <TextField  
              name="education"
              id="standard-select-currency"
              label="Education"
              variant="standard"
              sx={{margin: "0.5rem 1rem", width: "400px"}}
              value={data.education}
              onChange={handleChange}
              required
            />
            <TextField 
              sx={{ width: "300px", margin: "0.5rem 1rem" }}
              type="file"
              label="UploadLicenses"
               name="uploadLicense" autoComplete="off"
              InputLabelProps={{ shrink: true }}
              value={data.uploadLicense}
              onChange={handleChange}
              required
            >
              <FileUpload />
            </TextField>
            <TextField  
              name="experience"
              id="standard-select-currency"
              label="Year's of Experience"
              variant="standard"
              type="number"
              sx={{width:'160px',margin:'0.5rem 1.3rem'}}
              value={data.experience}
              onChange={handleChange}
              required
            />
            
             
            <FormControl 
              variant="standard"
              sx={{ width: "160px", margin: "0.5rem 1rem" }}
            >
              <InputLabel id="demo-simple-select-label" required>Sex</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="gender"
                name="gender" autoComplete="off"
                value={data.gender}
              onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
              {/* DOB */}
              <TextField
              id="filled-basic"
              helperText='Date Of Birth'
              type="date"
              variant="outlined"
              sx={{  width: "200px", margin:'0.8rem 1rem' }}
              name='dob'
              value={data.dob}
              onChange={handleChange}
              required
            />
          </Box>
    </>
  )
}
