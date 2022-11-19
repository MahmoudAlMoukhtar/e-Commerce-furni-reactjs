import React from "react";
import Spinner from "../Spinner";
import useFetch from "../services/useFetch";
// import {useNavigate} from "react-router-dom";
import PageNotFound from "../PageNotFound";
import {Link} from "react-router-dom";
import Product from "./Product";

const styles = {
  cardProduct:
    "product flex flex-col justify-between items-center pt-2  cursor-pointer rounded-xl transtion duration-200 hover:scale-110 w-80 h-full",
  containerCards: "flex gap-8 my-4 flex-wrap mt-10",
  sectionFilters:
    "flex justify-between my-10 border-t-4 border-[#3b5d50] p-4 shadow-lg bg-white font-bold",
};

function BestSellProducts({numStartSlice = 0, numEndSlice = 3}) {
  const {
    data: products,
    loading,
    error,
  } = useFetch("products?category=allProducts");

  if (error) throw error;
  if (loading) return <Spinner />;

  const productsSort = products.sort((a, b) => {
    if (a.numberSell > b.numberSell) {
      return -1;
    } else if (a.numberSell < b.numberSell) {
      return 1;
    } else {
      return 0;
    }
  });
  const productsSlice = productsSort.slice(numStartSlice, numEndSlice);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <PageNotFound />
      ) : (
        <section id="show3products" className="mt-20">
          <div className="contanier xl:px-16 lg:px-8 sm:px-6 flex justify-between lg:items-center md:items-start">
            <div id="text-section-2" className="flex flex-col gap-y-6 min-w-96">
              <h3 className="text-3xl font-medium">
                Crafted with excellent material.
              </h3>
              <p className="text-gray-400">
                Donec vitae odio nisl daplibus malesuda. Nullam ac aliqute
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique
              </p>
              <div>
                <button className="bg-black py-2 px-7 rounded-full font-semibold text-white">
                  Explore
                </button>
              </div>
            </div>
            <div
              id="prodact-imgs-HomePage"
              className="grid grid-rows-2 grid-flow-col gap-2 lg:gap-x-2 lg:grid-rows-1 md:gap-x-2"
            >
              {productsSlice.map(p => (
                <Product product={p} key={p.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}
export default BestSellProducts;
