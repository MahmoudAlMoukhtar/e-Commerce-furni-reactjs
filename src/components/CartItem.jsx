import React from "react";

const styles = {
  cardItemCart:
    "cart-item bg-white flex justify-between items-center shadow-2xl px-4 py-2 transition duration-200 hover:scale-[1.02] cursor-default	border-2 border-gray-600 font-bold rounded-md",
  cardItemCart2: "flex justify-between gap-4 items-center px-4 my-2",
};

const CartItem = ({itemInCart, products, updateQuantity}) => {
  console.log(itemInCart);
  const {id, sku, quantity} = itemInCart;
  const {price, name, image, skus} = products.find(p => p.id === parseInt(id));
  const {size} = skus.find(s => s.sku === sku);

  return (
    <li key={sku} className={styles.cardItemCart}>
      <img
        src={`/images/${image}`}
        alt={name}
        className="img-cart-item w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
      />

      <h3>{name}</h3>
      <p>${price}</p>
      <p>Size: {size}</p>
      <p>Quantity: {quantity}</p>
      <p>
        <select
          aria-label={`Select quantity for ${name} size ${size}`}
          onChange={e => updateQuantity(sku, parseInt(e.target.value))}
          value={quantity}
          className="border-[1px] border-gray-400 rounded p-1"
        >
          <option value="0">Remove</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </p>
    </li>
  );
};
export default CartItem;

/* const CartItem = ({itemInCart, products, updateQuantity}) => {
  console.log(itemInCart);
  const {id, sku, quantity} = itemInCart;
  const {price, name, image, skus} = products.find(p => p.id === parseInt(id));
  const {size} = skus.find(s => s.sku === sku);

  return (
    <li key={sku} className={styles.cardItemCart2}>
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-[200px] h-[200px]"
      />
      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Size: {size}</p>
        <p>Quantity: {quantity}</p>
        <p>
          <select
            aria-label={`Select quantity for ${name} size ${size}`}
            onChange={e => updateQuantity(sku, parseInt(e.target.value))}
            value={quantity}
            className="border-[1px] border-gray-400 rounded p-1"
          >
            <option value="0">Remove</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
      </div>
    </li>
  );
};
export default CartItem;
 */
