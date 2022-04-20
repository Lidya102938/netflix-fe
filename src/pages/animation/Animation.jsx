import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Animation.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";
import api from "../../config/api";
import { Link } from "react-router-dom";
import Card from "../../components/Molekul/card/Card";

const Animation = () => {
  const [dataAnimation, setDataAnimation] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAnimation(page);
  }, [page]);

  const getAnimation = async () => {
    const result = await api.getMovies(16, page);
    if (result) {
      setDataAnimation(result.data);
    }
  };
  return (
    <>
      <Navbar activeAnimation={"active"} />
      <div className="animation">
        <div className="animation-content">
          <MainTitle>Animation</MainTitle>
          <div className="animation-list">
            {dataAnimation.map((item) => {
              return (
                <Link
                  to={`/detail?moviesId=${item.id}&title${item.original_title}`}
                >
                  <Card data={item} tahun={item.release_date.slice(0, 4)} />
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

export default Animation;
