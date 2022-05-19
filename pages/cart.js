import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearCartModal from "../components/ClearCartModal";
import Header from "../components/Header";
import { calculateTotals } from "../features/cart/cartSlice";
import Footer from "../components/Footer";
import CartItem from "../components/cart/CartItem";
import ClearCartButton from "../components/cart/ClearCartButton";
import CheckoutButton from "../components/cart/CheckoutButton";
import DisplayTotal from "../components/cart/DisplayTotal";

function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <div className="pageContainer">
      <Head>
        <title>Cart</title>
        <meta name="description" content="Created by Masecodes" />
        <link rel="icon" href="/shop_106574.ico" />
      </Head>
      <Header />
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
              const { id } = item;
              return <CartItem key={id} item={item} />;
            })}
          </div>

          <hr className="h-[2px] w-[96%] mx-auto bg-black" />
          <div className="mt-3">
            <DisplayTotal />

            <div className="flex justify-center items-center">
              <ClearCartButton />

              <CheckoutButton />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
