import React from "react";
import {NavLink} from "react-router-dom";

const activeStyle = {
  transition: "0.3s",
  color: "white",
  borderBottom: "4px solid #eab308",
};

const styles = {
  linkPages:
    "text-white hover:text-white hover:pb-1 hover:border-b-4 hover:border-yellow-500 link-nav",
};

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6 p-4">
      <a href="#home">
        <h2 className="text-white font-semibold text-4xl">Furni.</h2>
      </a>
      <div className="flex items-center gap-x-16">
        <ul className="flex items-center gap-x-12">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            end
            className={styles.linkPages}
          >
            Home
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/allProducts"
            className={styles.linkPages}
          >
            Shop
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/about"
            className={styles.linkPages}
          >
            About Us
          </NavLink>

          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/blogs"
            className={styles.linkPages}
          >
            Blogs
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/contact"
            className={styles.linkPages}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/Cart"
            className={
              "text-white hover:text-white hover:pb-1 border-b-4 border-yellow-500 link-nav bg-black p-2 rounded-full font-bold"
            }
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-cart"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

const Header = ({children}) => {
  return (
    <header id="home" className="h-full w-full bg-green-800">
      <div className="contanier px-16 flex flex-col justify-center">
        <Navbar />
        {children}
      </div>
    </header>
  );
};

export default Header;
