import React from "react";
import "./Reviewed.scss";
import Navbar from "../../components/navbar/Navbar";
import MyListFilm from "../../components/myListFilm/MyListFilm";
import Pagination from "../../components/pagination/Pagination";
import Footer from "../../components/footer/Footer";
import MainTitle from "../../components/MainTitle/MainTitle";

const MyList = () => {
  return (
    <>
      <Navbar activeReviewed={"active"} />
      <div className="reviewed">
        <div className="reviewed-content">
          <MainTitle>Reviewed</MainTitle>
          <div className="reviewed-data">
            <MyListFilm disabledDelete={"disabledDelete"} />
            <MyListFilm disabledDelete={"disabledDelete"} />
            <MyListFilm disabledDelete={"disabledDelete"} />
            <MyListFilm disabledDelete={"disabledDelete"} />
            <MyListFilm disabledDelete={"disabledDelete"} />
          </div>
        </div>
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default MyList;
