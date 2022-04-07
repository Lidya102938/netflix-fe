import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Category.scss";
import { AiOutlineRight } from "react-icons/ai";
import Pagination from "../../components/pagination/Pagination";
import { Link, useParams } from "react-router-dom";
import api from "../../config/api";

const Category = () => {
  const { category } = useParams();
  const genreId = localStorage.getItem("genreId");
  const [dataMovies, setDataMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    const result = await api.getMovies(page);
    setDataMovies(
      result.data.filter((el) => el.genre_ids.includes(parseInt(genreId)))
    );
  };
  return (
    <div>
      <Navbar />
      <div className="all-category-container">
        <div className="all-category-history">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <p>
            <AiOutlineRight className="icon-right" />
            Category
          </p>
          <p>
            <AiOutlineRight className="icon-right" />
            {category || "Nama Kategori"}
          </p>
        </div>

        <div className="all-category">
          <p className="all-category-title">{category || "Category"}</p>
          <div className="all-category-film">
            {dataMovies.map((item) => {
              return (
                <Link to={`/detail?judul=${item.original_title}&id=${item.id}`}>
                  <img
                    key={item.id}
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt=""
                    width={"140px"}
                    height={"220px"}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
