import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
    if (event.target.value.trim() !== "") {
      setError(""); // Clear error on typing
    }
  }

  function handleAddClick() {
    if (inputText.trim() === "") {
      setError("Please enter a task!");
    } else {
      props.onAdd(inputText.trim());
      setInputText("");
      setError("");
    }
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Add your task..."
      />
      <button onClick={handleAddClick}>
        <span>Add</span>
      </button>
      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
    </div>
  );
}

export default InputArea;

