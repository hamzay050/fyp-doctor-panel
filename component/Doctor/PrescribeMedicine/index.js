import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Tooltip,
  Typography,
  Divider,
  Modal,
  IconButton,
} from "@mui/material";
import { useState,useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MedicationIcon from "@mui/icons-material/Medication";
import DeleteIcon from "@mui/icons-material/Delete";
import AddMedicine from "./AddMedicine";
import PatientDetail from "./PatientDetail";
import ClearIcon from "@mui/icons-material/Clear";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PrintIcon from "@mui/icons-material/Print";
import DoneIcon from "@mui/icons-material/Done";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import { DELETE, GET, UPDATE } from "@/services/httpClient"; 
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 680,
  height: 480,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px solid #f1d4a975",
  borderRadius: "10px",
};

export default function PrescribeMedicine() {
  const router=useRouter();
  const {appointmentId}=router.query
  console.log(appointmentId)
  const [medicineData, setMedicineData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

      async function getMedicines(){
        try {
          const response= await GET(`/prescribe-medicine/${appointmentId}`)
          console.log(response)
          setMedicineData(response)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(()=>{
        if(appointmentId){
          getMedicines()
        }return;
      },[appointmentId])

      const handleDelete= async (id)=>{
        try {
          const response= await DELETE(`/prescribe-medicine/${id}`)
          getMedicines();
        } catch (error) {
          console.log(error)
        }
      }
      const updateAppointmentStatus= async ()=>{
        try {
          const response= await UPDATE(`/prescribe-medicine`,{status:'completed',id:appointmentId})
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <>
      <Box
        m="1.5rem 0 0 0"
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* <TextField
        variant="outlined"
        id="input-with-icon-textfield"
        sx={{width:'340px',margin:'0 1.5rem',borderColor:'white'}}
        placeholder='Search'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      /> */}
        {/* <Button size="small" onClick={handleOpen} variant="contained">
          <Typography textTransform="none" fontSize="14px">
            Add Medicine
          </Typography>
        </Button> */}
      </Box>
      <Grid container>
        <Grid
          item
          xs={3.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            margin: "1rem 1rem 0 1.5rem",
            height: "450px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <PatientDetail />
        </Grid>
        <Grid
          item
          xs={7.9}
          sx={{
            backgroundColor: "white",
            overflowY: "scroll",
            height: "450px",
            margin: "1rem 0 0 0",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#26a69a",
              height: "45px",
              alignItems: "center",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", margin: "0 1rem" }}
            >
              Prescribe Medicine
            </Typography>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Tooltip title="Add Medicine">
                <IconButton onClick={() => handleOpen()}>
                  <AddBoxIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>

              <IconButton disabled={medicineData[0]?._id?false:true} onClick={updateAppointmentStatus}>
                <Tooltip title="Complete Prescription">
                  <LibraryAddCheckIcon
                    fontSize="small"
                    sx={{ color: medicineData[0]?._id?'white':'#d5cece66', }}
                  />
                </Tooltip>
              </IconButton>

              <IconButton>
                <Tooltip title="View">
                  <RemoveRedEyeIcon sx={{ color: "white" }} />
                </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip title="Print">
                  <PrintIcon sx={{ color: "white" }} />
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0.7rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MedicationIcon sx={{ color: "#c1c0c0" }} />
              <Typography variant="body2" sx={{ color: "#7f8180" }}>
                Medication
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#7f8180" }}>
              Dosage
            </Typography>
            <Typography variant="body2" sx={{ color: "#7f8180" }}>
              Amount
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#7f8180", margin: "0 2rem" }}
            >
              Date
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#7f8180", margin: "0 2rem" }}
            >
              Action
            </Typography>
          </Box>
          <Divider />
          {/* medicines */}
          {
            medicineData && medicineData.map((value)=>{
              return(
                <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "0.7rem",
                }}
                key={value._id}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <VaccinesIcon sx={{ color: "#c1c0c0" }} />
                  <Box m="0 0.3rem">
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "600", color: "#383c3c" }}
                    >
                      {value.medicineName}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "570", color: "#383c3c" }}
                >
                  {value.frequency}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "570", color: "#383c3c" }}
                >
                  {value.amount}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "570", color: "#383c3c" }}
                >
                  {new Date(value.startDate).toLocaleDateString()}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ padding: "0.1rem", color: "#fff" }}
                  >
                    View
                  </Button>
                 <IconButton onClick={()=>handleDelete(value._id)}>
                 <DeleteIcon
                    sx={{ color: "#c1c0c0" }}
                  />
                 </IconButton>
                </Box>
              </Box>
              )
            })
          }

           
     
        </Grid>
      </Grid>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container sx={style}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                margin: "0.5rem 0 0 2rem",
                cursor: "pointer",
              }}
            >
              <ClearIcon sx={{ margin: "0 1rem" }} onClick={handleClose} />
            </Box>
            <AddMedicine />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
