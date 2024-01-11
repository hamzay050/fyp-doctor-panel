import { TextField,Box,Button,Typography, FormControl,InputLabel,Select,MenuItem } from "@mui/material"
import { useState,useRef } from "react"
import Image from "next/image"

export default function PersonalInformation() {
  const [data, setData] = useState({
    contact:'',residentialaddress:'',gender:'',dateOfBirth:''
  })
    const [val, setVal] = useState('')
    const fileInput=useRef(null);
    const handleInput=(e)=>{
        const image=e.target.files[0];
        if(image){
            const imageURL=URL.createObjectURL(image)
            setVal(imageURL)
        }
    }
    const chooseImg=()=>{
        fileInput.current.click();
    }
    const handleChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData({...data,[name]:value})
    }
    console.log(data)
  return (
    <>
    <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <input type="file" onChange={handleInput} ref={fileInput} accept="image/*" style={{display:'none'}}/>
        <Image
        onClick={chooseImg}
        src={val===''?'/Assests/docprofile.png':val}
        width={70}
        height={70}
        alt="Profile Image"
        style={{borderRadius:'50%',margin:'0.7rem 0 0.2rem 0'}}/>
        <Typography variant="body2">Select Profile Image</Typography>
    </Box>

    <Box mt='0.5rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                {/* CONTACT */}
                 <TextField
              id="contact"
              label="Contact Number"
              variant="standard"
              name="contact"
              sx={{ width:'90%',margin:'0.6rem 0'}}
              value={data.contact}
              onChange={handleChange}
              required
            />
         {/* RESIDENTIAL ADDRESS */}
             <TextField
              id="residentialaddress"
              label="Residential Address"
              variant="standard"
              name="residentialaddress"
              sx={{ width:'90%',margin:'0.6rem 0'}}
              value={data.firstName}
              onChange={handleChange}
              required
            />


            {/* GENDER */}
              <FormControl 
              variant="standard"
              sx={{ width: "90%", margin: "0.6rem 0rem" }}
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
              sx={{  width: "90%", margin:' 0.6rem 0' }}
              name='dateOfBirth'
              value={data.dateOfBirth}
              onChange={handleChange}
              required
            />
    </Box>
    </>
  )
}
