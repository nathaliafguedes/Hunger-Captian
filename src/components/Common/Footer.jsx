import React from "react";
import logoBlck from "../../assets/img/logo_blck.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="foot">
          <img src={logoBlck} class="logo_blck" alt="" />
          <p>
            Premium Quality food at the best and most affordable price. <br />{" "}
            We have a new offer every day for 365 days
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
