import React from "react";
import burgerImg from "../../assets/img/burger.png";
import likeIcon from "../../assets/img/like-icon.svg";
import cartBtn from "../../assets/img/cart-btn.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  decreaseCart,
  increaseCart,
} from "../../reducks/cart/operations";
import { useEffect, useState } from "react";

const Item = ({
  setShowWriteReview,
  setShowReview,
  item,
  setSelectedItemId,
}) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.list);
  const [selected_count, setSelected] = useState(0);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    if (carts[item.id] && carts[item.id].selected_count) {
      setSelected(carts[item.id].selected_count);
    } else setSelected(0);
    console.log(carts[item.id]);
  }, [temp]);
  const addToCart = () => {
    dispatch(addCart(item));
    setTemp(!temp);
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
    setTemp(!temp);
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
    setTemp(!temp);
  };

  const handleClick = () => {
    setShowWriteReview(true);
    setSelectedItemId(item.id);
  };
  const handleRev = () => {
    setShowReview(true);
    setSelectedItemId(item.id);
  };
  return (
    <>
      <div class="item">
        <div class="item-image">
          <img
            src={`https://res.cloudinary.com/dv4r9syat/${item.img}`}
            alt="burger"
          />
        </div>
        <div class="item-info">
          <div class="like">
            <img src={likeIcon} alt="like-icon" />
            <h3>{item.total_like_count}</h3>
          </div>
          <div class="name">
            <p>{item.name}</p>
          </div>
          <div class="item-review">
            <p onClick={handleClick}>Write Review</p>
            <p onClick={handleRev}>Check Review</p>
          </div>
          <div class="item-price">
            {selected_count === 0 ? (
              <img onClick={() => addToCart()} src={cartBtn} alt="cart-btn" />
            ) : (
              <>
                <div className="cart-container">
                  <div class="qty">
                    <div class="decrement" onClick={clickMinusCart}>
                      -
                    </div>
                    <p>{selected_count}</p>
                    <div onClick={clickPlusCart} class="increment">
                      +
                    </div>
                  </div>
                </div>
              </>
            )}
            <p> ${item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
