import React, { useState } from "react";
import closeBtn from "../../assets/img/x.svg";
import heartBtn from "../../assets/img/heart.svg";
import heartRed from "../../assets/img/awesome-heart.svg";
import dislikeBtn from "../../assets/img/dislike.svg";
import API from "../../API";

const WriteReviews = ({ setShowWriteReview, selectedItemId }) => {
  const api = new API();
  const [like_count, setLike_count] = useState(1);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const handleClick = (value) => {
    if (value === "Good") {
      setLike_count(5);
    } else if (value === "vgood") {
      setLike_count(10);
    } else if (value === "excellent") {
      setLike_count(15);
    } else {
      setLike_count(1);
    }
  };
  const handleDispatch = () => {
    let item = selectedItemId;
    api.writeReview(item, name, body, like_count).then((res) => {
      alert("Your review has been submitted");
      setName("");
      setBody("");
      setLike_count(1);
      setShowWriteReview(false);
    });
  };

  return (
    <>
      <section class="popup">
        <div class="innerpopup">
          <div class="popup-content">
            <img
              onClick={() => setShowWriteReview(false)}
              src={closeBtn}
              class="close-button"
              alt=""
            />
            <h2> Write Review</h2>
            <p>Choose your thought</p>
            <div class="category-btn">
              <div class="btn">
                <div class="img">
                  <img src={heartBtn} alt="" />
                </div>
                <div class="content" onClick={() => handleClick("Good")}>
                  <p>Good</p>
                  <p>(5)</p>
                </div>
              </div>
              <div class="btn">
                <div class="img">
                  <img src={heartBtn} alt="" />
                </div>
                <div class="content" onClick={() => handleClick("vgood")}>
                  <p>Very Good</p>
                  <p>(15)</p>
                </div>
              </div>
              <div class="btn">
                <div class="img">
                  <img src={heartRed} alt="" />
                </div>
                <div class="content" onClick={() => handleClick("excellent")}>
                  <p>Excellent</p>
                  <p>(20)</p>
                </div>
              </div>
              <div class="btn">
                <div class="img">
                  <img src={dislikeBtn} alt="" />
                </div>
                <div class="content" onClick={() => handleClick("bad")}>
                  <p>Not Good</p>
                  <p>(1)</p>
                </div>
              </div>
            </div>
            <div class="input-content">
              <input
                type="text"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
              {console.log(name)}
              <br />
              <input
                type="text"
                placeholder="Enter your Feedback/Review"
                id="review"
                onChange={(e) => setBody(e.target.value)}
              />
              <br />
              <div class="submit-btn" onClick={handleDispatch}>
                <input type="submit" class="submit" value="Send review" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WriteReviews;
