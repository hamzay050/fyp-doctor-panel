import React, { useContext } from "react";
import ChatBubble from "./ChatBubble";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { useState } from "react";
import { GET, POST } from "@/services/httpClient";
import { ProfileContext } from "@/context/profileContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

function index({ patientData }) {
  const router = useRouter();
  const { profileData } = useContext(ProfileContext);

  const [messages, setMessages] = useState([]);
  const [myMessages, setMyMessages] = useState("");

  useEffect(() => {
    if (profileData._id && patientData._id)
      setInterval(() => {
        fetchMessages(router.query.patientId, profileData._id);
      }, 3000);
  }, [profileData._id]);

  const fetchMessages = async (senderId, receiverId) => {
    try {
      const response = await GET("/messages", {
        params: {
          senderId,
          receiverId,
          appointmentId: router.query.appointmentId,
        },
      });
      setMessages(response);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      await POST("/messages", {
        message: myMessages,
        senderId: profileData._id,
        receiverId: patientData._id,
        appointmentId: router.query.appointmentId,
      });

      fetchMessages(router.query.patientId, profileData._id);
      setMyMessages("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <>
      <Box
        sx={{ overflow: "scroll" }}
        width="100%"
        height="320px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        {messages?.length
          ? messages.map((message) => {
              console.log("====:", message.senderId, profileData._id);

              console.log(
                "Is sender:",
                message.senderId === profileData._id ? "No" : "Yes"
              );

              return (
                <Box
                  key={message._id}
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems={
                    message.senderId === profileData._id
                      ? "flex-end"
                      : "flex-start"
                  }
                >
                  <ChatBubble message={message} />
                </Box>
              );
            })
          : null}

        <Box mt={2}>
          <Footer
            onSend={sendMessage}
            myMessages={myMessages}
            setMyMessages={setMyMessages}
          />
        </Box>
      </Box>
    </>
  );
}

export default index;
