import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TypeWriter = () => {
  //words is an array of words that will be displayed with the typewriting effect.
  const words = ["Web Dev", "Front-End Dev", "Coding"];
  //currentWordIndex is a state variable that keeps track of the current index in the words array.
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  //currentWord is a state variable that represents the currently displayed word.
  const [currentWord, setCurrentWord] = useState("");
  //isDeleting is a state variable that indicates whether characters should be deleted or added.
  const [isDeleting, setIsDeleting] = useState(false);
  //typingSpeed is a state variable that determines the speed at which characters are typed or deleted.
  const [typingSpeed, setTypingSpeed] = useState(10);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => {
      clearTimeout(typingTimer);
    };
  }, [currentWord, isDeleting]);

  const handleTyping = () => {
    const word = words[currentWordIndex];

    if (isDeleting) {
      setCurrentWord(word.substring(0, currentWord.length - 1));
      setTypingSpeed(50);
    } else {
      setCurrentWord(word.substring(0, currentWord.length + 1));
      setTypingSpeed(100);
    }

    if (!isDeleting && currentWord === word) {
      setIsDeleting(true);
      setTypingSpeed(1500);
    } else if (isDeleting && currentWord === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
      setTypingSpeed(100);
    }
  };

  return (
    <div>
      <h2>{currentWord}</h2>
    </div>
  );
};

export default TypeWriter;
