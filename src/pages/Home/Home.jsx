import React, { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import AiringMovie from "../../components/AiringMovie/AiringMovie";
import ListFilm from "../../components/ListFilm/ListFilm";
import Footer from "../../components/footer/Footer";
import Slider from "react-slick";
import api from "../../config/api";
import { Link } from "react-router-dom";

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

  const [dataTop, setDataTop] = useState([]);
  const [noData, setNoData] = useState(true);

  useEffect(() => {
    getPopular();

    if (dataTop.length > 0) {
      setNoData(false);
    } else {
      setNoData(true);
    }
  }, []);

  const getPopular = async () => {
    const result = await api.getTop();
    if (result) {
      setDataTop(result.data.slice(0, 4));
    }
  };
  return (
    <>
      <Navbar activeHome={"active"} />
      <div className="home-container">
        <div className="landingPages">
          <div className="scrolling-film-container">
            {noData ? (
              <div
                style={{
                  width: "720px",
                  height: "460px",
                  backgroundColor: "grey",
                }}
              ></div>
            ) : (
              <Slider {...settings}>
                {dataTop.map((data) => {
                  return (
                    <img
                      key={data.id}
                      src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                      alt=""
                      width={"720px"}
                      height={"460px"}
                    />
                  );
                })}
              </Slider>
            )}
          </div>
          <div className="airing-container">
            <p className="airing-title">Top Airing Movie</p>
            {dataTop.map((item) => {
              return (
                <Link
                  to={`detail?id=${item.id}&${item.original_title}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <AiringMovie key={item.id} data={item} />
                </Link>
              );
            })}
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
