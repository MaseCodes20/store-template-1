import React from "react";

function CartItem({ images, brand, name, price }) {
  return (
    <div className="flex justify-center">
      <div className="h-[100px] w-[100px]">
        <img
          src={images[0]}
          alt={name}
          className="hit-full w-full rounded-md"
        />
      </div>
      <div>
        <h1>
          {brand}
          {name}
        </h1>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default CartItem;
