import { ShoppingCartIcon } from "@heroicons/react/outline";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";

function ShoppingCartButton({ id, product }) {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const cartItem = cartItems.find((item) => item.id === id);

  return (
    <button
      className="relative mx-1"
      aria-label="Cart Button"
      onClick={() => {
        if (cartItem) {
          dispatch(removeItem(id));
          return;
        }
        dispatch(addItem(product));
      }}
    >
      {cartItem ? (
        <MinusCircleIcon className="h-4 absolute text-gray-300 -top-1 -right-2" />
      ) : (
        <PlusCircleIcon className="h-4 absolute -top-1 -right-2" />
      )}

      <ShoppingCartIcon className={cartItem ? `h-7 text-gray-300` : `h-7`} />
    </button>
  );
}

export default ShoppingCartButton;
