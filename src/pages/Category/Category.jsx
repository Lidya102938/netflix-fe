import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Category.scss";
import { AiOutlineRight } from "react-icons/ai";
import Pagination from "../../components/pagination/Pagination";

const Category = props => {
  return (
    <div>
      <Navbar />
      <div className="all-category-container">
        <div className="all-category-history">
          <p>Home</p>
          <p>
            <AiOutlineRight className="icon-right" />
            Category
          </p>
          <p>
            <AiOutlineRight className="icon-right" />
            {props.category || "Nama Kategori"}
          </p>
        </div>
        <div className="all-category">
          <p className="all-category-title">{props.title || "Category"}</p>
          <div className="all-category-film">
            <img
              src="https://i.ibb.co/0cKyj3C/film.png"
              alt=""
              width={"140px"}
              height={"220px"}
            />
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
