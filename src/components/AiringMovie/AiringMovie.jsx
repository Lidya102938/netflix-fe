import React from "react";
import Star from "../Star/Star";

const AiringMovie = ({ data }) => {
  return (
    <div className="airing-box">
      <img
        className="airing-images"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt=""
        width={"90px"}
        height={"85px"}
      />
      <div className="airing-text-container">
        <p className="airing-film-title">{data.original_title}</p>
        <p className="airing-text">{data.overview.slice(0, 60)}</p>
        <Star vote={data.vote_average} />
      </div>
    </div>
  );
};

export default AiringMovie;
