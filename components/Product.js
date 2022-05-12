import React from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../features/favorites/favoritesSlice";
import { openProductDetails } from "../features/modal/productModalSlice";

function Product({ id, imageURLS, name, price, brand, product }) {
  const { cartItems } = useSelector((store) => store.cart);
  const { favorites } = useSelector((store) => store.favorites);

  const dispatch = useDispatch();

  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteItem = favorites.find((item) => item.id === id);

  return (
    <div
      key={id}
      className="relative max-h-[500px] max-w-[500px] rounded-md shadow-md"
    >
      <img
        src={imageURLS[0]}
        alt={name}
        className="hit-full w-full rounded-t-md cursor-pointer"
        onClick={() => dispatch(openProductDetails(product))}
      />
      <div className="absolute top-0 right-0 mt-3 mr-3">
        <div className="flex items-center">
          <button
            className="mx-1"
            onClick={() => {
              if (favoriteItem) {
                dispatch(removeFromFavorites(id));
                return;
              }
              dispatch(addToFavorites(product));
            }}
          >
            <HeartIcon className={favoriteItem ? `h-7 fill-red-500` : `h-7`} />
          </button>
          <button
            className="relative mx-1"
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

            <ShoppingCartIcon
              className={cartItem ? `h-7 text-gray-300` : `h-7`}
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
