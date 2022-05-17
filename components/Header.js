import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import WebMenu from "./menu/WebMenu";
import MobileMenu from "./menu/MobileMenu";

function Header() {
  const { cartItems, quantity } = useSelector((store) => store.cart);
  const { favorites } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="flex justify-center items-center h-10">
        <button
          className="mx-4 w-[160px] font-bold text-lg"
          onClick={() => router.push("/")}
        >
          <h1>Soccer Store</h1>
        </button>
        <WebMenu />
        {/* <SearchBar /> */}
        <div className="flex-1">
          <div className="flex justify-center items-center">
            <button className="mx-4">
              <UserIcon className="h-7" />
            </button>

            <button
              className="relative mx-4"
              onClick={() => router.push("/favorites")}
            >
              {favorites.length >= 1 && (
                <p className="centered text-xs text-white font-bold">
                  {favorites.length}
                </p>
              )}

              <HeartIcon
                className={favorites.length >= 1 ? `h-7 fill-black` : `h-7`}
              />
            </button>

            <button
              onClick={() => router.push("/cart")}
              className="relative mx-4"
            >
              {quantity >= 1 && (
                <div className="absolute top-0 right-0 font-bold text-red-500">
                  <div className="relative h-[18px] w-[16px] animate-bounce rounded-full bg-white opacity-90">
                    <div className="centered text-lg">
                      <p>{quantity}</p>
                    </div>
                  </div>
                </div>
              )}
              <ShoppingBagIcon className="h-7" />
            </button>
          </div>
        </div>{" "}
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
