import React from "react";
import Products from "../../components/Products";
import Header from "../../common/Header";
import MainHeader from "../../components/MainHeader";

const ShopPage = ({addToCart}) => {
  return (
    <React.Fragment>
      <Header>
        <MainHeader title="Shopy page" />
      </Header>

      <div id="shop" className="flex flex-col gap-y-0">
        <div>
          <Products addToCart={addToCart} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopPage;
