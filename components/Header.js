import { useRouter } from "next/router";
import React from "react";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";

function Header() {
  const router = useRouter();

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
            <button className="mx-2" onClick={() => router.push("/")}>
              About
            </button>
          </nav>
        </div>
        <div className="mx-4">
          <p>search bar</p>
        </div>

        <button className="mx-4">
          <UserIcon className="h-7" />
        </button>

        <button className="mx-4">
          <HeartIcon className="h-7" />
        </button>

        <button className="mx-4">
          <ShoppingBagIcon className="h-7" />
        </button>
      </div>
    </header>
  );
}

export default Header;
