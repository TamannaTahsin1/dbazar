"use client";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { IoIosAddCircleOutline } from "react-icons/io";
import ToggleButton from "../Button/ToggleButton";

const AddCurrency = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);
  return (
    <div>
      {/* Pay Button */}
      <Button
        className="bg-primary hover:bg-primary-600"
        onClick={() => setOpenModal(true)}
      >
        <IoIosAddCircleOutline />
        Add Currency
      </Button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-10  h-full w-full bg-gray-600/10 ${openModal ? "opacity-1 visible" : "invisible opacity-0"}`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`fixed left-auto right-0 top-[85px] flex w-full max-w-4xl justify-center overflow-x-hidden overflow-y-scroll bg-white drop-shadow-md ${openModal ? "opacity-1 visible translate-y-0 duration-300" : "invisible translate-y-32 opacity-0 duration-200"}`}
          style={{ height: "calc(100vh - 85px)" }}
        >
          <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full space-y-3">
              <Input
                type="text"
                label="Name"
                id="_addProduct_product_slug"
                placeholder="name"
              />
              <Input
                type="text"
                label="Symbol"
                id="_addProduct_product_tags"
                placeholder="symbol"
              />
              <ToggleButton title="Enable"></ToggleButton>
            </div>

            <div className="flex items-center justify-between gap-3 py-5">
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
                Add Currency
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrency;
