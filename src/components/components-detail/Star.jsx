import React, { useState } from "react";
import "./scss/star.scss";
import ReactStars from "react-rating-stars-component";

const Star = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={10}
      onChange={ratingChanged}
      size={60}
      activeColor="#ffd700"
    />
  );
};

export default Star;
