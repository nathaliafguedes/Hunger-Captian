import React from "react";
import cartBtn from "../assets/img/cart-btn.svg";
import burgerImg from "../assets/img/burger.png";
import { increaseCart, decreaseCart } from "../reducks/cart/operations";
import { useDispatch } from "react-redux";
const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const clickPlusCart = () => {
    dispatch(increaseCart(cart.item));
    // setTemp(!temp);
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cart.item));
    // setTemp(!temp);
  };
  console.log(cart);

  return (
    <>
      <div class="item">
        <div class="item-image">
          <img
            src={`https://res.cloudinary.com/dv4r9syat/${cart.item.img}`}
            alt="Chicken Submarine Burger"
          />
        </div>
        <div class="item-info">
          <div class="name">
            <h2>{cart.item.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              dolores libero repellat error aspernatur amet cumque unde laborum
              assumenda quas? Voluptas, consectetur. Amet inventore harum
              expedita cupiditate, pariatur voluptates accusantium.
            </p>
          </div>
          <div class="qty-price">
            <div class="qty">
              <div onClick={clickMinusCart} class="decrement">
                -
              </div>
              <p>{cart.selected_count}</p>
              <div onClick={clickPlusCart} class="increment">
                +
              </div>
            </div>
            <h4>${cart.item.price}</h4>
          </div>
        </div>
          </div>
    </>
  );
};
export default CartItem;
