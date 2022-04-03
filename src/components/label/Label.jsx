import React from "react";
import "./Label.scss";

const Label = (props) => {
  return (
    <div className="label">
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};

export default Label;
