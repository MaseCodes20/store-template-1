import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

function EquipmentsMenu() {
  const router = useRouter();
  return (
    <Menu as="div" className="mx-2">
      <Menu.Button className="w-full">
        <h2 className="flex justify-end items-center mx-3 my-2">Equipments</h2>
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
        <Menu.Items className="absolute left-0 right-0 shadow-lg bg-white  divide-y divide-gray-100 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-gray-300 text-white"
                  }`}
                  onClick={() => router.push("/balls")}
                >
                  <h2 className="flex-1 text-right md:text-center">BALLS</h2>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-gray-300 text-white"
                  }`}
                  onClick={() => router.push("/shinguards")}
                >
                  <h2 className="flex-1 text-right md:text-center">
                    SHIN GUARDS
                  </h2>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-gray-300 text-white"
                  }`}
                  onClick={() => router.push("/gloves")}
                >
                  <h2 className="flex-1 text-right md:text-center">GLOVES</h2>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default EquipmentsMenu;
