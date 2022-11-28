import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import BlogsPage from "./pages/Blogs";
import DetailBlog from "./components/DetailBlog";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import AboutPage from "./pages/About Us";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import Footer from "../src/common/Footer";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./components/NavModal";
import Navbar from "./common/Navbar";

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      console.log("cart could not be parsed into json ");
      return [];
    }
  });

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const addToCart = (id, sku, counter) => {
    setCart(items => {
      const itemInCart = items.find(i => i.sku === sku);
      if (itemInCart) {
        return items.map(function (i) {
          return i.sku === sku ? {...i, quantity: counter} : i;
        });
      } else {
        return [...items, {id, sku, quantity: counter}];
      }
    });
  };

  const updateQuantity = (sku, quantity) => {
    setCart(items => {
      return quantity === 0
        ? items.filter(i => i.sku !== sku)
        : items.map(function (i) {
            return i.sku === sku ? {...i, quantity: quantity} : i;
          });
    });
  };

  const emptyCart = () => {
    setCart([]);
  };
  const [navBarModal, setNavBarModal] = useState(false);
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="flex flex-col ">
        <main className="p-0 m-0">
          <Navbar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
          <NavbarModal
            setNavBarModal={setNavBarModal}
            navbarModal={navBarModal}
          />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setNavBarModal={setNavBarModal}
                  navbarModal={navBarModal}
                />
              }
            />
            <Route
              path="/:category"
              element={
                <ShopPage
                  addToCart={addToCart}
                  setNavBarModal={setNavBarModal}
                />
              }
            />
            <Route
              path="/:category/:id"
              element={
                <Detail
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                  setNavBarModal={setNavBarModal}
                />
              }
            />
            <Route
              path="/blogs"
              element={
                <BlogsPage page="blogs" setNavBarModal={setNavBarModal} />
              }
            />
            <Route
              path="/blogs/:blogId"
              element={<DetailBlog setNavBarModal={setNavBarModal} />}
            />
            <Route
              path="/cart"
              element={<CartPage cart={cart} updateQuantity={updateQuantity} />}
            />
            <Route
              path="/checkout"
              element={<CheckoutPage cart={cart} emptyCart={emptyCart} />}
            />
            <Route
              path="/about"
              element={<AboutPage setNavBarModal={setNavBarModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage setNavBarModal={setNavBarModal} />}
            />
          </Routes>
          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
}
/* 
<Footer />
*/
