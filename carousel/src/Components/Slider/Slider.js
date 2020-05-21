import React, { useState } from "react";
import "./Slider.scss";
import ImgComp from "./ImgComp"
import i1 from "./pics/1.jpg"

const Slider = () => {
  let sliderArr = [<ImgComp src={i1}, 2, 3, 4, 5];
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
        Left
      </button>
      <button id="goRight" onClick={goRight}>
        Right
      </button>
    </div>
  );
};

export default Slider;
