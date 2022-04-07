import React from "react";
import "./Pagination.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ setPage, page }) => {
  return (
    <div className="pagination">
      <IoIosArrowBack
        className="pagination-icon"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      />
      <p>{page}</p>
      <IoIosArrowForward
        className="pagination-icon"
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
};

export default Pagination;
