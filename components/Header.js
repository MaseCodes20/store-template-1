import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";

function Header() {
  const { cartItems, quantity } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="hidden md:flex justify-center items-center h-10">
        <button className="mx-4" onClick={() => router.push("/")}>
          <h1>Logo</h1>
        </button>

        <div className="flex-1 bg-white">
          <nav className="flex justify-center">
            <button className="mx-2" onClick={() => router.push("/cleats")}>
              Soccer cleats
            </button>
            <button className="mx-2" onClick={() => router.push("/shinguards")}>
              Shin guards
            </button>
            <button className="mx-2" onClick={() => router.push("/balls")}>
              Balls
            </button>
            <button className="mx-2" onClick={() => router.push("/gloves")}>
              Gloves
            </button>
            <button className="mx-2" onClick={() => router.push("/favorites")}>
              favorites
            </button>
            <button className="mx-2" onClick={() => router.push("/")}>
              About
            </button>
          </nav>
        </div>

        <SearchBar />

        <button className="mx-4">
          <UserIcon className="h-7" />
        </button>

        <button className="mx-4">
          <HeartIcon className="h-7" />
        </button>

        <div className="relative mx-4">
          <div className="absolute top-0 right-0 text-red-500">
            <p>{quantity}</p>
          </div>

          <button onClick={() => router.push("/cart")}>
            <ShoppingBagIcon className="h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
