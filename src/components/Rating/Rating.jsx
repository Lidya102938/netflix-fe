import React from "react";
import "./Rating.scss";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  return (
    <div className="rating">
      <h6>
        <span>
          <AiFillStar />
        </span>
        8.4 / 10
      </h6>
    </div>
  );
};

export default Rating;
