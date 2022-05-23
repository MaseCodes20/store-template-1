import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

import React, { Fragment } from "react";

function CLothingMenu() {
  const router = useRouter();
  return (
    <Menu as="div" className="mx-3">
      <Menu.Button className="w-full">
        <h2 className="flex justify-end items-center text-black">Clothing</h2>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-in duration-300"
        enterFrom="transform opacity-0 translateY(-50%)"
        enterTo="transform opacity-100 translateY(0%)"
        leave="transition ease-out duration-75"
        leaveFrom="transform opacity-100 translateY(0%)"
        leaveTo="transform opacity-0 translateY(-10em)"
      >
        <Menu.Items className="absolute flex justify-center left-0 right-0 shadow-md bg-white divide-y divide-gray-100 focus:outline-none">
          <div className="md:w-[262px] ">
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  <a
                    className={`flex items-center text-gray-500 md:w-[120px] px-4 py-2 cursor-pointer ${
                      active && "bg-white hover:text-black"
                    }`}
                    onClick={() => router.push("/clothing/jerseys")}
                  >
                    <h2 className={`text-right md:text-left`}>Jerseys</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  {" "}
                  <a
                    className={`flex items-center text-gray-500 md:w-[120px]  px-4 py-2 cursor-pointer ${
                      active && "bg-white hover:text-black"
                    }`}
                    onClick={() => router.push("/clothing/shorts")}
                  >
                    <h2 className="flex-1 text-right md:text-left">Shorts</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  {" "}
                  <a
                    className={`flex items-center text-gray-500 md:w-[120px]  px-4 py-2 cursor-pointer ${
                      active && "bg-white hover:text-black"
                    }`}
                    onClick={() => router.push("/clothing/socks")}
                  >
                    <h2 className="flex-1 text-right md:text-left">Socks</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  <a
                    className={`flex items-center text-gray-500 md:w-[120px]  px-4 py-2 cursor-pointer ${
                      active && "bg-white hover:text-black"
                    }`}
                    onClick={() => router.push("/clothing")}
                  >
                    <h2 className="flex-1 text-right md:text-left">All</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default CLothingMenu;
