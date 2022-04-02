import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Animation.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimationData } from "./AnimationData";
import MainTitle from "../../components/MainTitle/MainTitle";
import Pagination from "../../components/pagination/Pagination";

const Animation = () => {
  return (
    <>
      <Navbar activeAnimation={"active"} />
      <div className="animation">
        <div className="animation-content">
          <MainTitle>Animation</MainTitle>
          <div className="animation-list">
            {AnimationData.map((item, index) => {
              return <img src={item.Image} alt="err" />;
            })}
          </div>
        </div>
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default Animation;
