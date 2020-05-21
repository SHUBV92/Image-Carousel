import React, {useState} from "react";
import "./Slider.css";

const Slider = () => {
  let sliderArr = [1, 2, 3, 4];
const [x, setX] = useState(0)
  const goLeft = () => {

setX(x+100)
  };

  const goRight = () => {
setX(x-100)
      

  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
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
