import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./TvSeries.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TvSeriesData } from "./TvSeriesData";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";

const TvSeries = () => {
  return (
    <>
      <Navbar activeTvSeries={"active"} />
      <div className="tv-series">
        <div className="tv-series-content">
          <MainTitle>Tv Series</MainTitle>
          <div className="tv-series-list">
            {TvSeriesData.map((item, index) => {
              return <img src={item.Image} alt="err" />;
            })}
          </div>
        </div>
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default TvSeries;
