import React from "react";
import "./Input.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Input = (props) => {
  const { inputClassName, type, placeholder, register, value } = props;
  return (
    <div className={inputClassName}>
      <input
        {...register}
        type={type}
        value={value}
        placeholder={placeholder}
        className="input"
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
};

export default Input;
