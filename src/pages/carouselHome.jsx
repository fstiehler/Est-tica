import React from "react";
import { Carousel } from "antd";
import "./carouselHome.css";

import Banner1 from "../../src/images/image1.png";
import Banner2 from "../../src/images/image2.png";
import Banner3 from "../../src/images/image3.png";

const carouselHome = () => (
  <Carousel autoplay>
    <div className="carousel">
      <img className="imagem" src={Banner1} />
    </div>
    <div className="carousel">
      <img className="imagem" src={Banner2} />
    </div>
    <div className="carousel">
      <img className="imagem" src={Banner3} />
    </div>
  </Carousel>
);

export default carouselHome;
