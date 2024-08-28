import "./style.css";

import { useEffect, useRef, useState } from "react";

const Fields = ({
  id,
  label,
  type = "text",
  initialInputValue,
  initialContent,
  personId,
}) => {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const handleTextAreaChange = (event) => {
    const textarea = event.target;
    setContent(textarea.value);
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePutRequest = () => {
    const updatedData = {
      name: inputValue,
      content,
    };

    fetch(
      `${process.env.REACT_APP_API_LINK}/api/person/${personId}/field/content/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        // Handle the error
      });
  };

  return (
    <section className="fields">
      <div className="field-input-container">
        <label htmlFor={id} className="fields-input-label screen-reader-text">
          {label}
        </label>
        <input
          id={id}
          type={type}
          value={capitaliseFirstLetter(inputValue)}
          onChange={handleInputChange}
        />
      </div>
      <div className="field-textarea-container">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleTextAreaChange}
          style={{ width: "100%", overflow: "hidden", resize: "none" }}
        />
      </div>
      <button type="submit" onClick={handlePutRequest}>
        Save
      </button>
    </section>
  );
};

export default Fields;
