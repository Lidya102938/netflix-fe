import "./detail.scss";
import React, { useEffect, useState } from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Video from "../../components/components-detail/Video";
import Casting from "../..//components/components-detail/Casting";
import Comment from "../../components/components-detail/Comment";
import TextEditor from "../../components/components-detail/TextEditor";
import Button from "../../components/components-detail/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Star from "../../components/components-detail/Star";
import api from "../../config/api";
import decode_jwt from "jwt-decode";
import Loading from "../../components/Atom/Loading";

const Detail = () => {
  const token = localStorage.getItem("token");
  const decode = decode_jwt(token);
  const [dataMovies, setDataMovies] = useState("");
  const [genres, setGenres] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const [idMovies, setIdMovies] = useState("");
  const [title, setTitle] = useState("");
  const [dataUser, setDataUser] = useState("");
  const [dataCasting, setDataCasting] = useState([]);
  const [dataTrailer, setdataTrailer] = useState([]);
  const [linkYt, setLinkYt] = useState("");
  const [tahun, setTahun] = useState("");
  const [isMyList, setIsMyList] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(dataMovies);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const moviesId = params.get("moviesId");
    const tvId = params.get("tvId");
    if (moviesId) {
      getMovies(moviesId);
    } else {
      getTv(tvId);
    }
    setIdMovies(moviesId);
    getCasting(moviesId);
    getTrailer(moviesId);
    getUser();
    getComment(moviesId);
    getOneMyList(moviesId);
  }, []);
  const getMovies = async (params) => {
    const result = await api.getDetail(params);
    if (result) {
      setDataMovies(result.data);
      setGenres(result.data.genres);
      setTahun(result.data.release_date.slice(0, 4));
    }
  };
  const getTv = async (params) => {
    const result = await api.getOneTv(params);
    if (result) {
      // setDataMovies(result.data);
      console.log(result.data);
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
      setDataCasting(result.data.cast.slice(0, 12));
    }
  };
  const getComment = async (filmId) => {
    const result = await api.getAllComment();
    if (result) {
      setDataComment(
        result.data.filter((el) => el.filmId === parseInt(filmId))
      );
    }
  };
  const getTrailer = async (id) => {
    const result = await api.getTrailer(id);
    if (result) {
      setdataTrailer(result.data.results);
      setLinkYt(result.data.results[0].key);
    }
  };

  const myListHandler = async () => {
    const data = {
      moviesId: dataMovies.id,
      image: dataMovies.backdrop_path,
      title: dataMovies.original_title,
      // genre: genres.map((el) => {
      //   return el.name;
      // }),
      date: dataMovies.release_date,
      overview: dataMovies.overview,
      rating: dataMovies.vote_average,
    };
    setLoading(true);
    const result = await api.createMyList(data, dataUser.id);
    if (result.length > 0) {
      setIsMyList(false);
    } else {
      setIsMyList(true);
      setLoading(false);
    }
  };

  const getOneMyList = async (id) => {
    const result = await api.getOneMyList(id);
    if (result.data.length > 0) {
      setIsMyList(false);
    } else {
      setIsMyList(true);
    }
  };

  const Hours = Math.floor(dataMovies.runtime / 60);
  const minutes = dataMovies.runtime % 60;
  // console.log();

  return (
    <>
      <Navbar />
      {loading && <Loading />}
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
            <p>{`${tahun} | ${Hours} hours ${minutes} minutes`}</p>
            <p>
              Starting : {dataCasting.slice(0, 3).map((el) => `${el.name}, `)}
            </p>
            <p>
              Genre :
              {genres.map((el) => {
                return <span key={el.id}> {el.name}, </span>;
              })}
            </p>
            <div className="action">
              <a
                href={`https://www.youtube.com/watch?v=${linkYt}`}
                target={"_blank"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>
                  <MdSlowMotionVideo className="icon" />
                  WATCH TRAILER
                </p>
              </a>
              {isMyList === true ? (
                <p className="aktif">
                  <BsFillBookmarkFill className="icon" />
                  SAVE TO MY LIST
                </p>
              ) : (
                <p onClick={myListHandler}>
                  <BsBookmark className="icon" />
                  SAVE TO MY LIST
                </p>
              )}
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
              {dataTrailer.slice(0, 3).map((item) => {
                return <Video key={item.id} data={item} />;
              })}
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
                setDataComment={setDataComment}
                userId={dataUser.id}
              />
            </div>
          </div>
          {/* end write and review */}
          {/* start comment */}
          <div className="detail-comment">
            {dataComment.map((el) => {
              return <Comment key={el.id} data={el} img={dataUser.image} />;
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
