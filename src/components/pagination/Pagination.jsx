import React from "react";
import "./Pagination.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ setPage, page, setLoading, scroll }) => {
  return (
    <div className="pagination">
      <IoIosArrowBack
        className="pagination-icon"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
            setLoading(true);
            scroll();

            setTimeout(() => {
              setLoading(false);
            }, 500);
          }
        }}
      />
      <p>{page}</p>
      <IoIosArrowForward
        className="pagination-icon"
        onClick={() => {
          setPage(page + 1);
          setLoading(true);
          scroll();

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      />
    </div>
  );
};

export default Pagination;
