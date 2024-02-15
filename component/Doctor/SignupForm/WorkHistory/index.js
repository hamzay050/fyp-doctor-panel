import {
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect, useContext } from "react";
import { ProfileContext } from "@/context/profileContext";
import { GET, POST, DELETE } from "@/services/httpClient";
import CloseIcon from "@mui/icons-material/Close";
import educationTitle from "../EducationDetails/education";
import { AppContext } from "@/context/appContext";

export default function WorkHistory() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allWorks, setAllWorks] = useState([]);
  const { profileData } = useContext(ProfileContext);
  const { setIsLoading, setSnackbarState } = useContext(AppContext);

  const [work, setWork] = useState({
    title: "",
    institute: "",
    startDate: "",
    endDate: "",
    role: "",
    clientId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWork((prev) => ({ ...prev, [name]: value }));
  };

  const newWork = async () => {
    if (
      work.title !== "" &&
      work.institute !== "" &&
      work.startDate !== "" &&
      work.endDate !== "" &&
      work.clientId !== null &&
      work.role !==""
    ) {
      try {
        setIsLoading(true);
        const response = await POST(`/jobs`, work);
        fetchRecords();
        setIsLoading(false);
        if (!response.error) {
          setWork({
            title: "",
            institute: "",
            startDate: "",
            endDate: "",
            role: "",
            clientId: null,
          });
          setSnackbarState({
            severity: "success",
            open: true,
            message: "Saved successfully",
          });
        }
        console.log("🚀 ~ newWork ~ work:", work);
      } catch (error) {
        console.log("🚀 ~ handleUpdate ~ error:", error);
        setSnackbarState({
          severity: "error",
          open: true,
          message: "Failed to save",
        });
        setIsLoading(false);
      }
      // setAllworks([...allworks, work]);
    } else {
      setSnackbarState({
        severity: "error",
        open: true,
        message: "All fields are mandatory",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await DELETE(`/jobs/${id}`);
      fetchRecords();
      setIsLoading(false);
      if (!response.error) {
        setSnackbarState({
          severity: "success",
          open: true,
          message: "Deleted successfully",
        });
      }
    } catch (error) {
      console.log(error);
      setSnackbarState({
        severity: "error",
        open: true,
        message: "Failed to delete",
      });
      setIsLoading(false);
    }
  };

  async function fetchRecords() {
    try {
      const response = await GET(`/jobs/${profileData._id}`);
      setAllWorks(response);
      console.log(response);

      console.log("🚀 ~ fetchRecords ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ fetchRecords ~ error:", error);
      setSnackbarState({
        severity: "error",
        open: true,
        message: "Failed to get records",
      });
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (profileData._id) fetchRecords();
  }, [profileData._id]);

  useEffect(() => {
    if (profileData) {
      setWork({ ...work, clientId: profileData._id });
    }
  }, [profileData._id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0 0 0",
        width: "100%",
        height: "100%",
      }}
    >
      <Box width="57%" display="flex" justifyContent="flex-end" mb="1.1rem">
        <Button
          color="secondary"
          onClick={handleOpen}
          variant="contained"
          size="small"
          sx={{ color: "white" }}
        >
          <Typography textTransform="none">Add Work</Typography>
        </Button>
      </Box>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width="42%"
          position="absolute"
          top="50%"
          left="50%"
          padding="1rem 0"
          sx={{
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid #2528260a",
            borderRadius: "8px",
          }}
          height="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box width="90%" mb="1rem" display="flex" justifyContent="flex-end">
            <CloseIcon onClick={handleClose} cursor="pointer" />
          </Box>
          <Autocomplete
            id="tags-outlined"
            options={educationTitle}
            value={work.title}
            onChange={(_, newValue) =>
              setWork((prev) => ({ ...prev, title: newValue }))
            }
            size="small"
            getOptionLabel={(option) => option}
            filterSelectedOptions
            sx={{
              width: "85%",
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
              value={work.startDate}
              onChange={handleChange}
              type="date"
              sx={{
                width: "35%",
              }}
            />
            <TextField
              variant="outlined"
              name="endDate"
              type="date"
              value={work.endDate}
              onChange={handleChange}
              helperText="End Date (Blank If cont.)"
              size="small"
              sx={{
                width: "35%",
              }}
            />
          </Box>

          <TextField
            variant="outlined"
            label="Institute"
            name="institute"
            value={work.institute}
            onChange={handleChange}
            size="small"
            sx={{
              width: "85%",
              margin: "0.5rem 0",
            }}
          />
          <TextField
            variant="outlined"
            label="Role"
            placeholder="Describe your role in one or two lines"
            name="role"
            minRows={2}
            multiline
            value={work.role}
            onChange={handleChange}
            size="small"
            sx={{
              width: "85%",
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
              onClick={newWork}
              color="secondary"
              sx={{
                width: "15%",
                color: "white",
                marginBottom: "0.8rem",
                marginTop: "0.4rem",
              }}
            >
              <Typography textTransform="none">Save</Typography>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box width="57%" height="440px" sx={{ overflowY: "scroll" }}>
        {allWorks.length !== 0 &&
          allWorks.map((value, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "white",
                border: "1px solid #2528260a",
                width: "100%",
                margin: "0.5rem 0",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: " 0.6rem",
                borderRadius: "10px",
              }}
            >
              <Box width="80%" height="auto">
                <Typography sx={{ overflow: "hidden", whiteSpace: "pre-wrap" }}>
                  <Typography variant="span" fontWeight={580}>
                    Title:
                  </Typography>{" "}
                  {value.title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>
                    <Typography variant="span" fontWeight={580}>
                      Start date:
                    </Typography>{" "}
                    {new Date(value.startDate).toLocaleDateString()}
                  </Typography>
                  <Typography>
                    <Typography variant="span" fontWeight={580}>
                      End date:
                    </Typography>{" "}
                    {new Date(value.endDate).toLocaleDateString()}
                  </Typography>
                </Box>
                <Typography sx={{ overflow: "hidden", whiteSpace: "pre-wrap" }}>
                  <Typography variant="span" fontWeight={580}>
                    Institute:
                  </Typography>
                  {value.institute}
                </Typography>
                <Typography sx={{ overflow: "hidden", whiteSpace: "pre-wrap" }}>
                  <Typography variant="span" fontWeight={580}>
                    Role:
                  </Typography>
                  {value.role}
                </Typography>
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
  );
}
