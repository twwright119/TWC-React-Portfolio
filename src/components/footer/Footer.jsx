import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer_logo">
        &lt;The Wright Coder&gt;
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/thomas-wright-25778324a/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/twwright119">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCdj5tIxPSFhvsEIegNPwD-w">
          <GrYoutube />
        </a>
        <a href="https://twitter.com/TheWrightCoder">
          <AiFillTwitterCircle />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2022 The Wright Coder. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
