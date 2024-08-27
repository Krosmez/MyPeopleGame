import "./style.css";

import { useState } from "react";

const Input = ({ id, label, type = "text", value, onChange, className }) => {
  const [newValue, setNewValue] = useState(value);

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input">
      <label htmlFor={id} className="input-label screen-reader-text">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleInputChange}
        className={`input-field ${className ? className : ""}`}
      />
    </div>
  );
};

export default Input;
