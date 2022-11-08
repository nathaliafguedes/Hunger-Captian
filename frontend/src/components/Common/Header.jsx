import React from "react";
import logo from '../../assets/img/logo.svg'
import tagline from '../../assets/img/motto.svg'
import backgroundImg from '../../assets/img/background.png'

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src={logo} class="logo" alt="" />
          <img src={tagline} class="tagline" alt="" />
          <img src={backgroundImg} class="background_img" alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
