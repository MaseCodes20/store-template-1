import { useRouter } from "next/router";
import React from "react";

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
          <h1>Account logo</h1>
        </button>

        <button className="mx-4">
          <h1>favorite icon</h1>
        </button>

        <button className="mx-4">
          <h1>cart icon</h1>
        </button>
      </div>
    </header>
  );
}

export default Header;
