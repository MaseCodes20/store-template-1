import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

function CleatsMenu() {
  const router = useRouter();
  return (
    <Menu as="div" className="mx-2">
      <Menu.Button className="w-full">
        <h2 className="menuTitle">Cleats</h2>
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
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`menuItemLink md:w-[374px] ${
                    active && "menuItemLinkActive"
                  }`}
                  onClick={() => router.push("/cleats/firmground")}
                >
                  <h2 className={`menuItemTitle`}>Firm ground</h2>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`menuItemLink ${active && "menuItemLinkActive"}`}
                  onClick={() => router.push("/cleats/indoor")}
                >
                  <h2 className="menuItemTitle">Indoor</h2>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`menuItemLink ${active && "menuItemLinkActive"}`}
                  onClick={() => router.push("/cleats")}
                >
                  <h2 className="menuItemTitle">All</h2>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default CleatsMenu;
