import { XIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeProductDetails } from "../features/modal/productModalSlice";

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
                  <button
                    className="absolute top-0 right-0 m-1 md:m-2"
                    onClick={() => dispatch(closeProductDetails(id))}
                  >
                    <XIcon className="h-7" />
                  </button>

                  <div className="flex justify-center items-center p-2">
                    <h1>{brand}|</h1>
                    <h1 className="text-center font-bold">{name}</h1>
                  </div>

                  <div className="md:flex items-center mx-auto m-2">
                    <img
                      src={imageURLS[0]}
                      alt={name}
                      className="max-h-[300px] max-w-[300px] mx-auto"
                    />

                    <div className="max-w-[300px] m-2 mx-auto">
                      <h1 className="text-center font-semibold">description</h1>
                      <p className="my-2 text-xs md:text-base">{description}</p>

                      <div className="flex justify-center items-center">
                        <div>
                          <h1>Price:</h1>
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
                      {specifications.map((specification) => {
                        return (
                          <li className="max-w-[300px] border-2 border-black p-2 text-xs md:text-base">
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
