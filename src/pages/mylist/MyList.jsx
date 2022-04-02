import React from "react";
import "./MyList.scss";
import Navbar from "../../components/navbar/Navbar";
import MyListFilm from "../../components/myListFilm/MyListFilm";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "../../components/footer/Footer";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";

const MyList = () => {
  return (
    <>
      <Navbar activeMyList={"active"} />
      <div className="mylist">
        <div className="mylist-content">
          <MainTitle>My List</MainTitle>
          <div className="my-list-data">
            <MyListFilm />
            <MyListFilm />
            <MyListFilm />
            <MyListFilm />
            <MyListFilm />
          </div>
        </div>
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default MyList;
