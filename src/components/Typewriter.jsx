import React, { useState, useEffect } from "react";

const Typewriter = ({ words = [], typingSpeed = 90, deletingSpeed = 45, pause = 1600, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[index % words.length] || "";

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, pause, typingSpeed, deletingSpeed]);

  if (!words || words.length === 0) return null;

  const currentWord = words[index % words.length] || "";
  return (
    <span className={className}>
      {currentWord.substring(0, subIndex)}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;
