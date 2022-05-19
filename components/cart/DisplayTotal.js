import React from "react";
import { useSelector } from "react-redux";

function DisplayTotal() {
  const { total } = useSelector((store) => store.cart);

  return (
    <div className="flex justify-between mx-3 mb-3 font-bold uppercase">
      <p>total</p>
      <p>${total}</p>
    </div>
  );
}

export default DisplayTotal;
