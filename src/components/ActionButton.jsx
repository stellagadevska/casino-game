import React from "react";
import "./ActionButton.css"

const ActionButton = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;
