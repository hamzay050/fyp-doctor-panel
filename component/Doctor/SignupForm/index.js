import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import MoreInformation from "./MoreInformation";
import Link from "next/link";
import {useState} from "react"
import ProfessionalDetails from "./ProfessionalDetails";

// modal style
const style = {
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'90%',sm:'50%',lg:'30%'},
  bgcolor: 'background.paper',
  border:'1px solid gray',
  borderRadius:'5px',
  boxShadow: 34,
  p: 4,
};
export default function SignupForm() {

  const [data, setData] = useState({})
  const [activeStep, setActiveStep] = useState(0)
  const [open, setOpen] = useState(false);
  const steps=[
    'Personal Information',
    'Clinic Information',
    'Professional Details'
  ];
  const handleNext=()=>{
    setActiveStep(activeStep +1)
  }
  const handleBack=()=>{
    setActiveStep(activeStep -1)
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
   
   <Box mt='2rem' sx={{width:'100%',height:'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Stepper sx={{width:{xs:'100%',sm:'50%'}}} activeStep={activeStep} alternativeLabel>
      {steps.map((label,index)=>{
      return (
     <Step key={index}>
      <StepLabel>{label}</StepLabel>
     </Step>     
     )
      })}
    </Stepper>

    { activeStep<2 && <Box sx={{border:'1px solid #cdd3d2',backgroundColor:'white',borderRadius:'10px',width:{xs:'90%',sm:'47%',lg:'33%'}, margin:'2rem 0'}}>
    {activeStep===0 && <PersonalInformation/>}
    {activeStep===1 && <MoreInformation/>}
    <Box sx={{display:'flex',justifyContent:'space-around',width:'100%',margin:'0.6rem 0 0.5rem 0'}}>
      <Button onClick={handleBack}>Back</Button>
      {activeStep<=1 && <Button onClick={handleNext}>Next</Button>}
    { activeStep===2 && <Button onClick={handleOpen}>Finish</Button> }
    </Box>
    </Box>}


    {activeStep===2 && <Box sx={{border:'1px solid #cdd3d2',backgroundColor:'white',borderRadius:'10px',width:'70%', margin:'2rem 0'}}>
    <ProfessionalDetails/>
    <Box sx={{display:'flex',justifyContent:'space-around',width:'100%',margin:'0.6rem 0 0.5rem 0'}}>
      <Button onClick={handleBack}>Back</Button>
      {activeStep<=1 && <Button onClick={handleNext}>Next</Button>}
    { activeStep===2 && <Button onClick={handleOpen}>Finish</Button> }
    </Box>
    </Box>}
    </Box>
    {/* Modal on finish click */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box sx={style}>
       <Typography variant="h5" component="div" sx={{margin:'1rem 0.4rem'}} >
         Account Verification is in progress
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{margin:'0.4rem'}}>
        Your Application has been submitted .Your account verification is currently in progress. Please wait while we verify your information.
        </Typography>
      <Link href='/doctor/home' style={{textDecoration:'none'}}><Button variant="outlined" color='secondary' sx={{margin:'1rem',width:'90%'}}>Return to Home Page</Button></Link>
       </Box>
      </Modal>
    </>
  );
}
