import React, { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import { fetchFromLocalStorage } from "../reducks/cart/operations";
import yellowBrush from "../assets/img/yellow-brush.png";
import Footer from "../components/Common/Footer";
import Reviews from "../components/Popup/Reviews";
import WriteReviews from "../components/Popup/WriteReviews";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.list);
  const [category, setCategory] = useState("");
  const subTotal = useSelector((state) => state.carts.subtotal);
  const [selectedItemId, setSelectedItemId] = useState()

  const handleClick = (no) => {
    if (no === 1) {
      setCategory("hot");
    } else if (no === 2) {
      setCategory("cold");
    } else if (no === 3) {
      setCategory("bagel");
    } else {
      setCategory("");
    }
  };
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  useEffect(() => {
    dispatch(fetchItems(category));
  }, [dispatch, category]);

  return (
    <>
      <Header />
      {showReview ? (
        <Reviews
          setShowReview={setShowReview}
          selectedItemId={selectedItemId}
        />
      ) : null}
      {showWriteReview ? (
        <WriteReviews
          setShowWriteReview={setShowWriteReview}
          selectedItemId={selectedItemId}
        />
      ) : null}

      <main>
        <div class="popular-recipes">
          <h1>Our Most Popular Recipes</h1>
          <img src={yellowBrush} alt="yellow-brush" />
          <p>
            Try our Most Delicious food and it usually take minutes to deliver!
          </p>
        </div>
        <div class="buttons">
          <p onClick={() => handleClick("")}>ALL</p>
          <p onClick={() => handleClick(1)}>HOT</p>
          <p onClick={() => handleClick(2)}>COLD</p>
          <p onClick={() => handleClick(3)}>BAGEL</p>
        </div>
        <div class="item-container">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <Item
                key={item.id}
                item={item}
                setShowWriteReview={setShowWriteReview}
                setShowReview={setShowReview}
                setSelectedItemId={setSelectedItemId}
              />
            ))}
        </div>
      </main>
      {subTotal !== 0 ? <h1>Subtotal : ${subTotal.toFixed(2)}</h1> : null}
      <div className="cart-link">
        <Link to="/cart">Check your cart</Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
