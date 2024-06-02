import React, { useState, useEffect } from "react";

function Typing({ text, typingSpeed = 100, deletingSpeed = 150, duration = 2000}) {
  const [displayedText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text[index].length) {
          setDisplayText((prev) => prev + text[index].charAt(prev.length));
        } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, duration);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      }
    };

    const timeount = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
  }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);

  return (
    <div class="typing-effect">
        {displayedText}
      <span class="caret">|</span>
    </div>
  );
}

export default Typing;