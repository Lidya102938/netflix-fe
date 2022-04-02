import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import "./DeleteList.scss";

const DeleteList = props => {
  return (
    <div className={props.disabledDelete || "delete-list"}>
      <button>
        <HiOutlineTrash /> Hapus dari my list
      </button>
    </div>
  );
};

export default DeleteList;
