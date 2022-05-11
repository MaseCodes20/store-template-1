import React from "react";
import CleatsMenu from "./CleatsMenu";
import EquipmentsMenu from "./EquipmentsMenu";
import { useRouter } from "next/router";

function WebMenu() {
  const router = useRouter();
  return (
    <div className="hidden md:flex w-full">
      <div className="flex-1 bg-white">
        <nav className="flex justify-center items-center">
          <CleatsMenu />
          <EquipmentsMenu />
          <button className="mx-2" onClick={() => router.push("/")}>
            About
          </button>
        </nav>
      </div>
    </div>
  );
}

export default WebMenu;
