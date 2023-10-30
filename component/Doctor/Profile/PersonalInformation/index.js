import { Box,TextField,Typography,Button } from "@mui/material"
import { useState,useRef } from "react";
import Image from "next/image";

export default function Personal() {
  const [data, setData] = useState({
    firstName:'',lastName:'',email:'',contactNo:''
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
  const showData=()=>{
    console.log(data)
  }
  return (
    <div>
      <Box m='0.6rem'>
         
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' >
      <input type="file" onChange={handleInput} ref={fileInput} accept="image/*" style={{display:'none'}}/>
        <Image
        onClick={chooseImg}
        src={val===''?'/Assests/hero1.png':val}
        width={90}
        height={90}
        alt="Profile Image"
        style={{border:'1px solid #e3e0e0',borderRadius:'50%',margin:'1rem 0 0.2rem 0'}}/>
        <Typography variant="body2" sx={{color:'#b9b7b7'}}>Change Image</Typography>
      </Box>
        <Typography variant="body2" sx={{color:'#b9b7b7'}}>Personal Infromation</Typography>
        <TextField
        variant="outlined"
        label='First Name'
        name="firstName"
        sx={{margin:'1rem 2rem 0.5rem 0',width:'370px'}}
        required
        value={data.firstName}
        onChange={handleChange}/>
         <TextField
        variant="outlined"
        label='Last Name'
        name='lastName'
        sx={{margin:'1rem 2rem 0.5rem 0',width:'370px'}}
        required
        value={data.lastName}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Email'
        name="email"
        sx={{margin:'0.7rem 2rem 0.5rem 0',width:'370px'}}
        required
        value={data.email}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Conatct No'
        name="contactNo"
        sx={{margin:'0.7rem 2rem 0.5rem 0',width:'370px'}}
        required
        value={data.contactNo}
        onChange={handleChange}/>
      <Button onClick={showData} variant='contained' color="secondary" sx={{margin:'0.5rem 0.1rem',color:'white'}}>Save Changes</Button>
      </Box>

    </div>
  )
}
