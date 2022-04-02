import React from "react";
import "./CheckButton.scss";

const CheckButton = () => {
  return (
    <label class="container">
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  );
};

export default CheckButton;
