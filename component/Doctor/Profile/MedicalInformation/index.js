import { useState } from "react";
import { Box,TextField,Typography,Button,TextareaAutosize } from "@mui/material"

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
  return (
    <div>

      <Box m='2rem 1rem'>
      <Typography variant="body2" sx={{color:'#b9b7b7'}}>Medical Infromation</Typography>
      <TextField
        variant="outlined"
        label='Height'
        name="height"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.height}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Weight'
        name="weight"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.weight}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Martial status'
        name="martialStatus"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.martialStatus}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Blood group'
        name="bloodGroup"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.bloodGroup}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Sex'
        name="sex"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.sex}
        onChange={handleChange}/>
        <TextField
        variant="outlined"
        label='Date of birth'
        name="DOB"
        sx={{margin:'1rem 2rem 1rem 0'}}
        required
        value={data.DOB}
        onChange={handleChange}/>
        <Typography variant='body2' sx={{color:'#b9b7b7'}}>Profession Details</Typography>
        <TextareaAutosize maxRows={4} minRows={4} name='professionDetails' onChange={handleChange} value={data.professionDetails} style={{width:'600px',margin:'1rem 0.1rem',padding:'0.1rem',fontSize:'1rem',borderColor:'#b9b7b7',borderRadius:'5px'}} />
        <br />
      <Button onClick={showData} variant='contained' color='secondary' sx={{margin:'1rem 0.1rem',color:'white'}}>Save Changes</Button>
      </Box>
    </div>
  )
}
