import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Search from "./Search";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Medical Services", href: "#offerings", current: false },
  { name: "Schedule an appointment", href: "/Schedule", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ userFirstName }: { userFirstName: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            {/* Left Section: Logo and Links */}
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-14 w-auto lg:hidden max-h-16"
                  src={"/assets/logo/logo.svg"}
                  alt="dsign-logo"
                />
                <img
                  className="hidden h-14 w-auto lg:block max-h-16"
                  src={"/assets/logo/logo.svg"}
                  alt="dsign-logo"
                />
              </div>

              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <span
                        onClick={() => handleLinkClick(item.href)}
                        className={classNames(
                          item.href === currentLink
                            ? "underline-links"
                            : "text-slategray",
                          "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section: Sign-in/Register or User Greeting */}
            {userFirstName ? (
              <div className="flex items-center space-x-4">
                {/* User Icon */}
                <div className="flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/assets/icons/user-icon.svg"
                    alt="User Icon"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    Welcome, {userFirstName}!
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Signdialog />
                <Registerdialog />
              </div>
            )}

            {/* Search Component */}
            <div className="hidden lg:block mx-4">
              <div className="relative flex items-center group">
                <Search />
              </div>
            </div>

            {/* Drawer for Mobile View */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
