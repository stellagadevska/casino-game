import React from "react";
import "./NumberButton.css";

const NumberButton = ({ number, isSelected, onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`number-button ${isSelected ? "selected" : ""}`}
      disabled={isDisabled}
    >
      {number}
    </button>
  );
};

export default NumberButton;
