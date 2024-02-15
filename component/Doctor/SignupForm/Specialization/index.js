import {
    Box,
    Typography,
    Button,
    TextField,
    Autocomplete,
    Modal
  } from "@mui/material";
  import { useState,useContext,useEffect } from "react";
  import education from "../EducationDetails/education";
  import { ProfileContext } from "@/context/profileContext";
  import {POST,GET, DELETE} from "@/services/httpClient" 
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from "@/context/appContext";

export default function Specialization() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {setIsLoading,setSnackbarState}= useContext(AppContext);
  const {profileData}= useContext(ProfileContext);
  const [allSpecialization, setAllSpecialization] = useState([])
    const [specialization, setSpecialization] = useState({
        title: "",
        institute: "",
        startDate: "",
        endDate: "",
        clientId: null
      });

      const handleDelete= async (id)=>{
        try {
          setIsLoading(true)
          const response= await DELETE(`/specialization/${id}`)
          fetchRecords();
          setIsLoading(false)
          if(!response.error){
            setSnackbarState({
              severity: "success",
              open: true,
              message: "Deleted successfully",
            })
          }
        } catch (error) {
          console.log(error)
          setSnackbarState({
            severity: "error",
            open: true,
            message: "Failed to delete",
          })
          setIsLoading(false)
        }
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSpecialization((prev) => ({ ...prev, [name]: value }));
      };
      const handleSave= async ()=>{
        if (
          specialization.title !== "" &&
          specialization.institute !== "" &&
          specialization.startDate !== "" &&
          specialization.endDate !== "" &&
          specialization.clientId !==null
        ){
        try {
          setIsLoading(true)
          const response= await POST(`/specialization`,specialization)
          fetchRecords();
          setIsLoading(false)
          if(!response.error){
            setSpecialization({
              title: "",
              institute: "",
              startDate: "",
              endDate: "",
              clientId: null
            })
            setSnackbarState({
              severity: "success",
              open: true,
              message: "Saved successfully",
            })
          }
        } catch (error) {
          console.log(error)
          setSnackbarState({
            severity: "error",
            open: true,
            message: "Failed to delete",
          })
          setIsLoading(false)
        }
      }else{
        setSnackbarState({
          severity: "error",
          open: true,
          message: "All fields are mandatory",
      })
      }
    }
      async function fetchRecords(){
        try {
          const response= await GET(`/specialization/${profileData?._id}`)
          setAllSpecialization(response)
        } catch (error) {
          console.log(error)
          setSnackbarState({
            severity: "error",
            open: true,
            message: "Failed to get records",
          })
          setIsLoading(false)
        }
      }
      useEffect(()=>{
        if(profileData._id){
          fetchRecords()
        }
      },[profileData._id])
      useEffect(() => {
        if (profileData){
          setSpecialization({...specialization,clientId:profileData._id})
        }
      }, [profileData._id]);
  return (
    <>
           <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0 0 0",
        width:'100%',
        height:'100%',
      }}
    >
      <Box width='57%' display='flex' justifyContent='flex-end' mb='1.1rem'>
      <Button color="secondary" onClick={handleOpen} variant="contained" size="small" sx={{color:'white'}}><Typography textTransform='none'>Add Specialization</Typography></Button>
      </Box>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width="42%" position='absolute' top='50%' left='50%' padding='1rem 0' sx={{transform: 'translate(-50%, -50%)',backgroundColor:'white',border:'1px solid #2528260a',borderRadius:'8px'}} height="auto" display='flex' flexDirection='column' alignItems='center'>
          <Box width='90%' mb='1rem' display='flex' justifyContent='flex-end'>
          <CloseIcon onClick={handleClose} cursor='pointer'/>
          </Box>
        <Autocomplete
        id="tags-outlined"
        options={education}
        value={specialization.title}
        onChange={(_, newValue) =>
          setSpecialization((prev) => ({ ...prev, title: newValue }))
        }
        size="small"
        getOptionLabel={(option) => option}
        filterSelectedOptions
        sx={{
          width:'85%'
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Degree Title"
            placeholder="Degree Title"
          />
        )}
      />
     

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "85%",
          margin: "1rem 0",
        }}
      >
        <TextField
          variant="outlined"
          name="startDate"
          helperText="Start Date"
          size="small"
          value={specialization.startDate}
          onChange={handleChange}
          type="date"
          sx={{
            width:"35%"
          }}
        />
        <TextField
          variant="outlined"
          name="endDate"
          type="date"
          value={specialization.endDate}
          onChange={handleChange}
          helperText="End Date (Blank If cont.)"
          size="small"
          sx={{
            width:'35%'
          }}
        />
      </Box>

      <TextField
        variant="outlined"
        label="Institute"
        name="institute"
        value={specialization.institute}
        onChange={handleChange}
        size="small"
        sx={{
          width:'85%'
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "85%",
          marginTop: "0.5rem",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={handleSave}
          color="secondary"
          sx={{ width: "15%", color: "white",marginBottom:'0.8rem',marginTop:'0.4rem' }}
        >
          <Typography textTransform='none'>Save</Typography>
        </Button>
      </Box>
        </Box>
      </Modal>

     <Box width='57%' height='440px' sx={{overflowY:'scroll'}} >
     {allSpecialization.length !== 0 &&
        allSpecialization.map((value, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              border: "1px solid #2528260a",
              width: "100%",
              margin:'0.5rem 0',
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding:' 0.6rem',
              borderRadius:'10px',
            }}
          >
            <Box width='80%' height='auto'>
              <Typography sx={{overflow: "hidden", whiteSpace: "pre-wrap"}}><Typography variant="span" fontWeight={580}>Title:</Typography> {value.title}</Typography>
              <Box sx={{ display: "flex",justifyContent:"space-between" }}>
                <Typography>
                <Typography variant="span" fontWeight={580}>Start date:</Typography> {new Date(value.startDate).toLocaleDateString()}
                </Typography>
                <Typography><Typography variant="span" fontWeight={580}>End date:</Typography> {new Date(value.endDate).toLocaleDateString()}</Typography>
              </Box>
              <Typography sx={{overflow: "hidden", whiteSpace: "pre-wrap"}}><Typography variant="span" fontWeight={580}>Institute:</Typography>{value.institute}</Typography>
            </Box>
            <Box>
              <DeleteIcon
                onClick={() => handleDelete(value._id)}
                sx={{ cursor: "pointer" }}
                color="secondary"
              />
            </Box>
          </Box>
        ))}
     </Box>
    </Box>
    </>
  )
}
