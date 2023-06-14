import React, { useEffect, useState } from "react";

import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const HomePageComponent = () => {
  const [question, setQuestion] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answer, setAnswer] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");

  const handleSendQuestion = async () => {
    const response = await fetch(`/api/gpt?question=${question}`).then((res) =>
      res.json()
    );
    setAnswer(response.content);
  };

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: ReturnType<typeof setTimeout>;

    const typeAnswer = () => {
      if (currentIndex < answer.length) {
        setTypedAnswer(
          (prevTypedAnswer) => prevTypedAnswer + answer[currentIndex]
        );
        currentIndex++;
        typingTimer = setTimeout(typeAnswer, 50); // Adjust the typing speed here
      }
    };

    const startTypingEffect = () => {
      if (answer && answer !== typedAnswer) {
        setTypedAnswer("");
        currentIndex = 0;
        typingTimer = setTimeout(typeAnswer, 50); // Start typing immediately
      }
    };

    const clearTypingEffect = () => {
      clearTimeout(typingTimer);
    };

    startTypingEffect();

    return clearTypingEffect;
  }, [answer]);

  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          border: "2px dashed red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: "4rem",
        }}
      >
        <TextField
          label='Ask a question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          multiline
          sx={{
            width: "500px",
            position: "fixed",
            bottom: "2rem",
            zIndex: "2",
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
        <Typography
          sx={{
            width: "500px",
          }}
        >
          {typedAnswer}
        </Typography>
      </Box>
    </div>
  );
};
HomePageComponent.displayName = "HomePage";
