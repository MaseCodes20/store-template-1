import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";

function UpAndDownButtons({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="h-fit">
      <button
        onClick={() => dispatch(increase(id))}
        aria-label="Increase amount button"
      >
        <ChevronUpIcon className="h-7" />
      </button>

      <p className="text-center text-xl font-bold">{quantity}</p>

      <button
        onClick={() => {
          if (quantity === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrease(id));
        }}
        aria-label="Decrease amount button"
      >
        <ChevronDownIcon className="h-7" />
      </button>
    </div>
  );
}

export default UpAndDownButtons;
