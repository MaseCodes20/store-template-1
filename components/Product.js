import React from "react";
import { useDispatch } from "react-redux";
import { openProductDetails } from "../features/modal/productModalSlice";
import ShoppingCartButton from "./ShoppingCartButton";
import FavoritesButton from "./FavoritesButton";

function Product({ id, imageURLS, name, price, brand, product }) {
  const dispatch = useDispatch();

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
          <FavoritesButton id={id} product={product} />

          <ShoppingCartButton id={id} product={product} />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 bg-white rounded-b-md">
        <div className="mx-4 mb-4">
          <h1>{brand}</h1>
          <h1 className="font-bold max-w-[200px] truncate">{name}</h1>
          <p className="font-semibold rounded-full">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
