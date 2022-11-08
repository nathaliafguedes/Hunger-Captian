import yellowBrush from "../assets/img/yellow-brush.png";

import Header from "../components/Common/Header";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import Footer from "../components/Common/Footer";

function Cart() {
  const carts = useSelector((state) => state.carts.list);
  const subtotal = useSelector((state) => state.carts.subtotal);
  return (
    <>
      <Header />
      <main>
        <div class="cart">
          <h1>Cart</h1>
          <img src={yellowBrush} alt="yellow brush" />
        </div>
        <div class="cart-container">
          {carts &&
            carts.length > 0 &&
            carts.map((cart) => <CartItem cart={cart} />)}
        </div>
        <h1>Subtotal ${subtotal.toFixed(2)}</h1>
      </main>
      <div  className="home-link">
        <Link to="/">Back to Home</Link>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
