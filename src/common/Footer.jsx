import React from "react";
import {AiFillLinkedin, AiFillFacebook} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20 flex flex-col justify-between  pt-16 pb-40">
      <div className="contanier xl:px-16 lg:px-8 sm:px-6 flex flex-col justify-between gap-y-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-6 justify-center">
            <div className="flex gap-x-2">
              <h1 className="text-2xl">Subscribe to Newsletter</h1>
            </div>
            <form className="flex justify-between gap-x-4">
              <input
                type="text"
                className="w-64 p-2 rounded-md border-2 border-gray-400"
                placeholder="Enter Your Name"
              />
              <input
                type="email"
                className="w-64 p-2 rounded-md border-2 border-gray-400"
                placeholder="Enter Your email"
              />
              <button
                type="submit"
                className="bg-black hover:opacity-[0.8] text-white font-bold py-2 px-6 rounded-md hover:cursor-pointer"
              >
                <img src="../images/send.svg" alt="" className="w-8" />
              </button>
            </form>
          </div>

          <img src="/images/sofa.png" alt="" className="w-80" />
        </div>
        <div id="main-footer" className="">
          <div className="grid grid-cols-6 items-center justify-center text-start gap-x-24">
            <div className="flex flex-col gap-y-6 text-start col-span-2">
              <a href="#home">
                <h2 className="font-semibold text-2xl">UNTREESTORE.</h2>
              </a>
              <p className="">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>
              <div id="links-social" className="flex gap-x-2">
                <a href="#home">
                  <img
                    src="/images/facebook (2).svg"
                    alt=""
                    className="bg-gray-200 rounded-full p-1 "
                  />
                </a>
                <a href="#home">
                  <img
                    src="/images/twitter (1).svg"
                    alt=""
                    className="bg-gray-200 rounded-full p-1"
                  />
                </a>
                <a href="#home">
                  <img
                    src="/images/instagram (3).svg"
                    alt=""
                    className="bg-gray-200 rounded-full p-1"
                  />
                </a>
                <a href="#home">
                  <img
                    src="/images/linkedin.svg"
                    alt=""
                    className="bg-gray-200 rounded-full p-1"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-start">
              <a href="#home" className="hover:text-green-600">
                About us
              </a>
              <a href="#home" className="hover:text-green-600">
                Services
              </a>
              <a href="#home" className="hover:text-green-600">
                Blog
              </a>
              <a href="#home" className="hover:text-green-600">
                Contact us
              </a>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-start">
              <a href="#home" className="hover:text-green-600">
                Support
              </a>
              <a href="#home" className="hover:text-green-600">
                Knowledge base
              </a>
              <a href="#home" className="hover:text-green-600">
                Live chat
              </a>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-start">
              <a href="#home" className="hover:text-green-600">
                Jobs
              </a>
              <a href="#home" className="hover:text-green-600">
                Our team
              </a>
              <a href="#home" className="hover:text-green-600">
                Leadership
              </a>
              <a href="#home" className="hover:text-green-600">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-start">
              <a href="#home" className="hover:text-green-600">
                Nordic Chair
              </a>
              <a href="#home" className="hover:text-green-600">
                Kruzo Aero
              </a>
              <a href="#home" className="hover:text-green-600">
                Ergonomic Chair
              </a>
            </div>
          </div>
        </div>
        <p className="attribution flex gap-2 itesm-center">
          <span>
            Coded by{" "}
            <a href="#home" className="font-semibold">
              Mahmoud Al_Mokhtar
            </a>
          </span>
          <a
            href="https://www.linkedin.com/in/mahmoud-al-moukhtar-a00604229/"
            target="blank"
          >
            <AiFillLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100081315293135"
            target="blank"
          >
            <AiFillFacebook size={20} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
