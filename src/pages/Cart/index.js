import React from "react";
import {useNavigate} from "react-router-dom";
import CartItem from "../../components/CartItem";
const styles = {
  cardItemCart:
    "cart-item bg-white flex justify-between items-center shadow-2xl px-4 py-2 transition duration-200 hover:scale-[1.02] cursor-default	border-4 border-gray-600 font-bold rounded-md",
};
const CartPage = ({cart, updateQuantity}) => {
  const urls = cart.map(i => `products/${i.id}`);
  //const {data: products, loading, error} = useFetchAll(urls);
  const navigate = useNavigate();
  /* 
  if (loading) return <Spinner />;
  if (error) throw error; */

  const numberItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <React.Fragment>
      <div className="bg-green-800 py-12">
        <h1 className="animate__animated animate__wobble text-2xl md:text-5xl sm:text-4xl font-semibold text-white text-center">
          Cart Page
        </h1>
      </div>

      <section className="flex flex-col gap-y-8">
        <h1 className="font-bold text-[60px] text-center">
          {numberItemsInCart === 0 ? (
            <p>
              Your Cart Is <span className="text-red-800">Empty</span>
            </p>
          ) : (
            <div className="my-4 text-2xl md:text-5xl sm:text-4xl">
              <span className=" font-bold px-6 mx-2 border-4 bg-[#eab308] border-black rounded-full shadow shadow-2xl">
                {numberItemsInCart}
              </span>
              Item{numberItemsInCart > 1 ? "s" : ""} in your cart
            </div>
          )}
        </h1>
        <div id="cart-container" className="flex flex-col mx-8">
          {cart.length > 0 && (
            <button
              className="bg-gray-700 hover:bg-green-700 p-2 text-white font-bold text-4xl transtion duration-200 hover:opacity-[0.8] mb-2 rounded"
              type="button"
              onClick={() => navigate("/checkout")}
            >
              Checkout Cart <span className="text-[#eab308]">!!!</span>
            </button>
          )}
          <ul>
            {cart.map(i => (
              <CartItem
                key={i.sku}
                itemInCart={i}
                updateQuantity={updateQuantity}
              />
            ))}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CartPage;
