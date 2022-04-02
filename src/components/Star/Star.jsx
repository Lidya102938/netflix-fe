import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Star.scss";

const Star = (props) => {
  return (
    <p className="item-start">
      <AiFillStar className="star-icons" /> {props.start || "0.0"}
    </p>
  );
};

export default Star;
