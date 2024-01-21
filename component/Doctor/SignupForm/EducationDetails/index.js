import {
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import educationTitle from "./education";
import { useContext, useEffect, useState } from "react";
import { GET, POST, UPDATE } from "@/services/httpClient";
import { ProfileContext } from "@/context/profileContext";

export default function EducationDetails() {
  const [allEducations, setAllEducations] = useState([]);
  const { profileData } = useContext(ProfileContext);
  const [education, setEducation] = useState({
    title: "",
    institute: "",
    startDate: "",
    endDate: "",
    clientId: profileData._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const newEducation = async () => {
    if (
      education.title !== "" &&
      education.institute !== "" &&
      education.startDate !== "" &&
      education.endDate !== ""
    ) {
      try {
        const response = await POST(`/education`, education);
      } catch (error) {
        console.log("🚀 ~ handleUpdate ~ error:", error);
      }
      // setAllEducations([...allEducations, education]);
    } else {
      console.log("ALL FIELDS ARE NECESSARY");
    }
  };

  const handleDelete = (recordId) => {
    const updatedEducations = [...allEducations];
    updatedEducations.splice(recordId, 1);
    setAllEducations(updatedEducations);
  };
  async function fetchRecords() {
    try {
      const response = await GET(`/education/${profileData._id}`);
      setAllEducations(response);

      console.log("🚀 ~ fetchRecords ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ fetchRecords ~ error:", error);
    }
  }
  useEffect(() => {
    if (profileData._id) fetchRecords();
  }, [profileData._id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0 0 0",
      }}
    >
      <Autocomplete
        id="tags-outlined"
        options={educationTitle}
        value={education.title}
        onChange={(_, newValue) =>
          setEducation((prev) => ({ ...prev, title: newValue }))
        }
        size="small"
        getOptionLabel={(option) => option}
        filterSelectedOptions
        sx={{
          width: { xs: "100%", sm: "40%", md: "80%" },
          margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
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
          width: "80%",
          margin: "1rem 0",
        }}
      >
        <TextField
          variant="outlined"
          name="startDate"
          helperText="Start Date"
          size="small"
          value={education.startDate}
          onChange={handleChange}
          type="date"
          sx={{
            width: { xs: "35%", sm: "22%", md: "40%" },
            margin: { xs: "0.4rem", sm: "0.4rem", md: "0" },
          }}
        />
        <TextField
          variant="outlined"
          name="endDate"
          type="date"
          value={education.endDate}
          onChange={handleChange}
          helperText="End Date (Blank If cont.)"
          size="small"
          sx={{
            width: { xs: "35%", sm: "22%", md: "40%" },
            margin: { xs: "0.4rem", sm: "0.4rem", md: "0" },
          }}
        />
      </Box>

      <TextField
        variant="outlined"
        label="Institute"
        name="institute"
        value={education.institute}
        onChange={handleChange}
        size="small"
        sx={{
          width: { xs: "100%", sm: "40%", md: "80%" },
          margin: { xs: "0.4rem 0", sm: "0.4rem", md: "0 0.4rem" },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "80%",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={newEducation}
          color="secondary"
          sx={{ width: "15%", color: "white" }}
        >
          Add
        </Button>
      </Box>

      {allEducations.length !== 0 &&
        allEducations.map((value, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#30db5d1c",
              border: "1px solid #30db5d1c",
              borderRadius: "2px",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              width: "80%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>Title: {value.title}</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ marginRight: "2rem" }}>
                  Start Date: {value.startDate}
                </Typography>
                <Typography>End Date: {value.endDate}</Typography>
              </Box>
              <Typography>Institute: {value.institute}</Typography>
            </Box>
            <Box>
              <DeleteIcon
                onClick={() => handleDelete(index)}
                sx={{ cursor: "pointer" }}
                color="primary"
              />
            </Box>
          </Box>
        ))}
    </Box>
  );
}
