import React from "react";

const Slider = () => {
  let sliderArr = [1, 2, 3, 4];

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
        <div key={index} className="slide">
        
        <h1>{item}</h1>;
        )
      })}
    </div>
  );
};

export default Slider;
