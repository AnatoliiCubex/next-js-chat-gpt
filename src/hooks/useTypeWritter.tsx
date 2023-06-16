import { useState, useEffect } from "react";

export const useTypeWritter = () => {
  const [answer, setAnswer] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");

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

  return { answer, setAnswer, typedAnswer, setTypedAnswer };
};
