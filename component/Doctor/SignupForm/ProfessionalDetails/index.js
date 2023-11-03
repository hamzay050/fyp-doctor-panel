import { Box,FormControl,InputLabel,Select,MenuItem,TextField } from "@mui/material"
import { FileUpload } from "@mui/icons-material"
import { useState } from "react"
import specialties from "./specialties"
import education from "./education"
import doctorExperience from "./experience"

export default function ProfessionalDetails() {
  const [data, setData] = useState({
    speciality:'',education:'',uploadLicense:'',experience:'',gender:'',dateOfBirth:''
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

       <FormControl 
              variant="standard"
              sx={{ width: "90%", margin: "0.5rem 1rem" }}
            >
              <InputLabel id="demo-simple-select-label" required>Speciality</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="speciality"
                value={data.speciality}
                onChange={handleChange}
              >
               {specialties.map((curVal)=>{
                return(
                  <MenuItem key={curVal} value={curVal}>{curVal}</MenuItem>
                )
               })}
              </Select>
            </FormControl>

            <FormControl 
              variant="standard"
              sx={{ width: "90%", margin: "0.5rem 1rem" }}
            >
              <InputLabel id="demo-simple-select-label" required>Education</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="education"
                value={data.education}
                onChange={handleChange}
              >
               {education.map((curVal)=>{
                return(
                  <MenuItem key={curVal} value={curVal}>{curVal}</MenuItem>
                )
               })}
              </Select>
            </FormControl>

            <TextField 
              sx={{ width: {xs:'60%',sm:'80%',lg:'55%'}, margin: "1rem" }}
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

            <FormControl 
              variant="standard"
              sx={{ width: "41%", margin: "0.5rem 1rem" }}
            >
              <InputLabel id="demo-simple-select-label" required>Experience</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="experience"
                value={data.experience}
                onChange={handleChange}
              >
               {doctorExperience.map((curVal)=>{
                return(
                  <MenuItem key={curVal} value={curVal}>{curVal}</MenuItem>
                )
               })}
              </Select>
            </FormControl>

            
             
            <FormControl 
              variant="standard"
              sx={{ width: "41%", margin: "0.5rem 1rem" }}
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
              sx={{  width: "55%", margin:' 1rem' }}
              name='dateOfBirth'
              value={data.dateOfBirth}
              onChange={handleChange}
              required
            />
          </Box>
    </>
  )
}
