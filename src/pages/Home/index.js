import React from "react";
import Blogs from "../../components/Blogs";
import ProductsSlider from "../../components/ProductsSlider";
import Testimonailas from "../../components/Testimonailas";
import WhyChoose from "../../components/WhyChose";
import BestSellProducts from "../../components/BestSellProducts";
import Services from "../../components/Services";
import MainHeader from "../../components/MainHeader";

const HomePage = ({setNavBarModal, navbarModal}) => {
  return (
    <React.Fragment>
      <MainHeader title="Welcome to our store" />
      <div className="flex flex-col gap-y-40">
        <div className="flex flex-col justify-center items-center">
          <BestSellProducts numStartSlice={0} numEndSlice={3} />
        </div>
        <WhyChoose />
        <ProductsSlider />
        <Services />
        <Testimonailas />
        <Blogs />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
