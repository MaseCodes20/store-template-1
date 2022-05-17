import Head from "next/head";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearCartModal from "../components/ClearCartModal";
import Header from "../components/Header";
import {
  increase,
  decrease,
  removeItem,
  calculateTotals,
} from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import Footer from "../components/Footer";

function Cart() {
  const { cartItems, total } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="pageContainer">
      <Head>
        <title>Cart</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
      {/* <CartContainer /> */}
      {isOpen && <ClearCartModal />}

      <div className="mx-auto my-4">
        <div className="relative mx-auto md:border-2 border-black p-2 rounded-md max-w-[600px] min-h-[560px]">
          <div className="text-center text-2xl font-bold">
            <h1>YOUR BAG</h1>
          </div>
          <div className="relative h-[400px] my-2 overflow-y-scroll">
            {cartItems.length === 0 && (
              <div className="centered">
                <p>Your bag is empty!</p>
              </div>
            )}

            {cartItems?.map((item) => {
              const { id, imageURLS, name, price, quantity } = item;
              return (
                <div key={id} className="my-2 border-2 rounded-md bg-white">
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

                      <button
                        onClick={() => dispatch(removeItem(id))}
                        className="text-blue-900"
                      >
                        remove
                      </button>
                    </div>
                    <div className="h-fit">
                      <button onClick={() => dispatch(increase(id))}>
                        <ChevronUpIcon className="h-7" />
                      </button>

                      <p className="text-center text-xl font-bold">
                        {quantity}
                      </p>

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

          <hr className="h-[2px] w-[96%] mx-auto bg-black" />
          <div className="mt-3">
            <div className="flex justify-between mx-3 mb-3 font-bold uppercase">
              <p>total</p>
              <p>${total}</p>
            </div>

            <div className="flex justify-between">
              <div className="mx-auto w-fit md:text-2xl mb-2">
                <button
                  onClick={() => dispatch(openModal())}
                  aria-label="Clear cart button"
                  className="border-2 border-red-500 p-2 uppercase text-red-500"
                >
                  Clear cart
                </button>
              </div>
              <div className="mx-auto w-fit md:text-2xl mb-2">
                <button
                  aria-label="Proceed to checkout button"
                  className="border-2 border-blue-500 p-2 uppercase text-blue-500"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
