import { Box, Typography, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState,useEffect,useContext} from "react"
import { ProfileContext } from "@/context/profileContext";
import { GET, POST, UPDATE } from "@/services/httpClient";


export default function WorkHistory() {
  const [allWorks, setAllWorks] = useState([]);
  const { profileData } = useContext(ProfileContext);
  const [work, setWork] = useState({
    title: "",
    institute: "",
    startDate: "",
    endDate: "",
    role: "",
    clientId: profileData._id,
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
      work.endDate !== ""
    ) {
      try {
        const response = await POST(`/jobs`, work);
      } catch (error) {
        console.log("🚀 ~ handleUpdate ~ error:", error);
      }
      // setAllworks([...allworks, work]);
    } else {
      console.log("ALL FIELDS ARE NECESSARY");
    }
  };

  const handleDelete = (recordId) => {
    const updatedWorks = [...allWorks];
    updatedWorks.splice(recordId, 1);
    setAllWorks(updatedWorks);
  };

  async function fetchRecords() {
    try {
      const response = await GET(`/jobs/${profileData._id}`);
      setAllWorks(response);
      console.log(response)

      console.log("🚀 ~ fetchRecords ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ fetchRecords ~ error:", error);
    }
  }
  useEffect(() => {
    if (profileData._id) fetchRecords();
  }, [profileData._id]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 0 0 0" }}>
      <TextField
        variant="outlined"
        name="title"
        label="Title"
        size="small"
        value={work.title}
        onChange={handleChange}
        sx={{ width: { xs: "35%", sm: "22%", md: "80%" }, margin: { xs: "0.4rem", sm: "0.4rem", md: "0" } }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "1rem 0" }}>
        <TextField
          variant="outlined"
          name="startDate"
          helperText="Start Date"
          size="small"
          value={work.startDate}
          onChange={handleChange}
          type="date"
          sx={{ width: { xs: "35%", sm: "22%", md: "40%" }, margin: { xs: "0.4rem", sm: "0.4rem", md: "0" } }}
        />
        <TextField
          variant="outlined"
          name="endDate"
          type="date"
          value={work.endDate}
          onChange={handleChange}
          helperText="End Date (Blank If cont.)"
          size="small"
          sx={{ width: { xs: "35%", sm: "22%", md: "40%" }, margin: { xs: "0.4rem", sm: "0.4rem", md: "0" } }}
        />
      </Box>

      <TextField
        variant="outlined"
        label="Institute"
        name="institute"
        value={work.institute}
        onChange={handleChange}
        size="small"
        sx={{ width: { xs: "100%", sm: "40%", md: "80%" }, margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" } }}
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
        sx={{ width: { xs: "100%", sm: "40%", md: "80%" }, margin: { xs: "0.4rem 0", sm: "0.4rem", md: "1rem 0.4rem" } }}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "80%", margin: "1rem 0" }}>
        <Button variant="contained" size="small" onClick={newWork} color="secondary" sx={{width:'15%', color: "white" }}>
          Add
        </Button>
      </Box>

      {allWorks.length !== 0 &&
        allWorks.map((value, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#30db5d1c",
              border: "1px solid #30db5d1c",
              borderRadius: "2px",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              width: "80%",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>Title: {value.title}</Typography>
              <Box sx={{display:'flex'}}>
              <Typography sx={{marginRight:'2rem'}}>Start Date: {value.startDate}</Typography>
              <Typography>End Date: {value.endDate}</Typography>
              </Box>
              <Typography>Institute: {value.institute}</Typography>
              <Typography>Role: {value.role}</Typography>
            </Box>
            <DeleteIcon onClick={() => handleDelete(index)} sx={{ cursor: "pointer" }} color="primary" />
          </Box>
        ))}
    </Box>
  );
}
