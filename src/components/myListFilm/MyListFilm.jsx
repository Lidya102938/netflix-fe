import React from "react";
import "./MyListFilm.scss";
import DeleteList from "../deleteList/DeleteList";
import Rating from "../Rating/Rating";
import { getDatabase, ref, update, remove } from "firebase/database";

const MyListFilm = ({ data, id, id_user }) => {
  const db = getDatabase();

  const disabledDelete = () => {
    update(ref(db, `myList/${id_user}/${id}`), {
      isMyList: false,
    }).then(() => {
      console.log("succes");
      remove(ref(db, `myList/${id_user}/${id}`));
    });
  };
  return (
    <div className="mylist-list">
      <div className="mylist-img">
        <img src={`https://image.tmdb.org/t/p/w500${data.image}`} alt="" />
      </div>
      <div className="mylist-detail">
        <div className="mylist-info">
          <h2>{data.title}</h2>
          <ul>
            <li>2019</li>
            <li>|</li>
            <li>3 hours 2 minutes </li>
            <li>
              Genre :{" "}
              {data.genre.map((el) => {
                return `${el.name}, `;
              })}
            </li>
            <li>Staring : Roberst Downey Jr, Chris Evan, Mark Rufallo</li>
          </ul>
          <p>{data.overview}</p>
          <div className="mylist-rating">
            <Rating data={data.rating} />
            <DeleteList disabledDelete={disabledDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListFilm;
