import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import React from "react";
import Header from "../components/Header";
import cleats from "../products/boots/soccerCleats.json";

function Cleats() {
  console.log(cleats);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {cleats?.map((cleat) => {
          const { id, imageURLS, name, price } = cleat;
          return (
            <div key={id} className="relative max-h-[500px] max-w-[500px]">
              <img src={imageURLS[0]} alt={name} className="hit-full w-full" />
              <div className="absolute top-0 left-0 right-0">
                <div className="flex justify-between items-start mx-4 mt-4 text-xl">
                  <div className="mr-14">
                    <h1 className="font-bold">{name}</h1>
                  </div>

                  <div className="flex items-center">
                    <button className="mx-1">
                      <HeartIcon className="h-7" />
                    </button>
                    <button className="mx-1">
                      <ShoppingCartIcon className="h-7" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 mx-4 mb-4">
                <p className="font-semibold bg-white rounded-full p-1">
                  ${price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cleats;
