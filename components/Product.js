import React from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function Product({ id, imageURLS, name, price, brand, product }) {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="relative max-h-[500px] max-w-[500px] rounded-md shadow-md"
    >
      <img
        src={imageURLS[0]}
        alt={name}
        className="hit-full w-full rounded-t-md"
      />
      <div className="absolute top-0 right-0 mt-3 mr-3">
        <div className="flex items-center">
          <button className="mx-1">
            <HeartIcon className="h-7" />
          </button>
          <button className="mx-1">
            <ShoppingCartIcon
              className="h-7"
              onClick={() => {
                if (cartItems.find((item) => item.id === id) === id) {
                  return;
                }
                dispatch(addItem(product));
              }}
            />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 bg-white rounded-b-md">
        <div className="mx-4 mb-4">
          <h1>{brand}</h1>
          <h1 className="font-bold">{name}</h1>
          <p className="font-semibold rounded-full">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;