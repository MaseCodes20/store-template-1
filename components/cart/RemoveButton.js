import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";

function RemoveButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(removeItem(id))}
      className="text-blue-900"
      aria-label="remove button"
    >
      remove
    </button>
  );
}

export default RemoveButton;
