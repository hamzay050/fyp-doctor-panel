import { useState } from "react";
import { Box,FormControl,InputLabel,Select,MenuItem,TextField,Typography,Button,TextareaAutosize } from "@mui/material"
import specialties from "@/component/Doctor/SignupForm/ProfessionalDetails/specialties"
import education from "@/component/Doctor/SignupForm/ProfessionalDetails/education"

export default function Medical() {
  const [data, setData] = useState({
    height:'',weight:'',martialStatus:'',bloodGroup:'',sex:'',DOB:'',professionDetails:''
  })
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})
  }
  const showData=()=>{
    console.log(data)
  }
  const doctorExperience = ['0-5', '5-10', '10+']; // Customize as needed

  return (
    <div>

      <Box m='1rem'>
      <Typography variant="body2" sx={{color:'#b9b7b7'}}>Medical Infromation</Typography>
      <FormControl 
              variant="outlined"
              sx={{ margin:'0.7rem 2rem 0.7rem 0',width:'370px' }}
            >
              <InputLabel id="demo-simple-select-label" required>Speciality</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="speciality"
                label='Speciality'
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
              variant="outlined"
              sx={{ margin:'0.7rem 2rem 0.7rem 0',width:'370px' }}
            >
              <InputLabel id="demo-simple-select-label" required>Education</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label='Education'
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
            <FormControl 
              variant="outlined"
              sx={{ margin:'0.7rem 2rem 0.7rem 0',width:'370px' }}
            >
              <InputLabel id="demo-simple-select-label" required>Experience</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label='Experience'
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
              variant="outlined"
              sx={{margin:'0.7rem 2rem 0.7rem 0',width:'370px'}}
            >
              <InputLabel id="demo-simple-select-label" required>Sex</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label='Gender'
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
              sx={{  margin:'0.7rem 2rem 0.7rem 0',width:'370px' }}
              name='dateOfBirth'
              value={data.dateOfBirth}
              onChange={handleChange}
              required
            />
        <Typography variant='body2' sx={{color:'#b9b7b7'}}>Profession Details</Typography>
        <TextareaAutosize maxRows={4} minRows={4} name='professionDetails' onChange={handleChange} value={data.professionDetails} style={{width:'770px',margin:' 0.1rem',padding:'0.1rem',fontSize:'1rem',borderColor:'#b9b7b7',borderRadius:'5px'}} />
        <br />
      <Button onClick={showData} variant='contained' color='secondary' sx={{margin:'0.5rem 0.1rem',color:'white'}}>Save Changes</Button>
      </Box>
    </div>
  )
}
