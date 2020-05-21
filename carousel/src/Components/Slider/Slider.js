import React, { useState } from "react";
import "./Slider.scss";
import ImgComp from "../ImgComp/ImgComp"
import Luffy from "../../pics/Luffy.jpg"
import Courage from "../../pics/Courage.jpg"
import FireKaizoku from "../../pics/FireKaizoku.png"
import Kaizoku from "../../pics/Kaizoku.png"
import TheSquad from "../../pics/TheSquad.jpg"
import Zoro from "../../pics/Zoro.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"




const Slider = () => {
  let sliderArr = [<ImgComp src={Luffy} />, <ImgComp src={Courage} />, <ImgComp src={FireKaizoku} />, <ImgComp src={Kaizoku} />, <ImgComp src={TheSquad} />, <ImgComp src={Zoro} />];
  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);

    x === 0
      ? setX(-100 * (sliderArr.length - 1))
      : setX(x + 100);
    // if(x<=100){
    // setX(x + 100)
  };

  const goRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1)
      ? setX(0)
      : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{
              transform: `translateX(${x}%)`
            }}
          >
            <h1>{item}</h1>
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>

    <FontAwesomeIcon icon={faChevronLeft} />

      </button>
      <button id="goRight" onClick={goRight}>


      <FontAwesomeIcon icon={faChevronRight} />

      </button>
    </div>
  );
};

export default Slider;
