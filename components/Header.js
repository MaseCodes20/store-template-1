import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-slate-400">
      <div className="hidden md:flex justify-center items-center h-10">
        <button className="mx-4">
          <h1>Logo</h1>
        </button>

        <div className="flex-1 bg-white">
          <nav className="flex justify-center">
            <button className="mx-2">page</button>
            <button className="mx-2">page</button>
            <button className="mx-2">page</button>
            <button className="mx-2">page</button>
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
