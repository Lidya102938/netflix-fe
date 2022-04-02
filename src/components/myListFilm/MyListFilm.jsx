import React from "react";
import DeleteList from "../deleteList/DeleteList";
import Rating from "../Rating/Rating";
import "./MyListFilm.scss";

const MyListFilm = props => {
  return (
    <div className="mylist-list">
      <div className="mylist-img">
        <img src="https://i.ibb.co/FXm45LL/film.png" alt="" />
      </div>
      <div className="mylist-detail">
        <div className="mylist-info">
          <h2>Avenger end game</h2>
          <ul>
            <li>2019</li>
            <li>|</li>
            <li>3 hours 2 minutes </li>
            <li>Genre : Action</li>
            <li>Staring : Roberst Downey Jr, Chris Evan, Mark Rufallo</li>
          </ul>
          <p>
            After the devastating events of Avengers: Infinity War (2018), the
            universe is in ruins. With the help of remaining allies, the
            Avengers assemble once more in order to reverse Thanos' actions and
            restore balance to the universe.
          </p>
          <div className="mylist-rating">
            <Rating />
            <DeleteList disabledDelete={props.disabledDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListFilm;
