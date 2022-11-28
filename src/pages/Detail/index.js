import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "../../services/useFetch";
import Spinner from "../../Spinner";
import PageNotFound from "../../PageNotFound";
import Header from "../../common/Navbar";

const styles = {
  mainSectionDetailPageStyle:
    "main-section-detail-page-style flex justify-between items-center gap-x-80 px-6 mt-20 md:gap-x-40 md:px-12",
  porfolioProductStyle: "flex flex-col items-center",
  containerMainImgStyle: "transition duration-200 hover:scale-110 rounded-lg",
  mainImgStyle:
    "main-img-style w-96 h-96 rounded-lg border-2 border-orange transition duration-400 cursor-pointer animate__animated animate__jello",
  detailProductStyle:
    "detail-product-style flex flex-1 flex-col lg:px-12 gap-y-10 sm-text-center animate__animated animate__bounceInRight",
  addProduct:
    "w-[100%] p-2 rounded btn bg-gray-700 text-white hover:bg-green-700 hover:text-white cursor-pointer",
  addProductDisabled:
    "w-[100%] p-2 rounded btn bg-gray-200 text-gray-700 hover:bg-red-300 hover:text-white cursor-not-allowed",
};

const Detail = ({addToCart, updateQuantity}) => {
  //react router
  const {id} = useParams();
  const navigate = useNavigate();

  //state managment
  const {data: product, loading, error} = useFetch(`products/${id}`);
  const [sku, setSku] = useState(null);
  const [counter, setCounter] = useState(0);

  //
  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  //return jsx UI product
  return (
    <React.Fragment>
      <section className={styles.mainSectionDetailPageStyle}>
        <div id="porfolioProduct" className={styles.porfolioProductStyle}>
          <div className={styles.containerMainImgStyle}>
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className={styles.mainImgStyle}
            />
          </div>
        </div>
        <div id="detailProduct" className={styles.detailProductStyle}>
          <section className="flex flex-col gap-4">
            <h3
              id="detail-mockup"
              className="font-bold text-[12px] sm:text-md tracking-widest"
            >
              {product.name}
            </h3>
            <h1
              id="detail-title-product"
              className="font-bold text-xl md:text-2xl"
            >
              {product.name}
            </h1>
            <p id="descrip-product" className="text-sm sm:text-lg">
              {product.description}
            </p>
            <small className="font-bold text-lg">
              Price: $
              <span id="detail-price" className="text-[#eab308] text-2xl">
                {product.price}
              </span>
            </small>

            <select
              value={sku}
              onChange={event => {
                setSku(event.target.value);
                console.log(sku);
              }}
              className="border-2 border-gray-600 rounded cursor-pointer"
            >
              <option value="">What size</option>
              {product.skus.map(function (s) {
                return (
                  <option key={s.sku} value={s.sku}>
                    {s.size}
                  </option>
                );
              })}
            </select>
          </section>
          <section
            id="btns"
            className="flex flex-col items-center gap-4 w-[100%]"
          >
            <div id="counter" className="w-[100%]">
              <div className="bg-gray-100 rounded-xl flex justify-between items-center lg:flex-row md:flex-col sm:flex-row">
                <button
                  onClick={() => {
                    setCounter(currCounter => {
                      if (currCounter == 0) {
                        return 0;
                      } else {
                        return currCounter - 1;
                      }
                    });
                  }}
                  id="btn-minus-count"
                  className="hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                >
                  <p className="text-2xl font-bold ">-</p>
                </button>
                <p className="text-smleading-5font-medium text-gray-900">
                  <span id="" className="px-6">
                    {counter}
                  </span>
                </p>
                <button
                  onClick={() => {
                    setCounter(currCounter => {
                      return currCounter + 1;
                    });
                  }}
                  id="btn-add-count"
                  className="hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                >
                  <p className="text-2xl">+</p>
                </button>
              </div>
            </div>
            <button
              type="button"
              className={
                sku && counter > 0
                  ? styles.addProduct
                  : styles.addProductDisabled
              }
              onClick={() => {
                addToCart(product.id, sku, counter);
                navigate("/cart");
              }}
              disabled={!sku || counter < 1}
            >
              Add To Cart
            </button>

            <button
              type="button"
              className="w-[100%] bg-gray-300 p-2 rounded hover:bg-red-700 hover:text-white"
              onClick={() => {
                navigate("/allProducts");
              }}
            >
              Back to shop page
            </button>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Detail;
