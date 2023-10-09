import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./experience.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiWordpress } from "react-icons/si";

const IconSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 50,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div>
        <SiReact size={75} className="slider_icon" />
        <p>React</p>
      </div>
      <div>
        <SiJavascript size={75} className="slider_icon" />
        <p>JavaScript</p>
      </div>
      <div>
        <SiHtml5 size={75} className="slider_icon" />
        <p>HTML</p>
      </div>
      <div>
        <SiCss3 size={75} className="slider_icon" />
        <p>CSS</p>
      </div>
      <div>
        <SiBootstrap size={75} className="slider_icon" />
        <p>Bootstrap</p>
      </div>
      <div>
        <SiNodedotjs size={75} className="slider_icon" />
        <p>NodeJS</p>
      </div>

      <div>
        <SiMongodb size={75} className="slider_icon" />
        <p>MongoDB</p>
      </div>
      <div>
        <SiPython size={75} className="slider_icon" />
        <p>Python</p>
      </div>
      <div>
        <SiGit size={75} className="slider_icon" />
        <p>Git & GitBash</p>
      </div>
      <div>
        <SiWordpress size={75} className="slider_icon" />
        <p>Wordpress</p>
      </div>
      <div>
        <SiGoogleanalytics size={75} className="slider_icon" />
        <p>Google Analytics</p>
      </div>
    </Slider>
  );
};

export default IconSlider;
