// components/AutoComplete.js
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutoComplete = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    // Simulating debounce effect
    setTimeout(() => {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(inputValue)
      );
      setFilteredOptions(filtered);
    }, 300); // Adjust debounce time as needed
  };

  return (
    <Autocomplete
      freeSolo
      options={filteredOptions}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Autocomplete" variant="outlined" />
      )}
    />
  );
};

export default AutoComplete;
