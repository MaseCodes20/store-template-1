import React from "react";
import RemoveButton from "./RemoveButton";
import UpAndDownButtons from "./UpAndDownButtons";

function CartItem({ item }) {
  const { id, imageURLS, name, price, quantity } = item;

  return (
    <div className="my-2 border-2 rounded-md bg-white">
      <div className="flex h-[100px] items-center">
        <img
          src={imageURLS[0]}
          alt={name}
          className="h-[100px] w-[100px] rounded-md"
        />
        <div className="flex-1 relative ml-5 h-fit">
          <div className="">
            <h1 className="font-bold">{name}</h1>
            <p>${price.toFixed()}</p>
          </div>

          <RemoveButton id={id} />
        </div>

        <UpAndDownButtons id={id} quantity={quantity} />
      </div>
    </div>
  );
}

export default CartItem;
