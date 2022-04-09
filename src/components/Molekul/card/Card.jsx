import "./card.scss";

import React from "react";
import Star from "../../Star/Star";

const Card = ({ data }) => {
  return (
    <div className="container-card">
      <div className={"info-item"}>
        <div className="item-title">
          <p>
            {data.original_title || "Spiderman No Way Home (2022)"} (
            {data.release_date.slice(0, 4)})
          </p>
          <Star vote={data.vote_average} />
        </div>
      </div>
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt=""
        width={"250px"}
        height={"330px"}
      />
    </div>
  );
};

export default Card;
