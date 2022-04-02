import React from "react";
import "./scss/button.scss";

const Button = ({ classButton, label }) => {
  return <button className={classButton}>{label}</button>;
};

export default Button;
