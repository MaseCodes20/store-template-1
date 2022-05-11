import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import CleatsMenu from "./CleatsMenu";
import { useRouter } from "next/router";
import EquipmentsMenu from "./EquipmentsMenu";

function MobileMenu() {
  const router = useRouter();
  return (
    <Menu as="div" className="mr-5 md:hidden">
      <Menu.Button
        className="md:hidden flex justify-center items-center content-center"
        name="Menu button"
        aria-label="Menu button"
      >
        <MenuIcon className="h-7 md:hidden hover:text-pink-500" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-in duration-300"
        enterFrom="transform opacity-100 translateY(-10em)"
        enterTo="transform opacity-100 translateY(0%)"
        leave="transition ease-out duration-75"
        leaveFrom="transform opacity-100 translateY(0%)"
        leaveTo="transform opacity-0 translateY(-10em)"
      >
        <Menu.Items className="absolute left-0 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div>
            <Menu.Item>
              <CleatsMenu />
            </Menu.Item>

            <Menu.Item>
              <EquipmentsMenu />
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex justify-end items-center px-5 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => router.push("/about")}
                >
                  <h1>About</h1>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileMenu;
