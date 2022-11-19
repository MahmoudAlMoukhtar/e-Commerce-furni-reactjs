import React from "react";
import {useNavigate} from "react-router-dom";
import "animate.css";

const styles = {
  transform: "translatex(-70px)",
};
const MainHeader = ({title}) => {
  const navigait = useNavigate();

  return (
    <div id="mainHeader" className="flex justify-between items-center">
      <div id="main-text" className="flex flex-col gap-y-12 flex-1">
        <h1 className="text-5xl font-semibold text-white animate__animated animate__wobble">
          {title}
        </h1>
        <p className="text-gray-400">
          Donec vitae quis nisi dapibus malesuada. Nuilam ac ailqut velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div id="btns-main" className="flex gap-x-2">
          <button
            className="bg-yellow-500 py-2 px-7 rounded-full font-semibold"
            onClick={() => navigait("/allProducts")}
          >
            Shop Now
          </button>
          <button className="bg-transpert py-2 px-7 rounded-full font-semibold border-2 border-gray-400 text-white">
            Explore
          </button>
        </div>
      </div>
      <div
        id="main-imgs"
        className="flex relative animate__animated animate__bounceInUp"
        onMouseOver={imageTransformEffect}
        onMouseOut={imageTransformEffectOut}
      >
        <img
          id="couchImg"
          src="/images/couch.png"
          alt="couch"
          className="transition duration-600 z-10"
        />
        <img
          id="dotsYellow"
          src="/images/dots-yellow.svg"
          alt="couch"
          className="w-[200px] transition duration-600 absolute top-10 right-0 z-0"
          style={styles}
          width={200}
        />
      </div>
    </div>
  );
};
export default MainHeader;

const imageTransformEffect = e => {
  const dotsYellow = document.getElementById("dotsYellow");
  const couchImg = document.getElementById("couchImg");
  dotsYellow.style.transform = "translateX(50px)";
  couchImg.style.transform = "translateX(-30px)";
};
const imageTransformEffectOut = e => {
  const dotsYellow = document.getElementById("dotsYellow");
  const couchImg = document.getElementById("couchImg");
  dotsYellow.style.transform = "translateX(0px)";
  couchImg.style.transform = "translateX(0px)";
};
