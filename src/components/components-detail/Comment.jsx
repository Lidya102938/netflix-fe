import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Comment = ({ data }) => {
  const [readMore, setReadMore] = useState("text-comment");
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="container-comment">
      <div className="header">
        <img
          src={`http://localhost:3001/image${data.image}`}
          alt=""
          className="img"
        />
        <div className="name">
          <h3>{data.fullName}</h3>
          <p>
            3 Days Ago <AiFillStar className="icon" /> 8.4 / 10
          </p>
        </div>
      </div>
      <div className={readMore}>
        <h2>{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.textComment }}></div>
      </div>
    </div>
  );
};

export default Comment;

// <p className="text" >
//         {isReadMore ? text.slice(0, 150) : text}
//         {text.length > 100 && (
//           <span onClick={toggleReadMore} className="read-or-hide">
//             {isReadMore ? "Read More" : "show less"}
//           </span>
//         )}
//       </p>
