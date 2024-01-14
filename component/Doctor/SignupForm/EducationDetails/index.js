import { Box,Typography,Button,TextField,Autocomplete } from "@mui/material"
import education from "./education";

export default function EducationDetails() {
  return (
    <>
    <Typography variant="body2" sx={{margin:'0 0.4rem',color:'#646464'}}>Educational Information: </Typography>
       <Box sx={{display:{xs:'initial',sm:'flex'},margin:{xs:'0.3rem 0',sm:'0.4rem'}}}>
       <Autocomplete
        multiple
        id="tags-outlined"
        options={education}
        size='small'
        getOptionLabel={(option) => option}
        defaultValue={[education[0]]}
        filterSelectedOptions
        sx={{width:{xs:'100%',sm:'40%',md:'30%'},margin:{xs:'0.4rem 0',sm:'0.4rem',md:'0 0.4rem'}}}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Degree Title"
            placeholder="Degree Title"
          />
        )}
      />
          <TextField
          variant='outlined'
          label='Institute Name'
          name='educationInstituteName'
          size='small'
          sx={{width:{xs:'100%',sm:'40%',md:'20%'},margin:{xs:'0.4rem 0',sm:'0.4rem',md:'0 0.4rem'}}}
          />
          <TextField
          variant='outlined'
          name='degreeStartDate'
          helperText='Start Date'
          size='small'
          type='date'
          sx={{width:{xs:'35%',sm:'22%',md:'15%'},margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'}}}

          />
          <TextField
          variant='outlined'
          name='degreeEndDate'
          type='date'
          helperText='End Date (Blank If cont.)'
          size='small'
          sx={{width:{xs:'35%',sm:'22%',md:'15%'},margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'}}}
          />
          <Box>
          <Button variant='contained' color='secondary' sx={{margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'},color:'white'}}>Add</Button>
          </Box>
       </Box>
    </>
  )
}
