import React from "react";
import "./SecondaryButton.scss";

const SecondaryButton = (props) => {
  return (
    <button className={props.className}>{props.children || "Button"}</button>
  );
};

export default SecondaryButton;
