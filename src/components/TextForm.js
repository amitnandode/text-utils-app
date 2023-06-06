import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="7"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
