import React from "react";
import ActionButton from "./ActionButton";

const InputField = ({ id, label, value, onChange, step, min }) => {
  const formattedValue = value === "" ? "" : parseFloat(value).toFixed(2);

  const handleIncrease = () => {
    onChange({
      target: { value: (parseFloat(value) + parseFloat(step)).toFixed(2) },
    });
  };

  const handleDecrease = () => {
    onChange({
      target: { value: (parseFloat(value) - parseFloat(step)).toFixed(2) },
    });
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="input-field-container">
        <ActionButton label="-" onClick={handleDecrease} className="button" />
        <input
          type="number"
          id={id}
          step={step}
          min={min}
          value={formattedValue}
          onChange={onChange}
        />
        <ActionButton label="+" onClick={handleIncrease} className="button" />
      </div>
    </div>
  );
};

export default InputField;
