import { Box, Typography, Button, TextField, Autocomplete } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import medicalCertificates from "./certificate";

function Certifications() {
  const [allCertificates, setAllCertificates] = useState([]);
  const [certificate, setCertificate] = useState({
    title: '',
    institute: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate((prev) => ({ ...prev, [name]: value }));
  };

  const newCertificate = () => {
    if (certificate.title !== '' && certificate.institute !== '' && certificate.startDate !== '' && certificate.endDate !== '') {
      setAllCertificates([...allCertificates, certificate]);
    } else {
      console.log("ALL FIELDS ARE NECESSARY");
    }
  };

  const handleDelete = (recordId) => {
    const updatedCertificates = [...allCertificates];
    updatedCertificates.splice(recordId, 1);
    setAllCertificates(updatedCertificates);
  };
  return (
    <>
       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0 0 0' }}>
      <Autocomplete
        id="tags-outlined"
        options={medicalCertificates}
        value={certificate.title}
        onChange={(_, newValue) => setCertificate((prev) => ({ ...prev, title: newValue }))}
        size="small"
        getOptionLabel={(option) => option}
        filterSelectedOptions
        sx={{ width: { xs: '100%', sm: '40%', md: '80%' }, margin: { xs: '0.4rem 0', sm: '0.4rem', md: '0 0.4rem' } }}
        renderInput={(params) => <TextField {...params} label="Certificate Title" placeholder="Certificate Title" />}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '1rem 0' }}>
        <TextField
          variant="outlined"
          name="startDate"
          helperText="Start Date"
          size="small"
          value={certificate.startDate}
          onChange={handleChange}
          type="date"
          sx={{ width: { xs: '35%', sm: '22%', md: '40%' }, margin: { xs: '0.4rem', sm: '0.4rem', md: '0' } }}
        />
        <TextField
          variant="outlined"
          name="endDate"
          type="date"
          value={certificate.endDate}
          onChange={handleChange}
          helperText="End Date (Blank If cont.)"
          size="small"
          sx={{ width: { xs: '35%', sm: '22%', md: '40%' }, margin: { xs: '0.4rem', sm: '0.4rem', md: '0' } }}
        />
      </Box>

      <TextField
        variant="outlined"
        label="Institute"
        name="institute"
        value={certificate.institute}
        onChange={handleChange}
        size="small"
        sx={{ width: { xs: '100%', sm: '40%', md: '80%' }, margin: { xs: '0.4rem 0', sm: '0.4rem', md: '0 0.4rem' } }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '80%', margin: '1rem 0' }}>
        <Button variant="contained" size="small" onClick={newCertificate} color="secondary" sx={{ width:'15%', color: 'white' }}>
          Add
        </Button>
      </Box>

      {allCertificates.length !== 0 &&
        allCertificates.map((value, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#30db5d1c',
              border: '1px solid #30db5d1c',
              borderRadius: '2px',
              marginTop: '1rem',
              marginBottom:'0.5rem',
              width: '80%',
              height: 'auto',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}
          >
         <Box>
         <Typography>Title: {value.title}</Typography>
            <Box sx={{display:'flex'}}>
            <Typography sx={{marginRight:'2rem'}}>Start Date: {value.startDate}</Typography>
            <Typography>End Date: {value.endDate}</Typography>
            </Box>
            <Typography>Institute: {value.institute}</Typography>
         </Box>
            <Box>
            <DeleteIcon onClick={() => handleDelete(index)} sx={{ cursor: 'pointer' }} color="primary" />
            </Box>
          </Box>
        ))}
    </Box>
    </>
  )
}

export default Certifications;
