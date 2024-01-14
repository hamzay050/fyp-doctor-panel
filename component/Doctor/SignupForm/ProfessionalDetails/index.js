import React, { useState } from 'react';
import {
  TextField,
  Autocomplete,
  Typography,
  Box,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import medicalCertificates from './certificate';
import speciality from './specialties';
const ProfessionalDetails = ({data,setData}) => {
  const [allCertificates, setAllCertificates] = useState([])
  const [certificate, setCertificate] = useState({
    certificateTitle:'',instituteName:'',startDate:'',endDate:''
  })
  const handleChange= (e)=>{
     const name= e.target.name;
     const value=e.target.value;
     setCertificate({...certificate,[name]:value})
  }
  const newCertificate= ()=>{
    if(certificate.certificateTitle!=='' && certificate.instituteName!=='' && certificate.startDate!=='' && certificate.endDate!==''){
      setAllCertificates([...allCertificates, certificate]);
      console.log(allCertificates)
    }else{
      console.log("ALL FIELDS ARE NECCESSARY")
    }
  }
  const handleDelete=(recordId)=>{
      const updatedCertificates= [...allCertificates];
      updatedCertificates.splice(recordId,1);
      setAllCertificates(updatedCertificates)
  }
  return (
  <>
     <Typography variant="body2" sx={{margin:'0.4rem',color:'#646464'}}>Professional Information: </Typography>
     <Box sx={{display:{xs:'initial',sm:'flex'},margin:{xs:'0rem',sm:'0.4rem'}}}>
     <TextField
          variant='outlined'
          label='Medical License Number'
          name='medicalLicenseNumber'
          size='small'
          value={data.medicalLicenseNumber}
          onChange={(e)=>{setData({...data,medicalLicenseNumber:e.target.value})}}
          sx={{width:{xs:'100%',sm:'40%',md:'20%'},margin:{xs:'0.4rem 0',sm:'0.4rem',md:'0 0.4rem'}}}/>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={speciality}
        size='small'
        value={data.specialities}
        onChange={(event,values)=>{console.log("value:",values);  setData({...data,specialities:values} )}}
        getOptionLabel={(option) => option}
        defaultValue={[speciality[0]]}
        filterSelectedOptions
        sx={{width:{xs:'100%',sm:'40%',md:'30%'},margin:{xs:'0.4rem 0',md:'0 0.4rem'}}}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Specialities"
            placeholder="Specialies"
          />
        )}
      />
     </Box>
     <Typography sx={{margin:'0.2rem 1rem',color:'#646464',fontSize:'0.8rem'}}>Add Certifications Information: </Typography>
       <Box sx={{display:{xs:'initial',sm:'flex'},margin:{xs:'0.3rem 0',sm:'0.3rem'}}}>
       <Autocomplete
        multiple
        id="tags-outlined"
        options={medicalCertificates}
        size='small'
        getOptionLabel={(option) => option}
        defaultValue={[medicalCertificates[0]]}
        filterSelectedOptions
        sx={{width:{xs:'100%',sm:'40%',md:'30%'},margin:{xs:'0.4rem 0',sm:'0.4rem',md:'0 0.4rem'}}}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Certification Title"
            placeholder="Certificate Title"
          />
        )}
      />
          <TextField
          variant='outlined'
          label='Institute Name'
          name='instituteName'
          size='small'
          sx={{width:{xs:'100%',sm:'40%',md:'20%'},margin:{xs:'0.4rem 0',sm:'0.4rem',md:'0 0.4rem'}}}
          value={certificate.instituteName}
          onChange={handleChange}/>
          <TextField
          variant='outlined'
          name='startDate'
          helperText='Start Date'
          size='small'
          type='date'
          sx={{width:{xs:'35%',sm:'22%',md:'15%'},margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'}}}
          
          value={certificate.startDate}
          onChange={handleChange}/>
          <TextField
          variant='outlined'
          name='endDate'
          type='date'
          helperText='End Date (Blank If cont.)'
          size='small'
          sx={{width:{xs:'35%',sm:'22%',md:'15%'},margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'}}}
          value={certificate.endDate}
          onChange={handleChange}/>
          <Box>
          <Button variant='contained' onClick={newCertificate} color='secondary' sx={{margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'},color:'white'}}>Add</Button>
          </Box>
       </Box>
       {
        allCertificates.length!==0 && allCertificates.map((value,index)=>{
        return(
      <Box key={index} sx={{display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'#30db5d1c',border:'1px solid #30db5d1c',borderRadius:'2px',margin:'0 0.4rem',width:'99%',height:'40px'}}>
        <Typography>Title: {value.certificateTitle}</Typography>
        <Typography>Institue: {value.instituteName}</Typography>
        <Typography>Start Date: {value.startDate}</Typography>
        <Typography>End Date: {value.endDate}</Typography>
         <DeleteIcon onClick={() => handleDelete(index)} sx={{cursor:'pointer'}}color='primary'/>
     </Box>
        )
        })
       }
  </>
  );
};

export default ProfessionalDetails;
