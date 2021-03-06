import { ChevronDoubleDownIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeProductDetails } from "../features/modal/productModalSlice";
import FavoritesButton from "./FavoritesButton";
import ShoppingCartButton from "./ShoppingCartButton";

function ProductModal() {
  const { isOpen, product } = useSelector((store) => store.productModal);
  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <div className="fixed h-screen top-0 left-0 bottom-0 right-0 bg-gray-500/75 z-20">
          <div className="centered w-fit bg-white z-30 rounded-md">
            {product.map((item) => {
              const {
                id,
                imageURLS,
                name,
                price,
                brand,
                description,
                specifications,
              } = item;

              return (
                <div key={id} className="relative max-h-screen">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center p-2 md:p-3">
                        <h1>{brand}|</h1>
                        <h1 className="font-bold truncate w-[180px] md:w-full">
                          {name}
                        </h1>
                      </div>
                    </div>

                    <FavoritesButton id={id} product={item} />
                    <ShoppingCartButton id={id} product={item} />
                    <button
                      onClick={() => dispatch(closeProductDetails(id))}
                      className="mx-1"
                    >
                      <XIcon className="h-9" />
                    </button>
                  </div>

                  <div className="md:flex items-center mx-auto m-2">
                    <img
                      src={imageURLS[0]}
                      alt={name}
                      className="max-h-[200px] max-w-[200px] md:max-h-[300px] md:max-w-[300px] mx-auto"
                    />

                    <div className="hidden md:flex">
                      {description.split(" ").length > 70 && (
                        <div className="ml-3 text-gray-400">
                          <p className="text-center text-sm mb-2">Scroll</p>
                          <ChevronDoubleDownIcon className="h-7 mx-auto animate-bounce" />
                        </div>
                      )}
                    </div>

                    <div className="max-w-[300px] m-2 mx-auto">
                      <h1 className="text-center font-semibold">Description</h1>
                      <p className="my-2 mx-3 text-xs md:text-base md:h-[300px] scrollbar-hide overflow-x-scroll">
                        {description}
                      </p>

                      <div className="flex justify-center items-center">
                        <div>
                          <h1 className="font-semibold">Price:</h1>
                        </div>
                        <div>
                          <p className="mx-2">${price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="m-2">
                    <h1 className="text-center font-semibold">
                      specifications
                    </h1>
                    <ul className="grid grid-cols-2 gap-1">
                      {specifications.map((specification, index) => {
                        return (
                          <li
                            key={index}
                            className="max-w-[300px] border-2 border-black p-2 text-xs md:text-base"
                          >
                            {specification}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductModal;
