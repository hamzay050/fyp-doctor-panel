import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box
} from '@mui/material';
import education from './education';
import specialties from './specialties';
import { Add } from '@mui/icons-material';

const DoctorRegistrationForm = () => {
  const [data, setData] = useState({
    medicalLicenseNo: '',
    specialty: '',
    experience: '',
    education: '',
    passingYear: '',
    instituteName: '',
    instituteLocation: '',
    startDate: '',
    endDate: '',
    workInstitute: '',
    workPeriod: '',
    generalConsultation:'',
    surgery:'',
    telemedicine:'',
    languagesSpoken: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  console.log(data)
  const doctorExperience = ['0-5', '5-10', '10+']; // Customize as needed


  return (
    <Box m='0.6rem 0 0 0'>
      {/* Personal Information */}
      <TextField
        id="filled-basic"
        label="Medical License No"
        variant="outlined"
        size="small"
        name="medicalLicenseNo"
        sx={{ margin: '0.5rem 1rem', width: '20%' }}
        value={data.medicalLicenseNo}
        onChange={handleChange}
        required
      />

      {/* Professional Information */}
      <FormControl variant="outlined" size="small" sx={{ width: '33%', margin: '0.5rem 1rem' }}>
        <InputLabel id="specialty-label" required>
          Specialty
        </InputLabel>
        <Select
          labelId="specialty-label"
          id="specialty"
          name="specialty"
          value={data.specialty}
          onChange={handleChange}
        >
          {specialties.map((curVal) => (
            <MenuItem key={curVal} value={curVal}>
              {curVal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Experience */}
      <FormControl variant="outlined" size="small" sx={{ width: '33%', margin: '0.5rem 1rem' }}>
        <InputLabel id="experience-label" required>
          Years of Professional Experience
        </InputLabel>
        <Select
          labelId="experience-label"
          id="experience"
          name="experience"
          value={data.experience}
          onChange={handleChange}
        >
          {doctorExperience.map((curVal) => (
            <MenuItem key={curVal} value={curVal}>
              {curVal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Education details */}
      <Typography variant="body2" sx={{ color: '#c1c0c0', margin: '0.4rem 0.7rem' }}>
        Education Details
      </Typography>
      <FormControl variant="outlined" size="small" sx={{ width: '28%', margin: '0.5rem 0.5rem 0.5rem 1rem' }}>
        <InputLabel id="education-label" required>
          Education
        </InputLabel>
        <Select
          labelId="education-label"
          id="education"
          name="education"
          value={data.education}
          onChange={handleChange}
        >
          {education.map((curVal) => (
            <MenuItem key={curVal} value={curVal}>
              {curVal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="filled-basic"
        label="Passing Year"
        variant="outlined"
        size="small"
        name="passingYear"
        sx={{ margin: '0.5rem', width: '20%' }}
        value={data.passingYear}
        onChange={handleChange}
        required
      />

      <TextField
        id="filled-basic"
        label="Institute Name"
        variant="outlined"
        size="small"
        name="instituteName"
        sx={{ margin: '0.5rem', width: '20%' }}
        value={data.instituteName}
        onChange={handleChange}
        required
      />

      <TextField
        id="filled-basic"
        label="Institute Location"
        variant="outlined"
        size="small"
        name="instituteLocation"
        sx={{ margin: '0.5rem', width: '20%' }}
        value={data.instituteLocation}
        onChange={handleChange}
        required
      />

      {/* Work Experience */}
      <Typography variant="body2" sx={{ color: '#c1c0c0', margin: '0.4rem 0.7rem' }}>
        Work Experience Details
      </Typography>
      <TextField
        id="filled-basic"
        label="Hospital/Clinic Name"
        variant="outlined"
        size="small"
        name="workInstitute"
        sx={{ margin: '0.5rem 0.5rem 0.5rem 1rem', width: '29%' }}
        value={data.workInstitute}
        onChange={handleChange}
        required
      />

      <TextField
        variant="outlined"
        helperText="Start Date"
        name="startDate"
        size="small"
        type="date"
        sx={{ width: '20%', margin: '0.5rem' }}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        helperText="End Date"
        name="endDate"
        size="small"
        type="date"
        sx={{ width: '20%', margin: '0.5rem' }}
        onChange={handleChange}
      />

      <FormControl variant="outlined" size="small" sx={{ width: '20%', margin: '0.5rem' }}>
        <InputLabel id="workPeriod-label" required>
          Work Period (Years)
        </InputLabel>
        <Select
          labelId="workPeriod-label"
          id="workPeriod"
          name="workPeriod"
          value={data.workPeriod}
          onChange={handleChange}
        >
          {doctorExperience.map((curVal) => (
            <MenuItem key={curVal} value={curVal}>
              {curVal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <Add color='secondary' sx={{margin:'0.7rem 0'}}/> */}

      {/* Services Offered */}
      <Typography variant="body2" sx={{ color: '#c1c0c0', margin: '0.4rem 0.7rem' }}>
        Services Offered In
      </Typography>
      
      <TextField
        id="filled-basic"
        label="Offered Service - General Consultation"
        variant="outlined"
        size="small"
        name="generalConsultation"
        sx={{ margin: '0.5rem 0.5rem 0.5rem 1rem', width: '29%' }}
        value={data.generalConsultation}
        onChange={handleChange}
        // You can use a textarea for multiple languages
      />

<TextField
        id="filled-basic"
        label="Offered Service - Surgery"
        variant="outlined"
        size="small"
        name="surgery"
        sx={{ margin: '0.5rem 0.5rem 0.5rem 1rem', width: '29%' }}
        value={data.surgery}
        onChange={handleChange}
        // You can use a textarea for multiple languages
      />
        <TextField
        id="filled-basic"
        label="Offered Service - Telemedicine"
        variant="outlined"
        size="small"
        name="telemedicine"
        sx={{ margin: '0.5rem 0.5rem 0.5rem 1rem', width: '29%' }}
        value={data.telemedicine}
        onChange={handleChange}
        // You can use a textarea for multiple languages
      />

      {/* Languages Spoken */}
      <TextField
        id="filled-basic"
        label="Languages Spoken"
        variant="outlined"
        size="small"
        name="languagesSpoken"
        sx={{ margin: '0.5rem 0.5rem 0.5rem 1rem', width: '29%' }}
        value={data.languagesSpoken}
        onChange={handleChange}
        // You can use a textarea for multiple languages
      />
      {/* Add more fields as needed */}
    </Box>
  );
};

export default DoctorRegistrationForm;
