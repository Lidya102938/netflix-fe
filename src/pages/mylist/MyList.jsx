import React, { useState, useEffect } from "react";
import "./MyList.scss";
import Navbar from "../../components/navbar/Navbar";
import MyListFilm from "../../components/myListFilm/MyListFilm";
import Footer from "../../components/footer/Footer";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";
import decode_jwt from "jwt-decode";
import api from "../../config/api";
import Loading from "../../components/Atom/Loading";
import { animateScroll as scroll } from "react-scroll";

const MyList = () => {
  const [dataMyList, setDataMyList] = useState([]);
  const [page, setPage] = useState(1);
  const token = localStorage.getItem("token");
  const decode = decode_jwt(token);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  useEffect(() => {
    getAllMyList();
  }, [page]);

  const getAllMyList = async () => {
    const result = await api.getAllMyList(page - 1);
    if (result) {
      setDataMyList(result.data);
    }
  };
  return (
    <>
      <Navbar activeMyList={"active"} />
      {loading && <Loading />}
      <div className="mylist">
        <div className="mylist-content">
          <MainTitle>My List</MainTitle>
          <div className="my-list-data">
            {dataMyList.map((el) => (
              <MyListFilm
                page={page}
                key={el.id}
                data={el}
                userId={decode.id}
                myListId={el.id}
                setDataMyList={setDataMyList}
              />
            ))}
          </div>
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          setLoading={setLoading}
          scroll={scroll.scrollToTop}
        />
        <Footer />
      </div>
    </>
  );
};

export default MyList;
