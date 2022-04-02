import React from "react";
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

import img1 from "../image/bg1.png";
import img2 from "../image/bg2.png";
import video1 from "../image/video1.png";
import video2 from "../image/video2.png";
import video3 from "../image/video3.png";
import Star from "../../components/components-detail/Star";

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className="container-detail">
        <div className="bg-img">
          <img src={img1} className="img" />
          <div className="overlay"></div>
        </div>
        {/*start Profil film */}
        <div className="detail-profil">
          <div className="detail-img">
            <img src={img2} alt="img" className="img" />
          </div>
          <div className="detail-judul">
            <h1>Avengers Endgame</h1>
            <p>2019 | 3 hours 2 minutes</p>
            <p>Starting : Roberst Downey Jr, Christ Evan, Mark Ruffalo</p>
            <p>Genre : Action</p>
            <div className="action">
              <p>
                <MdSlowMotionVideo className="icon" />
                WATCH TRAILER
              </p>
              <p>
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates quis tempora voluptatum corporis ullam perferendis,
                hic maiores dicta doloribus explicabo in magni assumenda eius.
                Repellat quidem est voluptates non quos.
              </p>
            </div>

            <div className="rating-description">
              <p className="rating-text">Rating</p>
              <p className="rating-number">
                <AiFillStar className="icon" />
                8.4 / 10
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
              <Casting />
              <Casting />
              <Casting />
              <Casting />
              <Casting />
              <Casting />
              <Casting />
              <Casting />
              <Casting />
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
              <input type="text" id="title" placeholder="Write your title" />
            </div>
            <div className="write-review">
              <h3>Review</h3>
              <TextEditor />
            </div>
          </div>
          {/* end write and review */}
          {/* start comment */}
          <div className="detail-comment">
            <Comment text="I usually do not watch movies twice in such a short amount of time. But after I did the Double Feature (at the Midnight premiere) with Infinity War almost 2 weeks ago, I re-watched Endgame yesterday and it was as amazing as my first impression of it was! And while I will not spoil anything about Endgame, I will talk about things Infinity War! So if you have not seen  yet, do not blame me for anything revealed hereMy summary is a pop culture reference and there are quite a few in the Marvel movies, hinting at other franchises (Alien got name checked for  example in Infinity War and even 'copied' or 'homaged' if you will and there are a few in Endgame too). But those little digs are not too important, they are just nice touches for those who know them. Having an understanding of the MCU as a whole, from Phase 1 to now Phase 3 is way more important. And as someone who is not too familiar with the comics myself, I can tell you  knowing the movies is enough to enjoy the franchiseStill you can google the other stuff or even make your own conclusions. Now that is a lot of foreword and I haven't even gotten one word about Endgame. But as I said above, no spoilers here. What we do know (from the trailers) is the beginning. But whatever we saw and thought we knew - what happens not even half an hour into the movie, will rattle you. Now what?" />
            <Comment text="I haven't even gotten one word about Endgame. But as I said above, no spoilers here." />
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
