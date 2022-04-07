import React, { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import AiringMovie from "../../components/AiringMovie/AiringMovie";
import ListFilm from "../../components/ListFilm/ListFilm";
import Footer from "../../components/footer/Footer";
import Slider from "react-slick";
import api from "../../config/api";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar activeHome={"active"} />
      <div className="home-container">
        <div className="landingPages">
          <div className="scrolling-film-container">
            <Slider {...settings}>
              <img
                src="https://i.ibb.co/0cKyj3C/film.png"
                alt=""
                width={"720px"}
                height={"460px"}
              />
              <img
                src="https://i.ibb.co/0cKyj3C/film.png"
                alt=""
                width={"720px"}
                height={"460px"}
              />
              <img
                src="https://i.ibb.co/0cKyj3C/film.png"
                alt=""
                width={"720px"}
                height={"460px"}
              />
              <img
                src="https://i.ibb.co/0cKyj3C/film.png"
                alt=""
                width={"720px"}
                height={"460px"}
              />
            </Slider>
          </div>
          <div className="airing-container">
            <p className="airing-title">Top Airing Movie</p>
            <AiringMovie />
            <AiringMovie />
            <AiringMovie />
            <AiringMovie />
          </div>
        </div>
        <div className="listFilm">
          <ListFilm genre="Action" genreId={28} />
          <ListFilm genre="Adventure" genreId={12} />
          <ListFilm genre="Comedy" genreId={35} />
          <ListFilm genre="Drama" genreId={18} />
          <ListFilm genre="Horor" genreId={27} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
