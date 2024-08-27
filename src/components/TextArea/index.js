import { useEffect, useRef, useState } from "react";

const AutoResizeTextarea = ({ initialContent }) => {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const handleInput = (event) => {
    const textarea = event.target;
    setContent(textarea.value);
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <textarea
      ref={textareaRef}
      value={content}
      onChange={handleInput}
      style={{ width: "100%", overflow: "hidden", resize: "none" }}
    />
  );
};

export default AutoResizeTextarea;
