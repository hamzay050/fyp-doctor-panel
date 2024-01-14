import { Box,Typography,TextField,Button } from "@mui/material"

export default function WorkHistory() {
  return (
    <>
     <Typography variant="body2" sx={{margin:'0 0.4rem',color:'#646464'}}>Work History: </Typography>
     <Box sx={{margin:{xs:'0.3rem 0',sm:'0.4rem'}}}>
     <TextField
          variant='outlined'
          label='Designation'
          name='designation'
          size='small'
          sx={{width:{xs:'100%',sm:'40%',md:'20%'},margin:{xs:'0.4rem 0',sm:'0.4rem',md:'0 0.4rem'}}}
          />
        <TextField
          variant='outlined'
          name='designationStartDate'
          helperText='Start Date'
          size='small'
          type='date'
          sx={{width:{xs:'35%',sm:'22%',md:'15%'},margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'}}}
          />
          <TextField
          variant='outlined'
          name='designationEndDate'
          type='date'
          helperText='End Date (Blank If cont.)'
          size='small'
          sx={{width:{xs:'35%',sm:'22%',md:'15%'},margin:{xs:'0.4rem',sm:'0.4rem',md:'0 0.4rem'}}}
          />
        <TextField
          variant='outlined'
          label='Describe your role in one or two lines'
          name='roleDetails'
          size='small'
          sx={{width:{xs:'100%',sm:'40%',md:'30%'},margin:{xs:'0',sm:'0.4rem',md:'0 0.4rem'}}}
        />
          <Button variant='contained' color='secondary' sx={{margin:{xs:'0.4rem 0.1rem' ,sm:'0.4rem',md:'0 0.4rem'},color:'white'}}>Add</Button>
     </Box>
      
    </>
  )
}
