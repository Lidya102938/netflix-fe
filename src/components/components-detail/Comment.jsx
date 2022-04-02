import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Comment = ({ text }) => {
  const [readMore, setReadMore] = useState("text-comment");
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="container-comment">
      <div className="header">
        <div className="img"></div>
        <div className="name">
          <h3>Jeane De Arc</h3>
          <p>
            3 Days Ago <AiFillStar className="icon" /> 8.4 / 10
          </p>
        </div>
      </div>
      <div className={readMore}>
        <h2>Time to play the (end)game</h2>
        <p className="text">
          {isReadMore ? text.slice(0, 150) : text}
          {text.length > 100 && (
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "Read More" : "show less"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Comment;
