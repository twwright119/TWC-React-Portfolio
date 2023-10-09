import React from "react";
import Resume from "../../assets/TWResume2023.pdf";
import HeaderSocialsMedia from "./HeaderMediaSocials";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#portfolio" className="btn btn-primary">
        Jump to Portfolio
      </a>
      <HeaderSocialsMedia />
    </div>
  );
};

export default CTA;
