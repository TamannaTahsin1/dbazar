"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Button";

const Cart = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* Pay Button */}
      <Button
        className="hover:bg-primary-600 overflow-hidden text-black"
        onClick={() => setOpenModal(true)}
      >
        {children}
      </Button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-[99999] h-full w-full bg-gray-600/10 ${openModal ? "opacity-1 visible" : "invisible opacity-0"} duration-500`}
        style={{ zIndex: 1000 }}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`fixed left-auto right-0 z-[9999] flex h-screen w-full max-w-sm justify-center overflow-x-hidden overflow-y-scroll bg-white drop-shadow-md ${openModal ? "visible translate-x-0" : "invisible translate-x-32"} duration-500`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between bg-gray-200 px-2 py-5">
              <h1 className="text-lg">Shopping Cart</h1>
              <Button
                onClick={() => setOpenModal(false)}
                className="bg-transparent p-0"
              >
                <IoClose className="text-lg text-black" />
              </Button>
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-5 sm:px-6 lg:px-8">
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full bg-red-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full bg-primary"
              >
                Add Category
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
