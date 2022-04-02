import React from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./ListFilm.scss";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineRight, AiOutlineLeft, AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Star from "../Star/Star";
import { TvSeriesData } from "../../pages/TvSeries/TvSeriesData";

const ListFilm = props => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="list-film">
      <p className="title">{props.title || "Category"}</p>
      <Link to={"category"}>
        <SecondaryButton className="list-film-button">
          See More <HiOutlineArrowRight className="right-icons" />
        </SecondaryButton>
      </Link>
      <div className="list-film-carousel">
        <AiOutlineLeft className="left-icon" />
        <AiOutlineRight className="right-icon" />
        <div className="inner-carousel">
          <Slider {...settings}>
            {TvSeriesData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className={"info-item"}>
                    <div className="item-title">
                      <p>{props.title || "Spiderman No Way Home (2022)"}</p>
                      <Star />
                    </div>
                  </div>
                  <img
                    className="img"
                    src={item.Image}
                    alt=""
                    width={"250px"}
                    height={"330px"}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ListFilm;
