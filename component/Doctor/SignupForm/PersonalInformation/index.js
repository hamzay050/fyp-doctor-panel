import { TextField,Box,Button,Typography, FormControl,InputLabel,Select,MenuItem } from "@mui/material"
import { useState,useRef } from "react"
import Image from "next/image"

export default function PersonalInformation() {
  const [data, setData] = useState({
    firstName:'',lastName:'',email:'',contact:''
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
        style={{borderRadius:'50%',margin:'1rem 0 0.2rem 0'}}/>
        <Typography variant="body2">Select Profile Image</Typography>
    </Box>

    <Box mt='0.5rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
         {/* FIRST NAME */}
             <TextField
              id="firstname"
              label="First Name"
              variant="standard"
              name="firstName"
              sx={{ width:'90%',margin:'0.8rem 0'}}
              value={data.firstName}
              onChange={handleChange}
              required
            />
         {/* Last Name */}
             <TextField
              id="lastname"
              label="Last Name"
              variant="standard"
              name="lastName"
              sx={{width:'90%',margin:'0.8rem 0'}}
              value={data.firstName}
              onChange={handleChange}
              required
            />
              {/* EMAIL */}
              <TextField
              id="email"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              sx={{ width:'90%',margin:'0.8rem 0'}}
              value={data.email}
              onChange={handleChange}
              required
            />
            {/* CONTACT */}
            <TextField
              id="contact"
              label="Contact Number"
              variant="standard"
              name="contact"
              sx={{ width:'90%',margin:'0.8rem 0'}}
              value={data.contact}
              onChange={handleChange}
              required
            />
    </Box>
    </>
  )
}
