import React, { useState } from "react";

import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { Chat } from "./HomePage.types";
import styles from "./HomePage.module.scss";
import classNames from "classnames";

export const HomePageComponent = () => {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState<Chat>([]);

  const handleSendQuestion = async () => {
    if (question.trim().length === 0) return;
    const message = question;
    setQuestion("");

    setChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sendBy: "user",
        message: message,
      },
    ]);
    const response = await fetch(`/api/gpt?question=${message}`).then((res) =>
      res.json()
    );

    setChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sendBy: "bot",
        message: response.content,
      },
    ]);
  };

  return (
    <Box className={styles.homePage}>
      {chat.map((message) => (
        <Box
          key={message.id}
          className={classNames(styles.messageContainer, {
            [styles.sendByUser]: message.sendBy === "user",
            [styles.sendByBot]: message.sendBy === "bot",
          })}
        >
          <Typography className={styles.message}>{message.message}</Typography>
        </Box>
      ))}

      <Box sx={{ height: { xs: "8rem", sm: "12rem" } }} />

      <TextField
        placeholder='Send message'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        multiline
        sx={{
          width: "100%",
          maxWidth: "50rem",
          position: "fixed",
          bottom: "2rem",
          zIndex: 2,
          backgroundColor: "rgba(64,65,79,1)",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleSendQuestion}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
HomePageComponent.displayName = "HomePage";
