import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./TvSeries.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";
import api from "../../config/api";
import Card from "../../components/Molekul/card/Card";
import { Link } from "react-router-dom";

const TvSeries = () => {
  const [dataTvSeries, setDataTvSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTvSeries(page);
  }, [page]);
  const getTvSeries = async (page) => {
    const result = await api.getTvSeries(page);
    if (result) {
      setDataTvSeries(result.data);
    }
  };
  return (
    <>
      <Navbar activeTvSeries={"active"} />
      <div className="tv-series">
        <div className="tv-series-content">
          <MainTitle>Tv Series</MainTitle>
          <div className="tv-series-list">
            {dataTvSeries.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/detail?tvId=${item.id}&title=${item.original_name}`}
                >
                  <Card key={item.id} data={item} />
                </Link>
              );
            })}
          </div>
        </div>
        <Pagination page={page} setPage={setPage} />
        <Footer />
      </div>
    </>
  );
};

export default TvSeries;
