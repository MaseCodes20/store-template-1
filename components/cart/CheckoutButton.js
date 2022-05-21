import React from "react";

function CheckoutButton() {
  return (
    <div className="checkoutAndClearCartButton">
      <button
        aria-label="Proceed to checkout button"
        disabled
        className="border-2 border-blue-500 p-2 uppercase text-blue-500"
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default CheckoutButton;
