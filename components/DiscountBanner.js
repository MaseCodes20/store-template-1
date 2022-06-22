import React from "react";

function DiscountBanner() {
  return (
    <div className="flex justify-center items-center my-16 text-center">
      <div className="w-full flex justify-center items-center">
        <div className="flex-1">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-5xl font-bold pb-1">10%</p>
            </div>

            <div className="bg-black text-white py-1 px-3">
              <p className="font-bold text-lg">OFF</p>
            </div>
          </div>{" "}
          <p>on orders of $29+</p>
        </div>
        <div className=" h-[80%] w-1 bg-black"></div>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-5xl font-bold pb-1">20%</p>
          </div>

          <div className="bg-black text-white py-1 px-3">
            <p className="font-bold text-lg">OFF</p>
          </div>
        </div>{" "}
        <p>on orders of $69+</p>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-5xl font-bold pb-1">25%</p>
          </div>

          <div className="bg-black text-white py-1 px-3">
            <p className="font-bold text-lg">OFF</p>
          </div>
        </div>{" "}
        <p>on orders of $169+</p>
      </div>
      <div className="flex items-center w-full">
        <div className="bg-black text-white py-2 px-4">
          <p className="uppercase">
            CODE: <span className="font-bold"> summerkickoff</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
