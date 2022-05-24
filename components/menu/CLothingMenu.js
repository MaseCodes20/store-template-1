import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

import React, { Fragment } from "react";

function ClothingMenu() {
  const router = useRouter();
  return (
    <Menu as="div" className="mx-3">
      <Menu.Button className="w-full">
        <h2 className="menuTitle mx-0 my-0">Clothing</h2>
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
        <Menu.Items className="itemsMenuContainer">
          <div className="md:w-[262px] ">
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  <a
                    className={`menuItemLink md:w-[120px] ${
                      active && "menuItemLinkActive"
                    }`}
                    onClick={() => router.push("/clothing/jerseys")}
                  >
                    <h2 className={`menuItemTitle`}>Jerseys</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  {" "}
                  <a
                    className={`menuItemLink md:w-[120px]  ${
                      active && "menuItemLinkActive"
                    }`}
                    onClick={() => router.push("/clothing/shorts")}
                  >
                    <h2 className="menuItemTitle">Shorts</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  {" "}
                  <a
                    className={`menuItemLink md:w-[120px]  ${
                      active && "menuItemLinkActive"
                    }`}
                    onClick={() => router.push("/clothing/socks")}
                  >
                    <h2 className="menuItemTitle">Socks</h2>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-end">
                  <a
                    className={`menuItemLink md:w-[120px]  ${
                      active && "menuItemLinkActive"
                    }`}
                    onClick={() => router.push("/clothing")}
                  >
                    <h2 className="menuItemTitle">All</h2>
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

export default ClothingMenu;
