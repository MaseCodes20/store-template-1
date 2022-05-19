import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

function ClearCartButton() {
  const dispatch = useDispatch();

  return (
    <div className="checkoutAndClearCartButton">
      <button
        onClick={() => dispatch(openModal())}
        aria-label="Clear cart button"
        className="border-2 border-red-500 p-2 uppercase text-red-500"
      >
        Clear cart
      </button>
    </div>
  );
}

export default ClearCartButton;
