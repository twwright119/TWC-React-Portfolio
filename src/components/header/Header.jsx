import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/frontprofile.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h4>&lt;The Wright Coder&gt;</h4>
        <div>
          <h1 className="typewriting">Thomas Wright</h1>
        </div>
        <h5 className="text-light">A Fullstack Developer</h5>
        <CTA />

        <div className="header_grid">
          <div className="socials_div">
            <HeaderSocials />
          </div>

          <div className="me">
            <img src={Me} alt="me" className="front-headshot" />
          </div>
          <div className="scroll_div">
            <a href="#contact" className="scroll_down">
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
