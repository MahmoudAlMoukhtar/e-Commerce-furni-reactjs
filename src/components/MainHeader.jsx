import React from "react";
import {useNavigate} from "react-router-dom";
import "animate.css";

const styles = {
  transform: "translatex(-70px)",
};
const MainHeader = ({title}) => {
  const navigait = useNavigate();

  return (
    <div
      id="mainHeader"
      className="bg-green-800 flex justify-between items-center p-8 w-[100%]"
    >
      <div id="main-text" className="flex flex-col gap-y-12 flex-2">
        <h1
          id={"main_header-title"}
          className="text-5xl font-semibold text-white animate__animated animate__wobble"
        >
          {title}
        </h1>
        <p id="main_header-descraption" className="text-gray-400">
          Donec vitae quis nisi dapibus malesuada. Nuilam ac ailqut velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div id="main-btns" className="flex gap-x-2">
          <button
            id="main_header-btnShopNow"
            className="bg-yellow-500 py-2 px-7 rounded-full font-semibold"
            onClick={() => navigait("/allProducts")}
          >
            Shop Now
          </button>
          <button
            id="main_header-btnExplore"
            className="bg-transpert py-2 px-7 rounded-full font-semibold border-2 border-gray-400 text-white"
          >
            Explore
          </button>
        </div>
      </div>
      <div
        id="main-imgs"
        className="flex relative animate__animated animate__bounceInUp"
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

/* const imageTransformEffect = e => {
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
 */
