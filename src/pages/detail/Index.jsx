import React, { useEffect, useState } from "react";
import "./detail.scss";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Video from "../../components/components-detail/Video";
import Casting from "../..//components/components-detail/Casting";
import Comment from "../../components/components-detail/Comment";
import TextEditor from "../../components/components-detail/TextEditor";
import Button from "../../components/components-detail/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import video1 from "../image/video1.png";
import video2 from "../image/video2.png";
import video3 from "../image/video3.png";
import Star from "../../components/components-detail/Star";
import api from "../../config/api";
import { getDatabase, onValue, push, ref } from "firebase/database";
import decode_jwt from "jwt-decode";

const Detail = () => {
  const db = getDatabase();
  const token = localStorage.getItem("token");
  const decode = decode_jwt(token);
  const [dataMovies, setDataMovies] = useState("");
  const [genres, setGenres] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const [idMovies, setIdMovies] = useState("");
  const [title, setTitle] = useState("");
  const [dataUser, setDataUser] = useState("");
  const [dataCasting, setDataCasting] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const reqParams = params.get("id");
    getMovies(reqParams);
    setIdMovies(reqParams);
    getCasting(reqParams);
    getUser();

    const endPoint = ref(db, `comment/${reqParams}`);
    onValue(endPoint, (snapshot) => {
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      setDataComment(data);
    });
  }, []);
  const getMovies = async (params) => {
    console.log(params);
    const result = await api.getDetail(params);
    if (result) {
      setDataMovies(result.data);
      setGenres(result.data.genres);
    }
  };

  const getUser = async () => {
    const result = await api.getOneUser(decode.id);
    if (result) {
      setDataUser(result.data);
    }
  };
  const getCasting = async (id) => {
    const result = await api.getCasting(id);
    if (result) {
      setDataCasting(result.data.cast);
    }
  };

  const myListHandler = () => {
    push(ref(db, `myList/${decode.id}`), {
      isMyList: true,
      image: dataMovies.backdrop_path,
      title: dataMovies.original_title,
      genre: dataMovies.genres,
      overview: dataMovies.overview,
      rating: dataMovies.vote_average,
    }).then(() => {
      console.log("succes");
    });
  };
  return (
    <>
      <Navbar />
      <div className="container-detail">
        <div className="bg-img">
          <img
            src={`https://image.tmdb.org/t/p/w500${dataMovies.backdrop_path}`}
            className="img"
          />
          <div className="overlay"></div>
        </div>
        {/*start Profil film */}
        <div className="detail-profil">
          <div className="detail-img">
            <img
              src={`https://image.tmdb.org/t/p/w500${dataMovies.poster_path}`}
              alt="img"
              className="img"
            />
          </div>
          <div className="detail-judul">
            <h1>{dataMovies.original_title}</h1>
            <p>2019 | 3 hours 2 minutes</p>
            <p>Starting : Roberst Downey Jr, Christ Evan, Mark Ruffalo</p>
            <p>
              Genre :
              {genres.map((el) => {
                return <span key={el.id}> {el.name}, </span>;
              })}
            </p>
            <div className="action">
              <p>
                <MdSlowMotionVideo className="icon" />
                WATCH TRAILER
              </p>
              <p onClick={myListHandler}>
                <BsBookmark className="icon" />
                SAVE TO MY LIST
              </p>
            </div>
          </div>
        </div>
        {/*end Profil film */}
        <div className="content-detail">
          {/* Start description */}
          <div className="description">
            <div className="text-description">
              <h1>Description</h1>
              <p>{dataMovies.overview}</p>
            </div>

            <div className="rating-description">
              <p className="rating-text">Rating</p>
              <p className="rating-number">
                <AiFillStar className="icon" />
                {dataMovies.vote_average} / 10
              </p>
            </div>
          </div>
          {/* end description */}

          {/* start trailer */}
          <div className="videos-trailer">
            <h1>Videos & Trailer</h1>
            <div className="videos">
              <Video img={video1} />
              <Video img={video2} />
              <Video img={video3} />
            </div>
          </div>
          {/* end trailer */}

          {/* start Casting */}
          <div className="detail-casting">
            <h1>Casting</h1>
            <div className="castings">
              {dataCasting.map((el) => {
                return <Casting key={el.id} data={el} />;
              })}
            </div>
          </div>
          {/* end Casting */}
          {/* start write and review */}
          <div className="container-write">
            <h1>Write Your Review</h1>
            <div className="write-rating">
              <h3>Rating</h3>
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="title-write">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Write your title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="write-review">
              <h3>Review</h3>
              <TextEditor
                id={decode.id}
                idMovies={idMovies}
                title={title}
                data={dataUser}
              />
            </div>
          </div>
          {/* end write and review */}
          {/* start comment */}
          <div className="detail-comment">
            {dataComment.map((el) => {
              return <Comment data={el.data} />;
            })}

            <Button label={"Load More"} classButton={"primary"} />
          </div>
          {/* end comment */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Detail;
