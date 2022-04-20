import "./card.scss";

import React from "react";
import Star from "../../Star/Star";

const Card = ({ data, tahun }) => {
  return (
    <div className="container-card">
      <div className={"info-item"}>
        <div className="item-title">
          <p>
            {data.original_title || data.original_name} ({tahun})
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
