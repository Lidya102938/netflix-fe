import React, { useState, useEffect } from "react";
import "./MyList.scss";
import Navbar from "../../components/navbar/Navbar";
import MyListFilm from "../../components/myListFilm/MyListFilm";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "../../components/footer/Footer";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";
import { getDatabase, limitToFirst, onValue, ref } from "firebase/database";
import decode_jwt from "jwt-decode";

const MyList = () => {
  const db = getDatabase();
  const [dataMyList, setDataMyList] = useState([]);
  const token = localStorage.getItem("token");
  const decode = decode_jwt(token);

  useEffect(() => {
    const endPoint = ref(db, `myList/${decode.id}`);
    onValue(endPoint, (snapshot) => {
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      setDataMyList(data);
    });
  }, []);
  return (
    <>
      <Navbar activeMyList={"active"} />
      <div className="mylist">
        <div className="mylist-content">
          <MainTitle>My List</MainTitle>
          <div className="my-list-data">
            {dataMyList.map(
              (el) =>
                el.data.isMyList === true && (
                  <MyListFilm
                    key={el.id}
                    data={el.data}
                    id_user={decode.id}
                    id={el.id}
                  />
                )
            )}
          </div>
        </div>
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default MyList;
