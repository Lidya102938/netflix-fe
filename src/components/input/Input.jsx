import React from "react";
import "./Input.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Input = props => {
  return (
    <div className={props.inputClassName}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input"
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
};

export default Input;
