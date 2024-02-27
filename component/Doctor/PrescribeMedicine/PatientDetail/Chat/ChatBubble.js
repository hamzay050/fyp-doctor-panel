import { ProfileContext } from "@/context/profileContext";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";

function ChatBubble({ message }) {
  const { profileData } = useContext(ProfileContext);

  return (
    <>
      <Box
        m={0.5}
        p={0.5}
        maxWidth="200px"
        borderRadius="10px"
        maxHeight="600px"
        bgcolor={message.senderId === profileData._id ? "#26a69a" : "#ffb74d"}
      >
        <Box>
          <Typography color="white" fontSize="13px" fontWeight="500">
            {message.message}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default ChatBubble;
