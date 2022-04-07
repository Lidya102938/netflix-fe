import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import NavbarDropDown from "./NavbarDropDown";
import decode from "jwt-decode";
import API from "../../config/api";

const Navbar = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [dataUser, setDataUser] = useState("");

  const token = localStorage.getItem("token");
  useEffect(async () => {
    if (token) {
      setIsLogin(true);
      const dataToken = decode(token);
      const result = await API.getOneUser(dataToken.id);
      if (result) {
        setDataUser(result.data);
      }
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <h1 className="logo">Neetflx Review</h1>
        <ul>
          <Link className={classNames("Link", props.activeHome)} to="/">
            <li>Home</li>
          </Link>
          <Link
            className={classNames("Link", props.activeTvSeries)}
            to="/tvseries"
          >
            <li>Tv Series</li>
          </Link>

          <Link
            className={classNames("Link", props.activeAnimation)}
            to="/animation"
          >
            <li>Animation</li>
          </Link>
          <Link className={classNames("Link", props.activeMyList)} to="/mylist">
            <li>My List</li>
          </Link>
          <Link
            className={classNames("Link", props.activeReviewed)}
            to="/reviewed"
          >
            <li>Reviewed</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-search">
        <Input
          inputClassName={"inputNavbar"}
          type="text"
          placeholder="Search"
        />
        {isLogin ? (
          <NavbarDropDown
            className={props.className}
            fullname={dataUser.fullName}
            image={`http://localhost:3001/image${dataUser.image}`}
          />
        ) : (
          <ul>
            <Link className="loginSignupNav" to="/signup">
              <li>Sign Up</li>
            </Link>
            <Link className="loginSignupNav" to="/login">
              <li>Login</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
