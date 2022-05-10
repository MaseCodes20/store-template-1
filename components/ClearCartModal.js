import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

function ClearCartModal() {
  const dispatch = useDispatch();

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-500/75 z-20">
      <div className="centered w-fit bg-white z-30">
        <div className="w-[250px] text-center p-7 font-bold">
          <p>Remove all items from your shopping cart?</p>
          <div className="flex justify-between mt-5">
            <button
              className="border-2 border-blue-800 p-2 uppercase text-blue-800"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              className="border-2 border-red-700 p-2 uppercase text-red-700"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClearCartModal;
