import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function Footer({ myMessages, setMyMessages, onSend }) {
  return (
    <Box display="flex">
      <TextField
        value={myMessages}
        fullWidth
        onChange={(e) => setMyMessages(e.target.value)}
        id="standard-basic"
        label="Standard"
        size="small"
      />
      <IconButton disabled={myMessages?.length ? false : true} onClick={onSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default Footer;
