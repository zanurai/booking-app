"use client";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "book a Stay",
      description: "get a better understanding of your traffic",
      href: "#",
      icon: IoHomeOutline,
    },
    {
      name: "book a flight",
      description: "speak directly to your customer",
      href: "#",
      icon: FaRegPaperPlane,
    },
    {
      name: "Contact our support Team",
      description: " your customer data will be save and secure",
      href: "#",
      icon: HiOutlineChatBubbleLeft,
    },
  ];

  const calltoContactAction = [
    { name: "See Demos Booking", href: "#", icon: IoPlayCircleOutline },
    { name: "Contact support ", href: "#", icon: FaPhone },
  ];
  return (
    <header className="bg-[#013b94] fixed w-full z-[100] h-[110px] ">
      <nav
        className=" flex max-w-7xl items-center justify-between p-6 lg:px-8 pt-[0px]"
        aria-label="Global"
      >
        <div>
          <Link href="/" className="container -m-1.5 p-1.5 ">
            <span className="container mx-auto my-0 sr-only">Booking.com</span>
            <img
              className="h-20 w-auto decoration-zinc-900 "
              src="./hole.png"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <RxHamburgerMenu className="h-6 w-6 " aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12  ml-[80px]">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-l text-sm font-semibold leading-6 text-white ">
              Stays
              <IoIosArrowDown
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-950/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-x-2 rounded-lg p-4 text-sm leading-6 hover-bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none item-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013894]group-hover:text-blue-640"
                          aria-hidden="true"
                        />
                      </div>

                      <div className=" h-11  flex-none  item-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013894]"
                        >
                          {item.name}
                        </a>
                        <p className="mt-1 text-[#013894]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {calltoContactAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013894] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013894]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Car Rents
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Attractions
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flights + Hotals
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end  ">
          <a className="text-sm font-semibold leading-6 text-white flex align-center justify-center">
            Login
            <span aria-hidden="true">
              <CiLogin className="mt-1 " />
            </span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm-ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <img className="h-20 w-auto" src="./hole.png" />
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaXmark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        Stays
                        <IoIosArrowDown
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...calltoContactAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flight
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Car Rents
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Attractions
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flights + Hotals
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
