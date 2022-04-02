import React from "react";
import "./Pagination.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="pagination">
      <IoIosArrowBack className="pagination-icon" />
      <p>1</p>
      <IoIosArrowForward className="pagination-icon" />
    </div>
  );
};

export default Pagination;
