import { Box,Grid,Typography,TextField,Button } from "@mui/material"
import { useState } from "react"
export default function SetAvailibility() {
  const [data, setData] = useState({
    startDate:'',endDate:'',startTime:'',endTime:''
  })
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})
  }
  const showData=()=>{
    console.log(data)
  }
  return (
    <>
      <Grid container justifyContent='center' alignItems='center' sx={{width:'100vw',marginTop:'9rem'}}>
       <Grid item xs={4} sx={{display:'flex',flexDirection:'column'}}>
          <Typography variant="body1" sx={{fontWeight:'600'}}>Select Date</Typography>
          <TextField
          variant="outlined"
          helperText="Start Date"
          name="startDate"
          size-='small'
          type="date"
          sx={{width:'200px',margin:'1rem 1rem 1rem 0'}}
          value={data.startDate}
          onChange={handleChange}/>
          <TextField
          variant="outlined"
          helperText="End Date"
          name="endDate"
          size-='small'
          type="date"
          sx={{width:'200px',margin:'0rem 1rem 2rem 0'}}
          value={data.endDate}
          onChange={handleChange}/>
       </Grid>
       <Grid item xs={4} sx={{display:'flex',flexDirection:'column'}}>
          <Typography variant="body1" sx={{fontWeight:'600'}}>Select Time</Typography>
          <TextField
          variant="outlined"
          helperText="Start Time"
          name="startTime"
          size-='small'
          type="time"
          sx={{width:'200px',margin:'1rem 1rem 1rem 0'}}
          value={data.startTime}
          onChange={handleChange}/>
          <TextField
          variant="outlined"
          helperText="End Time"
          name="endTime"
          size-='small'
          type="time"
          sx={{width:'200px',margin:'0rem 1rem 2rem 0'}}
          value={data.endTime}
          onChange={handleChange}/>
       </Grid>
      </Grid> 
      <Box sx={{marginLeft:'14rem'}}>
      <Button onClick={showData} variant="contained" color='secondary' sx={{color:'white',width:'180px'}}>Save</Button> 
        </Box>    
    </>
  )
}
