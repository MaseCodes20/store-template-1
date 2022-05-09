import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";

function CartContainer() {
  // const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="">
      <div className="bg-pink-500">
        <h1>empty bag</h1>
        {/* {cartItems?.map((item) => {
          const { id, imageURLS, brand, name, price } = item;
          return (
            <CartItem
              key={id}
              images={imageURLS}
              brand={brand}
              name={name}
              price={price}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default CartContainer;
