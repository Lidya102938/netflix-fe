import React from "react";
import "./MyListFilm.scss";
import DeleteList from "../deleteList/DeleteList";
import Rating from "../Rating/Rating";
import api from "../../config/api";

const MyListFilm = ({ data, myListId, setDataMyList, page }) => {
  const disabledDelete = async () => {
    const result = await api.deleteMyList(page, myListId);
    setDataMyList(result.data);
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
              {/* Genre :{data.genre.map((el) => {
                return `${el.name}, `;
              }) } */}
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
