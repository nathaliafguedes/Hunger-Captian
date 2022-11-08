import React, { useState, useEffect } from "react";
import closeBtn from "../../assets/img/x.svg";
import heartBtn from "../../assets/img/heart.svg";
import heartRed from "../../assets/img/awesome-heart.svg";
import dislikeBtn from "../../assets/img/dislike.svg";
import API from "../../API";

const Reviews = ({ setShowReview, selectedItemId }) => {
  const api = new API();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    let id = selectedItemId;
    api.getReviews(id).then((res) => {
      setReviews(res);
      console.log(res);
    });
  }, []);
  return (
    <>
      <section class="popup">
        <div class="innerpopup">
          <div class="popup-content">
            <img
              onClick={() => setShowReview(false)}
              src={closeBtn}
              class="close-button"
              alt=""
            />
            <h2> Check Review</h2>
            {/* <p>Choose your thought</p> */}
            {/* <div class="category-btn">
              <div class="btn">
                <div class="img">
                  <img src={heartBtn} alt="" />
                </div>
                <div class="content">
                  <p>Good</p>
                  <p>(5)</p>
                </div>
              </div>
              <div class="btn">
                <div class="img">
                  <img src={heartBtn} alt="" />
                </div>
                <div class="content">
                  <p>Very Good</p>
                  <p>(15)</p>
                </div>
              </div>
              <div class="btn">
                <div class="img">
                  <img src={heartRed} alt="" />
                </div>
                <div class="content">
                  <p>Excellent</p>
                  <p>(20)</p>
                </div>
              </div>
              <div class="btn">
                <div class="img">
                  <img src={dislikeBtn} alt="" />
                </div>
                <div class="content">
                  <p>Not Good</p>
                  <p>(1)</p>
                </div>
              </div>
            </div> */}
            <div class="review-content">
              {reviews &&
                reviews.length > 0 &&
                reviews.map((review) => {
                  return (
                    <>
                      <h2>{review.name}</h2>
                      <p>{review.body}</p>
                      <hr />
                    </>
                  );
                })}

              {/* <h2>Michael</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur ex rem, quasi, veritatis voluptate aperiam eligendi
                beatae velit a dolorum necessitatibus amet maiores nihil, sint
                nulla minima! Deleniti, placeat autem!
              </p>
              <hr /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
