import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import {
  increase,
  decrease,
  removeItem,
  calculateTotals,
} from "../features/cart/cartSlice";

function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div className="pageContainer">
      <Header />
      {/* <CartContainer /> */}
      <div className="mx-auto bg-pink-500 mt-4">
        <div className="mx-auto w-fit bg-gray-300">
          {cartItems?.map((item, index) => {
            const { id, imageURLS, brand, name, price, quantity } = item;
            return (
              <div key={id} className="my-2">
                <div className="flex">
                  <img
                    src={imageURLS[0]}
                    alt={name}
                    className="h-[100px] w-[100px] rounded-md"
                  />
                  <div>
                    <h1>{name}</h1>
                    <p>${price}</p>

                    <button onClick={() => dispatch(removeItem(id))}>
                      remove
                    </button>
                  </div>
                  <div className="">
                    <button onClick={() => dispatch(increase(id))}>
                      <ChevronUpIcon className="h-7" />
                    </button>

                    <p>{quantity}</p>

                    <button
                      onClick={() => {
                        if (quantity === 1) {
                          dispatch(removeItem(id));
                          return;
                        }
                        dispatch(decrease(id));
                      }}
                    >
                      <ChevronDownIcon className="h-7" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
